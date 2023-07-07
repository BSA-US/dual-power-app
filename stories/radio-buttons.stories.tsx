import React from 'react'

import { RadioButton, RadioButtons, RadioIndicator } from '../components'

export default {
  component: RadioButtons,
  title: 'RadioButtons',
}

export function ButtonBar() {
  return (
    <RadioButtons>
      <RadioButton value='radio-button-1'>
        <RadioIndicator /> Option 1
      </RadioButton>
      <RadioButton value='radio-button-2'>
        <RadioIndicator /> Option 2
      </RadioButton>
      <RadioButton value='radio-button-3'>
        <RadioIndicator />
        Option 3
      </RadioButton>
    </RadioButtons>
  )
}
