import React, { ComponentProps } from 'react'

const Basketball = (props: ComponentProps<"svg">) => {
  return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M23.4375 23.5166C30.449 30.5464 34.383 40.0722 34.375 50.001C34.383 59.9297 30.449 69.4555 23.4375 76.4854" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M76.5632 23.5166C69.5598 30.5516 65.6279 40.0742 65.6279 50.001C65.6279 59.9277 69.5598 69.4503 76.5632 76.4854" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.5 50H87.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M50 12.5V87.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

  )
}

export default Basketball