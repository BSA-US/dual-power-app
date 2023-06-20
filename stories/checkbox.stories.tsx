import React from 'react'

import { Checkbox } from '../components'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const Unchecked = () => <Checkbox />

export const Checked = () => <Checkbox checked />
