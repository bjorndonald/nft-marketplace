import React from 'react'
import art from '@/assets/images/categories/art.png'
import collectibles from '@/assets/images/categories/collectibles.png'
import music from '@/assets/images/categories/music.png'
import photography from '@/assets/images/categories/photography.png'
import sport from '@/assets/images/categories/sport.png'
import utility from '@/assets/images/categories/utility.png'
import video from '@/assets/images/categories/video.png'
import virtual_worlds from '@/assets/images/categories/virtual_worlds.png'
import Category from '@/components/atoms/category'
import PaintBrush from '@/components/icons/category/PaintBrush.icon'
import Swatches from '@/components/icons/category/Swatches.icon'
import MusicNotes from '@/components/icons/category/MusicNotes.icon'
import Camera from '@/components/icons/category/Camera.icon'
import VideoCamera from '@/components/icons/category/VideoCamera.icon'
import MagicWand from '@/components/icons/category/MagicWand.icon'
import Basketball from '@/components/icons/category/Basketball.icon'
import Planet from '@/components/icons/category/Planet.icon'

const Categories = () => {
  return (
      <section className='min-h-screen  desktop:py-20 py-10' >
          <div className="mx-auto max-w-breakpoint desktop:gap-[60px] flex flex-col gap-10 px-4 w-full">
              <h3 className="desktop:h3 h4">
                  Browse Categories
              </h3>
              <div className="grid  gap-[30px] grid-cols-2 tablet:grid-cols-4">
                  <Category picture={art} title='Art'>
                      <PaintBrush />
                  </Category>
                  <Category picture={collectibles} title='Collectibles'>
                      <Swatches />
                  </Category>
                  <Category picture={music} title='Music'>
                      <MusicNotes />
                  </Category>
                  <Category picture={photography} title='Photography'>
                      <Camera />
                  </Category>

                  <Category picture={video} title='Video'>
                      <VideoCamera />
                  </Category>
                  <Category picture={utility} title='Utility'>
                      <MagicWand />
                  </Category>
                  <Category picture={sport} title='Sport'>
                      <Basketball />
                  </Category>
                  <Category picture={virtual_worlds} title='Virtual Worlds'>
                      <Planet />
                  </Category>
              </div>
        </div>
        
    </section>
  )
}

export default Categories