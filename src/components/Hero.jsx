
import { useState } from 'react'
// import '../assets/css/base.css'
import '../assets/css/Hero.css'

import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('left');

  return (
    <>
      <main>
        {/* 탭 */}
        <div className='hero-tabs'>
          <button type="button" onClick={() => setActiveTab('left')}>ground</button>
          <button type="button" onClick={() => setActiveTab('right')}>my 'ground'</button>
        </div>
        
        {/* 패널 */}
        <div id="hero-All">
          <HeroLeft />
          <HeroRight />
        </div>
      </main>
    </>
  )
}
export default Hero