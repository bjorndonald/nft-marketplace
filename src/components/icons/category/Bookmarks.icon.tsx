import React, { ComponentProps } from 'react'

const Bookmarks = (props: ComponentProps<"svg">) => {
  return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M65.625 87.5L43.75 71.875L21.875 87.5V28.125C21.875 27.2962 22.2042 26.5013 22.7903 25.9153C23.3763 25.3292 24.1712 25 25 25H62.5C63.3288 25 64.1237 25.3292 64.7097 25.9153C65.2958 26.5013 65.625 27.2962 65.625 28.125V87.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M34.375 12.5H75C75.8288 12.5 76.6237 12.8292 77.2097 13.4153C77.7958 14.0013 78.125 14.7962 78.125 15.625V75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

  )
}

export default Bookmarks