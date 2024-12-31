import { Main } from '@/components/atoms/main';
import Image from 'next/image'
import Hero from './hero';
import Trending from './trending';
import Creators from './creators';
import Categories from './categories';
import Discover from './discover';
import Auction from './auction';
import HowItWorks from './howitworks';
import Subscribe from '@/components/ui/subscribe';


export default function Home() {
  return (
    <Main>
      <Hero />
       <Trending />
      <Creators />
      <Categories />
       <Discover />
      <Auction />
      <HowItWorks />
      <Subscribe />
    </Main>
  )
}
