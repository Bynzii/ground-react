import { Link } from "react-router-dom";
// import '../assets/css/HeroLeft.css'

// img
import mainBanner from "../assets/img/main1.jpg";
import mainLogo from "../assets/img/main_logo.png";
import main2 from "../assets/img/main2.png";
import main3 from "../assets/img/main3.png";
import main4 from "../assets/img/main4.png";
import main5 from "../assets/img/main5.png";

const HeroLeft = () => {
  return (
    <div className="hero-wrap">
      <div className="hero-banner">
        <img src={mainBanner} alt="메인배너 이미지" />
      </div>

      <div className="hero-container">
        <Link to="/about">
          <div className="main-head">
            <h3 className="main-tit">about</h3>
          </div>
        </Link>

        <Link to="/about">
          <img src={mainLogo} className="mainLogo" alt="about링크 이동 로고 이미지" />
        </Link>

        <p className="desc">
          <span className="TT">&#39;ground(그라운드)&#39;</span> 는 식물 케어와 정기구독 전문 브랜드 입니다.
          식물을 키운다는 것은 나를 돌보게 되는 시작이라고 생각합니다. 누구나 언제든 어디서든 키울 수 있는게 식물이지만,
          생각보다 마음과 정성을 다하는 것이죠. 그 정성이 귀찮음으로 바래지 않도록 ‘그라운드’에서는 케어 뿐 아니라, 식물
          정기구독 시스템으로 노력합니다. 문 앞에 <span className="TT">‘ground’</span>를 발견 하시면, 내 공간으로
          들이시기만 하면 됩니다.
        </p>

        <div className="hero-needs">
          <h4 className="sub-tit">정기구독, 이런 분들에게 필요해요</h4>
          <div className="needs">
            <img src={main2} alt="꽃 이미지" />
            <ul className="needs-list">
              <li className="disc">반려 식물을 처음 키우시는 분</li>
              <li className="disc">새로운 식물을 편하게 받아보고 싶으신 분</li>
              <li className="disc">식물을 정기적으로 선물 하시는 분</li>
              <li className="disc">전문가가 선택한 식물을 키우고 싶으신 분</li>
              <li className="disc">구독 서비스로 구입비용을 절감하고 싶으신 분</li>
            </ul>
          </div>
          <div className="circleImg">
            <img src={main3} alt="1. 1년에 10회" />
            <img src={main4} alt="2. 계절 식물" />
            <img src={main5} alt="3. 관리 및 설명서" />
          </div>
        </div>
      </div>
    </div> 
  );
};
export default HeroLeft;
