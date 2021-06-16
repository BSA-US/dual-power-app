import { reactive, toRefs } from '@vue/reactivity'

interface Store {
  showVideo: boolean
}

const store = reactive<Store>({
  showVideo: false
})

export const { showVideo } = toRefs(store)
