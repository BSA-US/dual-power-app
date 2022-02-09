import React from 'react'

import { Checkbox } from '../components/checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const Unchecked = () => <Checkbox />

export const Checked = () => <Checkbox checked />
