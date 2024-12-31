import React, { ComponentProps } from 'react'

const Coinbase = (props: ComponentProps<"svg">) => {
  return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g clip-path="url(#clip0_1951_3558)">
              <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#0052FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9375 20C5.9375 27.7665 12.2335 34.0625 20 34.0625C27.7665 34.0625 34.0625 27.7665 34.0625 20C34.0625 12.2335 27.7665 5.9375 20 5.9375C12.2335 5.9375 5.9375 12.2335 5.9375 20ZM16.4062 15.4688C15.8885 15.4688 15.4688 15.8885 15.4688 16.4062V23.5938C15.4688 24.1115 15.8885 24.5312 16.4062 24.5312H23.5938C24.1115 24.5312 24.5312 24.1115 24.5312 23.5938V16.4062C24.5312 15.8885 24.1115 15.4688 23.5938 15.4688H16.4062Z" fill="white" />
          </g>
          <defs>
              <clipPath id="clip0_1951_3558">
                  <rect width="40" height="40" fill="white" />
              </clipPath>
          </defs>
      </svg>

  )
}

export default Coinbase