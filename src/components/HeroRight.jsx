// import '../assets/css/HeroRight.css'

//vid
import mainVid from "../assets/vid/plant.mp4"

//img
import main6 from "../assets/img/main6.png";
import main7 from "../assets/img/main7.png";
import main8 from "../assets/img/main8.png";
import main9 from "../assets/img/main9.png";
import main10 from "../assets/img/main10.png";
import main11 from "../assets/img/main11.png";

const mainPlant = {
  img: main6, name: '그리니', sort: '클로로피텀', birth: '2024.06.06',
  status: [
    { unit: '%', value: '10', label: '물', color: 'primary' },
    { unit: '%', value: '78', label: '습도', color: 'text' },
    { unit: '℃', value: '24', label: '온도', color: 'secondary-red' },
  ],
  sub: [
    { id: 1, img: main7, name: '그루니' },
    { id: 2, img: main8, name: '그로니' },
  ]
}

const addPlant = [
  {id: 1, img: main9, name: '솔솔이'},
  {id: 2, img: main10, name: '쭈기'},
  {id: 3, img: main11, name: '캑터'},
]

const HeroRight = () => {
  return (
    <div className="hero-wrap right">
      <div className="hero-vid">
        <video src={mainVid} muted autoPlay loop controls playsInline></video>
      </div>

      <div className="hero-container">
        <div className="main-tit">
          <h3>my ground</h3>
        </div>

        <p className="desc">
          마이 그라운드에서 나의 식물을 등록 할 수 있어요.
          내가 품은 반려 식물을 어떤 환경에서 돌봐야 하는지, 물 주기는 언제인지 등 한눈에 볼 수 있습니다. ‘그라운드'에서 구매 후 등록 해주세요.
        </p>

        {/* top */}
        <div className="hero-con">
          {/* left */}
          <div className="fxCol">
            <img src={mainPlant.img} alt="반려식물 이미지" />
            <div className="con-txt">
              <p className="desc">이름 : {mainPlant.name}</p>
              <p className="desc">종류 : {mainPlant.sort}</p>
              <p className="desc">생일 : {mainPlant.birth}</p>
            </div>
          </div>  

          {/* right */}
          <div className="fxCol">
            <div className="plantStatus">
              {mainPlant.status.map((item) => (
              <div key={item.id} className="fxcol">
                  <span>{item.unit}</span>
                  <span className={item.color}>{item.value}</span>
                  <span>{item.label}</span>
              </div>
                ))}
            </div>

            <div className="subPlant">
              {mainPlant.sub.map((item) => (
                <div className="fxcol" key={item.id}>
                  <img src={item.img} alt="/" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* btm 추가 식물 */}
        <div className="hero-con">
          {addPlant.map((item) => (
            <div className="fxCol" key={item.id}>
              <img src={item.img} alt="추가된 나의 식물" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <button type="button"></button>
      </div>


    </div>
  )
}
export default HeroRight