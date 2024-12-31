import { Button } from '@/components/atoms/button'
import { tw } from '@/utils/cx'
import {Mail} from 'react-feather'
import React from 'react'

const Submit = tw(Button)`
  btn-primary !text-base
  py-0 tablet:!h-[60px] tablet:!min-h-[60px] ring-0 border-none
  tablet:[grid-column:2/3] !min-h-12 !h-12 tablet:rounded-[inherit] rounded-10
`

const Input = tw.input`
  grow text-base-100 placeholder:text-base-200 bg-base-content h-12 input rounded-10 tablet:h-full self-stretch px-4 
`

const Label = tw.label`
  grid tablet:grid-rows-1 grid-cols-1 grid-rows-2 gap-y-4 tablet:grid-cols-[auto_180px] tablet:w-[420px] tablet:h-[60px] tablet:bg-base-content border-none tablet:input placeholder:text-base-200 tablet:min-h-[60px] rounded-5 w-full tablet:pr-0 max-mobile:!h-fit
`

const SubscribeForm = () => {
  return (
    <form>
      <Label>
        <Input type="text" placeholder="Enter your email here" />
        <Submit title='Subscribe' >
          <Mail size={20} />
          Subscribe
        </Submit>
      </Label>
    </form>

  )
}

export default SubscribeForm