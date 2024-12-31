import React, { ComponentProps } from 'react'

const Envelope = (props: ComponentProps<"svg">) => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H28C28.5523 6 29 6.44772 29 7V24C29 24.5304 28.7893 25.0391 28.4142 25.4142C28.0391 25.7893 27.5304 26 27 26H5C4.46957 26 3.96086 25.7893 3.58579 25.4142C3.21071 25.0391 3 24.5304 3 24V7ZM5 8V24H27V8H5Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.26285 6.32428C3.63604 5.91716 4.26861 5.88966 4.67573 6.26285L16 16.6434L27.3243 6.26285C27.7314 5.88966 28.364 5.91716 28.7372 6.32428C29.1104 6.7314 29.0828 7.36397 28.6757 7.73716L16.6757 18.7372C16.2934 19.0876 15.7066 19.0876 15.3243 18.7372L3.32428 7.73716C2.91716 7.36397 2.88966 6.7314 3.26285 6.32428Z" />
      </svg>

  )
}

export default Envelope