"use client";
import moment from 'moment'
import React, { ComponentProps, useEffect, useState } from 'react'
import { cx } from 'react-twc';

const Timer = (props: ComponentProps<"div">) => {
  
    useEffect(() => {
        var time = 7200;
        var duration = moment.duration(time * 1000, 'milliseconds');
        var interval = 1000;
      const timing = setInterval(() => {
          duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
        const hours = document.getElementById("hours") as HTMLHeadingElement
          const minutes = document.getElementById("minutes") as HTMLHeadingElement
          const seconds = document.getElementById("seconds") as HTMLHeadingElement
          if(!hours && !minutes && !seconds) return
          hours.innerText = duration.hours() < 10 ? "0" + duration.hours().toFixed(0) + "" : duration.hours().toFixed(0) + ""
          minutes.innerText = duration.minutes() < 10 ? "0" + duration.minutes().toFixed(0) + "" : duration.minutes().toFixed(0) + ""
          seconds.innerText = duration.seconds() < 10 ? "0" + duration.seconds().toFixed(0) + "" : duration.seconds().toFixed(0) + ""
      }, interval)
    
      return () => {
        clearInterval(timing)
      }
    }, [])
    
  return (
      <div {...props} className={cx("bg-base-200/50 rounded-5 p-[30px] flex flex-col gap-2.5", props.className)} >
        <div className="grid gap-2.5 justify-items-center grid-cols-5 tablet:grid-cols-[repeat(5,min-content)]">
            <div className="flex gap-[5px] flex-col">
                <h3 id='hours'></h3>
                <span className='caption'>Hours</span>
            </div>
            <h4>
                :
            </h4>
              <div className="flex gap-[5px] flex-col">
                  <h3 id='minutes'></h3>
                  <span className='caption'>Minutes</span>
              </div>
              <h4>
                  :
              </h4>
              <div className="flex gap-[5px] flex-col">
                  <h3 id='seconds'></h3>
                  <span className='caption'>Seconds</span>
              </div>
              
        </div>
    </div>
  )
}

export default Timer