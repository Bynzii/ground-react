
// css
import "../assets/css/reset.css"
import "../assets/css/token.css"
import "../assets/css/base.css"

// component
import Section from "../components/common/Section"
import Hero from "../components/Hero"
import Subscription from "./Subscription"
import Shop from "./Shop"
import Drag from "../components/Drag"
import OurSlide from "../components/OurSlide"

// vid 
import plant2 from "../assets/vid/plant2.mp4"
import Banner from "./Banner"

const Home = () => {
  return (
    <>
      <Hero />
      <Subscription />
      {/* 비디오 */}
      <Section>
        <div className="vid-wrap">
          <video src={plant2} muted autoPlay loop playsInline/>
          <div className="vid-overlay">
            <p className="vid-txt">매달 새로운 식물이 문 앞에</p>
          </div>
        </div>
      </Section>
      <Shop />
      <Drag />
      <Banner />
      <OurSlide />
    </>
  )
}
export default Home