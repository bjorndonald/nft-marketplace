import React, { ComponentProps } from 'react'

const Instragam = (props: ComponentProps<"svg">) => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5C7.73858 5.5 5.5 7.73858 5.5 10.5V21.5C5.5 24.2614 7.73858 26.5 10.5 26.5H21.5C24.2614 26.5 26.5 24.2614 26.5 21.5V10.5C26.5 7.73858 24.2614 5.5 21.5 5.5H10.5ZM3.5 10.5C3.5 6.63401 6.63401 3.5 10.5 3.5H21.5C25.366 3.5 28.5 6.63401 28.5 10.5V21.5C28.5 25.366 25.366 28.5 21.5 28.5H10.5C6.63401 28.5 3.5 25.366 3.5 21.5V10.5Z" fill="white" />
          <path d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z" fill="white" />
      </svg>

  )
}

export default Instragam