import React, { ComponentProps } from 'react'

const TrendUp = (props: ComponentProps<"svg">) => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7071 6.29289C30.0976 6.68342 30.0976 7.31658 29.7071 7.70711L17.7071 19.7071C17.3166 20.0976 16.6834 20.0976 16.2929 19.7071L12 15.4142L3.70711 23.7071C3.31658 24.0976 2.68342 24.0976 2.29289 23.7071C1.90237 23.3166 1.90237 22.6834 2.29289 22.2929L11.2929 13.2929C11.6834 12.9024 12.3166 12.9024 12.7071 13.2929L17 17.5858L28.2929 6.29289C28.6834 5.90237 29.3166 5.90237 29.7071 6.29289Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7C20 6.44772 20.4477 6 21 6H29C29.5523 6 30 6.44772 30 7V15C30 15.5523 29.5523 16 29 16C28.4477 16 28 15.5523 28 15V8H21C20.4477 8 20 7.55228 20 7Z" />
      </svg>

  )
}

export default TrendUp