import Section from "../components/common/Section";
// import '../assets/css/About.css'

//img
import miniBanner from '../assets/img/aboutbanner.png'
import mainLogo from '../assets/img/main_logo.png'
import main2 from '../assets/img/main2.png'
import main3 from "../assets/img/main3.png";
import main4 from "../assets/img/main4.png";
import main5 from "../assets/img/main5.png";

import key1 from "../assets/img/sub1_1.png";
import key2 from "../assets/img/sub1_2.png";
import key3 from "../assets/img/sub1_3.png";
import key4 from "../assets/img/sub1_4.png";
import key5 from "../assets/img/sub1_5.png";
import key6 from "../assets/img/sub1_6.png";

import sig from "../assets/img/sub1_7.png";
import varia1 from "../assets/img/sub1_8.jpg";
import varia2 from "../assets/img/sub1_9.jpg";
import varia3 from "../assets/img/sub1_10.jpg";
import varia4 from "../assets/img/sub1_11.jpg";

import gray1 from "../assets/img/sub1_12.jpg";
import gray2 from "../assets/img/sub1_13.png";
import gray3 from "../assets/img/sub1_14.jpg";
import gray4 from "../assets/img/sub1_15.jpg";
import gray5 from "../assets/img/sub1_16.jpg";
import gray6 from "../assets/img/sub1_17.jpg";

import inco1 from "../assets/img/sub1_18.png";
import inco2 from "../assets/img/sub1_19.png";
import inco3 from "../assets/img/sub1_20.png";
import inco4 from "../assets/img/sub1_21.png";
import inco5 from "../assets/img/sub1_22.png";
import inco6 from "../assets/img/sub1_23.png";

const About = () => {

  const kWordData = [
    {icon1: key1, icon2: key4, text: '안정감'},
    {icon1: key2, icon2: key5, text: '유기적'},
    {icon1: key3, icon2: key6, text: '루틴'},
  ]

  const colorway = [
    {tit: 'primary', text:'#00887B' },
    {tit: 'secondary', text: ['#00887B - #000000', '#F3F0DF', '#FD6955' ]},
  ]

  const variationData = [ varia1, varia2, varia3, varia4 ]

  const grayScaleData = [ gray1, gray2, gray3, gray4, gray5, gray6 ]
  
  const inccorectData = [ inco1, inco2, inco3, inco4, inco5, inco6 ]



  return (
    <div>
      <div className="mini-hero">
        <img src={miniBanner} alt="" />
      </div>

      <Section secTitle='about'>
        <img src={mainLogo} alt="" />
        <div className="sec-desc">
          <p className="desc">
          <span className="TT">'ground(그라운드)'</span>는 식물 케어와 정기구독 전문 브랜드 입니다. 식물을 키운다는 것은 나를 돌보게 되는 시작이라고 생각합니다. 누구나
            언제든 어디서든 키울 수 있는게 식물이지만 생각보다 마음과 정성을 다하는 것이죠. 그 정성이 귀찮음으로 바래지 않도록 ‘그라운드’에서는 케어 뿐 아니라, 식물 정기구독 시스템으로 노력합니다. 문 앞에 ‘ground’를 발견 하시면, 내
            공간으로 들이시기만 하면 됩니다.
          </p>
        </div>
      </Section>

      <Section>
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
      </Section>

      {/* BI */}
      <Section secTitle='BI'>
      <h4 className="sub-tit">background</h4>
        <div className="sec-desc">
          <p className="desc">
          코로나19로 집에서 보내는 시간이 많아지게 됐습니다. 여러 가지의 취미 생활이 생기고 사라지게 됐는데 그 중 굳건히 자리잡은 ‘플랜테리어’ , ‘반려식물’이 있습니다. 하지만 직접 구매하러 가는게
        시간과 결심이 필요하기도 합니다. 식물에 새로운 유입자인 MZ세대에 맞추어 구입과 케어가 쉽고, 많은 정기구독 사이에 식물 정기 구독도 선택사항이 있다면 식물은 낯설지만, 시스템은 익숙하게 식물과
        가까워 질 수 있습니다. 로고의 형태는 수중 식물인 ‘부레옥잠’ 돌에 낀 이끼를 모티브로 볼드하고, 유기적인 형태로 디자인 했습니다.
          </p>
        </div>
      </Section>

      {/* 키워드 */}
      <Section>
        <h4 className="sub-tit">BI keywords</h4>
        <div className="kword-wrap">
          {kWordData.map((item, idx) => (
            <div className="kword" key={idx}>
              <img src={item.icon1} alt="" />
              <span className="WT">{item.text}</span>
              <img src={item.icon2} alt="" />
            </div>
          ))}
        </div>
      </Section>

      {/* 시그니처 + 컬러 */}
      <Section>
        <h4 className="sub-tit">signature</h4>
        <div className="sig-wrap">
          <img src={sig} alt="" />
        </div>

        <div className="color-wrap">
          {colorway.map((item) => (
            <div className="color-item" key={item.tit}>
              <h4>{item.tit}</h4>
              {Array.isArray(item.text) ? (
                item.text.map((color, index) => (
                  <span key={index}>{color}</span>
                ))
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 컬러 - 베리에이션 */}
      <Section>
        <h4 className="sub-tit">color variation</h4>
        <div className="variation-wrap">
          {variationData.map((item, idx) => (
            <img src={item} alt="" key={idx} />
          ))}
        </div>
        <div className="grayScale-wrap">
          {grayScaleData.map((item, idx) => (
            <img src={item} alt="" key={idx} />
          ))}
        </div>
      </Section>

      {/* 로고 - 사용오류 */}
      <Section>
        <h4 className="sub-tit">incorrect usage</h4>
        <div className="inccorect-wrap">
          {inccorectData.map((item, idx) => (
            <img src={item} alt="" key={idx} />
          ))}
        </div>
      </Section>
        
    </div>
  )
}
export default About