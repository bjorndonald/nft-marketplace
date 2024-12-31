import React, { ComponentProps } from 'react'

const Discord = (props: ComponentProps<"svg">) => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="white" />
          <path d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9927 9.99959C13.8249 9.98356 11.6678 10.3055 9.59914 10.9539C9.07213 11.119 8.51101 10.8257 8.34584 10.2987C8.18067 9.77168 8.474 9.21056 9.00101 9.04539C11.2656 8.33563 13.6269 7.98281 16.0001 7.99959C18.3732 7.98281 20.7345 8.33563 22.9991 9.04539C23.5261 9.21056 23.8195 9.77168 23.6543 10.2987C23.4891 10.8257 22.928 11.119 22.401 10.9539C20.3323 10.3055 18.1753 9.98356 16.0075 9.99959H15.9927Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34584 21.7012C8.51101 21.1742 9.07213 20.8809 9.59914 21.046C11.6678 21.6944 13.8249 22.0163 15.9927 22.0003H16.0075C18.1753 22.0163 20.3323 21.6944 22.401 21.046C22.928 20.8809 23.4891 21.1742 23.6543 21.7012C23.8195 22.2282 23.5261 22.7893 22.9991 22.9545C20.7345 23.6643 18.3732 24.0171 16.0001 24.0003C13.6269 24.0171 11.2656 23.6643 9.00101 22.9545C8.474 22.7893 8.18067 22.2282 8.34584 21.7012Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2199 4.81121C20.6504 4.56852 21.1551 4.49267 21.6378 4.59812C22.9554 4.88366 24.2453 5.28424 25.4928 5.79524C25.7736 5.90352 26.0259 6.07496 26.2299 6.29638C26.4362 6.52018 26.5875 6.78885 26.672 7.08115L30.9079 21.2255C31.0183 21.594 31.0209 21.9865 30.9152 22.3563C30.8095 22.7262 30.6 23.0581 30.3116 23.3126L30.3064 23.3171C28.2389 25.1161 25.4376 26.4777 22.2556 27.2577C21.8136 27.3703 21.3462 27.3265 20.9327 27.1336C20.521 26.9414 20.1882 26.6132 19.9903 26.2044L18.482 23.2129C18.2334 22.7197 18.4316 22.1184 18.9248 21.8698C19.4179 21.6211 20.0193 21.8194 20.2679 22.3125L21.7804 25.3125L21.7815 25.3147C24.7194 24.5943 27.2136 23.3571 28.9936 21.8083L29.65 22.5627L28.9884 21.8128C28.9902 21.8113 28.9915 21.8092 28.9921 21.8069C28.9928 21.8046 28.9928 21.8022 28.9921 21.7999L24.756 7.65465C24.7525 7.65325 24.7489 7.65182 24.7454 7.65037C23.6025 7.18149 22.4206 6.81412 21.2132 6.55253L21.211 6.55205C21.208 6.55139 21.2049 6.55186 21.2022 6.55337C21.1998 6.55473 21.1979 6.55684 21.1969 6.55937L20.212 9.53905C20.0386 10.0634 19.473 10.348 18.9486 10.1747C18.4243 10.0013 18.1397 9.43574 18.313 8.91136L19.3034 5.91516C19.4629 5.44707 19.7892 5.0541 20.2199 4.81121Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7977 6.55337C10.795 6.55186 10.7919 6.55139 10.7889 6.55205L10.7867 6.55252C9.57939 6.81412 8.39743 7.18148 7.25453 7.65037C7.251 7.65182 7.24746 7.65324 7.24392 7.65465L3.00794 21.7996C3.00725 21.8019 3.00715 21.8046 3.00781 21.8069C3.0084 21.809 3.00951 21.8108 3.01103 21.8123C4.79072 23.3593 7.28311 24.5949 10.2185 25.3147L10.2195 25.3125L11.732 22.3125C11.9807 21.8194 12.582 21.6211 13.0752 21.8698C13.5683 22.1184 13.7665 22.7197 13.5179 23.2129L12.0097 26.2045C11.8118 26.6132 11.479 26.9414 11.0672 27.1336C10.6537 27.3265 10.1863 27.3703 9.74432 27.2577C6.56239 26.4777 3.76102 25.1161 1.69355 23.3171L1.68837 23.3126C1.3999 23.0581 1.19044 22.7262 1.08476 22.3563C0.979102 21.9865 0.981619 21.5942 1.092 21.2258C1.09198 21.2259 1.09203 21.2257 1.092 21.2258L5.3279 7.08117C5.41243 6.78887 5.56377 6.52019 5.77003 6.29638C5.97408 6.07496 6.2263 5.90352 6.50711 5.79524C7.75497 5.28409 9.04529 4.88344 10.3632 4.59788C10.8456 4.49279 11.3499 4.5687 11.78 4.81121C12.2108 5.05409 12.537 5.44708 12.6965 5.91518L12.6995 5.92385L13.6869 8.91136C13.8603 9.43574 13.5757 10.0013 13.0513 10.1747C12.5269 10.348 11.9613 10.0634 11.788 9.53905L10.8031 6.55937C10.802 6.55684 10.8001 6.55473 10.7977 6.55337Z" fill="white" />
          <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="white" />
          <path d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9927 9.99959C13.8249 9.98356 11.6678 10.3055 9.59914 10.9539C9.07213 11.119 8.51101 10.8257 8.34584 10.2987C8.18067 9.77168 8.474 9.21056 9.00101 9.04539C11.2656 8.33563 13.6269 7.98281 16.0001 7.99959C18.3732 7.98281 20.7345 8.33563 22.9991 9.04539C23.5261 9.21056 23.8195 9.77168 23.6543 10.2987C23.4891 10.8257 22.928 11.119 22.401 10.9539C20.3323 10.3055 18.1753 9.98356 16.0075 9.99959H15.9927Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34584 21.7012C8.51101 21.1742 9.07213 20.8809 9.59914 21.046C11.6678 21.6944 13.8249 22.0163 15.9927 22.0003H16.0075C18.1753 22.0163 20.3323 21.6944 22.401 21.046C22.928 20.8809 23.4891 21.1742 23.6543 21.7012C23.8195 22.2282 23.5261 22.7893 22.9991 22.9545C20.7345 23.6643 18.3732 24.0171 16.0001 24.0003C13.6269 24.0171 11.2656 23.6643 9.00101 22.9545C8.474 22.7893 8.18067 22.2282 8.34584 21.7012Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2199 4.81121C20.6504 4.56852 21.1551 4.49267 21.6378 4.59812C22.9554 4.88366 24.2453 5.28424 25.4928 5.79524C25.7736 5.90352 26.0259 6.07496 26.2299 6.29638C26.4362 6.52018 26.5875 6.78885 26.672 7.08115L30.9079 21.2255C31.0183 21.594 31.0209 21.9865 30.9152 22.3563C30.8095 22.7262 30.6 23.0581 30.3116 23.3126L30.3064 23.3171C28.2389 25.1161 25.4376 26.4777 22.2556 27.2577C21.8136 27.3703 21.3462 27.3265 20.9327 27.1336C20.521 26.9414 20.1882 26.6132 19.9903 26.2044L18.482 23.2129C18.2334 22.7197 18.4316 22.1184 18.9248 21.8698C19.4179 21.6211 20.0193 21.8194 20.2679 22.3125L21.7804 25.3125L21.7815 25.3147C24.7194 24.5943 27.2136 23.3571 28.9936 21.8083L29.65 22.5627L28.9884 21.8128C28.9902 21.8113 28.9915 21.8092 28.9921 21.8069C28.9928 21.8046 28.9928 21.8022 28.9921 21.7999L24.756 7.65465C24.7525 7.65325 24.7489 7.65182 24.7454 7.65037C23.6025 7.18149 22.4206 6.81412 21.2132 6.55253L21.211 6.55205C21.208 6.55139 21.2049 6.55186 21.2022 6.55337C21.1998 6.55473 21.1979 6.55684 21.1969 6.55937L20.212 9.53905C20.0386 10.0634 19.473 10.348 18.9486 10.1747C18.4243 10.0013 18.1397 9.43574 18.313 8.91136L19.3034 5.91516C19.4629 5.44707 19.7892 5.0541 20.2199 4.81121Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7977 6.55337C10.795 6.55186 10.7919 6.55139 10.7889 6.55205L10.7867 6.55252C9.57939 6.81412 8.39743 7.18148 7.25453 7.65037C7.251 7.65182 7.24746 7.65324 7.24392 7.65465L3.00794 21.7996C3.00725 21.8019 3.00715 21.8046 3.00781 21.8069C3.0084 21.809 3.00951 21.8108 3.01103 21.8123C4.79072 23.3593 7.28311 24.5949 10.2185 25.3147L10.2195 25.3125L11.732 22.3125C11.9807 21.8194 12.582 21.6211 13.0752 21.8698C13.5683 22.1184 13.7665 22.7197 13.5179 23.2129L12.0097 26.2045C11.8118 26.6132 11.479 26.9414 11.0672 27.1336C10.6537 27.3265 10.1863 27.3703 9.74432 27.2577C6.56239 26.4777 3.76102 25.1161 1.69355 23.3171L1.68837 23.3126C1.3999 23.0581 1.19044 22.7262 1.08476 22.3563C0.979102 21.9865 0.981619 21.5942 1.092 21.2258C1.09198 21.2259 1.09203 21.2257 1.092 21.2258L5.3279 7.08117C5.41243 6.78887 5.56377 6.52019 5.77003 6.29638C5.97408 6.07496 6.2263 5.90352 6.50711 5.79524C7.75497 5.28409 9.04529 4.88344 10.3632 4.59788C10.8456 4.49279 11.3499 4.5687 11.78 4.81121C12.2108 5.05409 12.537 5.44708 12.6965 5.91518L12.6995 5.92385L13.6869 8.91136C13.8603 9.43574 13.5757 10.0013 13.0513 10.1747C12.5269 10.348 11.9613 10.0634 11.788 9.53905L10.8031 6.55937C10.802 6.55684 10.8001 6.55473 10.7977 6.55337Z" fill="white" />
      </svg>

  )
}

export default Discord