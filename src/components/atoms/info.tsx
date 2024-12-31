import React, { ComponentProps } from 'react'
import { cx } from 'react-twc'


const InfoCard = (props: ComponentProps<"div">) => {
  return (
    <div className={cx("p-5 bg-base-200  gap-x-2.5 tablet:gap-y-2.5 tablet:gap-0 rounded-5 grid grid-rows-[repeat(2,min-content)] grid-cols-[min-content_auto] [&_svg]:h-[100px] [&_svg]:[grid-row:1/3] [&_svg]:[grid-column:1/2] [&_svg]:w-auto tablet:grid-cols-1 tablet:grid-rows-[min-content_min-content_min-content] desktop:[&_svg]:h-[250px] tablet:text-center tablet:[&_svg]:h-[160px] desktop:last:mt-2.5", props.className)} {...props}>
        {props.children}
    </div>
  )
}

export default InfoCard