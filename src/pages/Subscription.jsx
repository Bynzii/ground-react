
import { useState } from "react";
import Section from "../components/common/Section";
import Tabs from "../components/common/Tabs";
import '../assets/css/Subscription.css';

// 이미지
import a_img1 from '../assets/img/sec1_a1.png'
import a_img2 from '../assets/img/sec1_a2.png'
import a_img3 from '../assets/img/sec1_a3.png'
import a_img4 from '../assets/img/sec1_a4.png'
import a_img5 from '../assets/img/sec1_a5.png'
import a_img6 from '../assets/img/sec1_a6.png'
import a_img7 from '../assets/img/sec1_a7.png'
import a_img8 from '../assets/img/sec1_a8.png'
import a_img9 from '../assets/img/sec1_a9.png'
import a_img10 from '../assets/img/sec1_a52.png'
import a_img11 from '../assets/img/sec1_a53.png'
import a_img12 from '../assets/img/sec1_a54.png'
import a_img13 from '../assets/img/sec1_a55.png'

import b_img1 from '../assets/img/sec1_b1.png'
import b_img2 from '../assets/img/sec1_b2.png'
import b_img3 from '../assets/img/sec1_b3.png'
import b_img4 from '../assets/img/sec1_b4.png'
import b_img5 from '../assets/img/sec1_b5.png'
import b_img6 from '../assets/img/sec1_b6.png'
import b_img7 from '../assets/img/sec1_b7.png'
import b_img8 from '../assets/img/sec1_b8.png'
import b_img9 from '../assets/img/sec1_b9.png'
import b_img10 from '../assets/img/sec1_b52.png'
import b_img11 from '../assets/img/sec1_b53.png'
import b_img12 from '../assets/img/sec1_b54.png'
import b_img13 from '../assets/img/sec1_b55.png'

import c_img1 from '../assets/img/sec1_c1.png'
import c_img2 from '../assets/img/sec1_c2.png'
import c_img3 from '../assets/img/sec1_c3.png'
import c_img4 from '../assets/img/sec1_c4.png'
import c_img5 from '../assets/img/sec1_c5.png'
import c_img6 from '../assets/img/sec1_c6.png'
import c_img7 from '../assets/img/sec1_c7.png'
import c_img8 from '../assets/img/sec1_c8.png'
import c_img9 from '../assets/img/sec1_c9.png'
import c_img10 from '../assets/img/sec1_c52.png'
import c_img11 from '../assets/img/sec1_c53.png'
import c_img12 from '../assets/img/sec1_c54.png'
import c_img13 from '../assets/img/sec1_c55.png'



// tab 데이터
const tabData = [
  {id: 1, label: '꽃다발'},
  {id: 2, label: '화분'},
  {id: 3, label: '분재/테라리움'},
]

// tabContent 데이터
const tabContents = {
  // 꽃다발
  1: {
    items: [
      {id: 1, img: a_img1, name:'pink', price: '₩22,000'},
      {id: 2, img: a_img2, name:'blue', price: '₩22,000'},
      {id: 3, img: a_img3, name:'mint', price: '₩22,000'},
      {id: 4, img: a_img4, name:'purple', price: '₩22,000'},
    ],
    bigImgs : [
      {id: 1, img:a_img5},
      {id: 2, img:a_img10},
      {id: 3, img:a_img11},
      {id: 4, img:a_img12},
      {id: 5, img:a_img13},
    ],

    clickImgs : [
      {id: 1, img: a_img6, name: 'pink'},
      {id: 2, img: a_img7, name: 'blue'},
      {id: 3, img: a_img8, name: 'mint'},
      {id: 4, img: a_img9, name: 'purple'},
    ]
  },

  // 화분
  2: {
    items: [
      {id: 1, img: b_img1, name:'cac', price: '₩22,000'},
      {id: 2, img: b_img2, name:'monte', price: '₩22,000'},
      {id: 3, img: b_img3, name:'palson', price: '₩22,000'},
      {id: 4, img: b_img4, name:'cac2', price: '₩22,000'},
    ],
    bigImgs : [
      {id: 1, img:b_img5},
      {id: 2, img:b_img10},
      {id: 3, img:b_img11},
      {id: 4, img:b_img12},
      {id: 5, img:b_img13},
    ],

    clickImgs : [
      {id: 1, img: b_img6, name: 'cac'},
      {id: 2, img: b_img7, name: 'monte'},
      {id: 3, img: b_img8, name: 'palson'},
      {id: 4, img: b_img9, name: 'cac2'},
    ]
  },

  // 분재
  3: {
    items: [
      {id: 1, img: c_img1, name:'tera', price: '₩22,000'},
      {id: 2, img: c_img2, name:'sol', price: '₩22,000'},
      {id: 3, img: c_img3, name:'stone', price: '₩22,000'},
      {id: 4, img: c_img4, name:'palm', price: '₩22,000'},
    ],
    bigImgs : [
      {id: 1, img:c_img5},
      {id: 2, img:c_img10},
      {id: 3, img:c_img11},
      {id: 4, img:c_img12},
      {id: 5, img:c_img13},
    ],
    clickImgs : [
      {id: 1, img: c_img6, name: 'tera'},
      {id: 2, img: c_img7, name: 'sol'},
      {id: 3, img: c_img8, name: 'stone'},
      {id: 4, img: c_img9, name: 'palm'},
    ]
  },


}

const Subscription = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImg, setActiveImg] = useState(null);  
  const tabContent = tabContents[activeTab];

  const handleTabChange = (id) => {
    setActiveTab(id)
    setActiveImg(null)  // 탭 바뀌면 초기화
  }

  return (
    <Section secTitle='subscription' > 
      <div className="sec-desc">
        <p className="desc">
          <span className="TT">'subscription'</span>은 이달의 식물 정기구독 서비스 입니다. <br />
          이달의 식물 정기 구독에는 그라운드의 시그니처 꽃다발 / 화분 / 분재 / 테라리움 으로 구성되어 있고, 높은 만족감을 위해 이달의 정기구독은 소수로 구성되어 있습니다.
        </p>
        <b className="bold">
          <span className="TT">'ground'</span>의 식물 구독 서비스는 좋은재료(건강한 식물, 난석, 상토, 마사토, 영양제)를 사용하여 직접 식재 하므로 안심하고 구매 하시면 됩니다.
        </b>
      </div>

      {/* tab */}
      <Tabs
        tabs={tabData}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* tab-contents */}
      <div className="tab-con">
        <div className="tcon-inner">
          <div className="tcon-left">
            {tabContent.items.map((item) => (
              <div className="items" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="item-info">
                  <span className="TT">{item.name}</span>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="tcon-right">
            <div className="fxCenter">
              <div className="bigImg">
                <img 
                  src={activeImg === null ? tabContent.bigImgs[0].img : tabContent.bigImgs[activeImg + 1].img} 
                  alt="대표이미지" 
                  />
              </div>
              <div className="small-list">
                {tabContent.clickImgs.map((item, index) => (
                  <div 
                  className={`smBtn ${activeImg === index ? 'active' : ''}`}
                  key={item.id}
                  onClick={() => setActiveImg(index)}
                  >
                    <img src={item.img} alt={item.name} />
                    <span className="TT">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="year-info">
              <p className="TT">1year</p>
              <div className="price-wrap">
                <span className="price-orig">₩264,000</span>
                <span className="price-sale">₩200,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default Subscription
