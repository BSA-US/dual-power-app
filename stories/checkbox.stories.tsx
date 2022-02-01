import React from 'react'

import { Checkbox } from '../components/checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const Unchecked = () => <Checkbox />

export const Checked = () => <Checkbox checked />
