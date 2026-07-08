import { useState, useEffect } from 'react'
import '../assets/css/Hero.css'

import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const tabs = [
  {id: 'left', label: 'ground'},
  {id: 'right', label: "my 'ground'"},
]

const HeroTabs = ({tabs, activeTab, onTabChange, hoveredTab, tabWidths}) => {
  return (
    <ul className="hero-tabs">
      {tabs.map((tab) => (
        <li key={tab.id}
          style={tabWidths ? {width: tabWidths[tab.id], transition: 'width 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'} : {}}
        >
          <button
            type="button"
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''} ${hoveredTab === tab.id ? 'hovered' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState(() => window.innerWidth <= 1024 ? 'left' : null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setActiveTab(prev => prev ?? 'left');
      } else {
        setActiveTab(null);
        setHovered(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <main>
        <HeroTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(id) => {
            if (window.innerWidth <= 1024) {
              setActiveTab(id);
              setHovered(null);
            }
          }}
          hoveredTab={hovered}
          tabWidths={{
            left: hovered === 'left' ? '70%' : hovered === 'right' ? '30%' : '50%',
            right: hovered === 'right' ? '70%' : hovered === 'left' ? '30%' : '50%',
          }}
        />

        <div className="hero-all" onMouseLeave={() => { if (!activeTab) setHovered(null); }}>
          <div
            className={`hero-hover-wrap 
              ${hovered === 'left' ? 'expanded' : hovered === 'right' ? 'shrunk' : ''} 
              ${activeTab === 'left' ? 'tab-active' : activeTab === 'right' ? 'tab-inactive' : ''}`}
            onMouseEnter={() => { if (!activeTab) setHovered('left'); }}
          >
            <HeroLeft />
          </div>
          <div
            className={`hero-hover-wrap 
              ${hovered === 'right' ? 'expanded' : hovered === 'left' ? 'shrunk' : ''} 
              ${activeTab === 'right' ? 'tab-active' : activeTab === 'left' ? 'tab-inactive' : ''}`}
            onMouseEnter={() => { if (!activeTab) setHovered('right'); }}
          >
            <HeroRight />
          </div>
        </div>
      </main>
    </>
  )
}
export default Hero;