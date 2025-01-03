import React, { ComponentProps } from 'react'

const Twitter = (props: ComponentProps<"svg">) => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M15.9997 11.0005C15.9997 8.25045 18.3122 5.96295 21.0622 6.00045C22.0253 6.01157 22.9646 6.3006 23.7673 6.8328C24.5701 7.365 25.202 8.11771 25.5872 9.00045H29.9997L25.9622 13.038C25.7016 17.0937 23.9063 20.8979 20.9412 23.6773C17.9761 26.4566 14.0638 28.0025 9.9997 28.0005C5.9997 28.0005 4.9997 26.5005 4.9997 26.5005C4.9997 26.5005 8.9997 25.0005 10.9997 22.0005C10.9997 22.0005 2.9997 18.0005 4.9997 7.00045C4.9997 7.00045 9.9997 12.0005 15.9997 13.0005V11.0005Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

  )
}

export default Twitter