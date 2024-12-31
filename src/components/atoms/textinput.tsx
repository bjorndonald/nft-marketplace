import React, { ComponentProps, ReactNode } from 'react'

interface TextInputProps extends ComponentProps<"input"> {
    leftIcon?: ReactNode
}

const TextInput = (props: TextInputProps) => {
    const {leftIcon, ...inputProps} = props
  return (
      <label className='w-full [&_svg]:h-5 [&_svg]:w-auto  h-[46px] rounded-5 bg-white gap-3 flex items-center ' htmlFor={props.id}>
        {leftIcon}
        <input className='grow p border-none outline-none bg-transparent appearance-none placeholder:text-base-200' {...inputProps} type="text" />
    </label>
  )
}

export default TextInput