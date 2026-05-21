
import Section from "../components/common/Section";
import Popup from "../components/common/Popup";
import "../assets/css/Banner.css"

const bannerData = [
  {id: 1, title: '회원 가입 시 50,000원 쿠폰팩', desc:'쿠폰함을 확인해 주세요'},
  {id: 2, title: '첫 구매시 정기구독 1회 무료'},
  {id: 3, title: '카카오 채널 추가 시 5,000원 쿠폰 지급'},
  {id: 4, title: '출석 체크 이벤트 진행중', hasBtn: true},
]

const Banner = () => {
  const {isOpen, handleOpen, handleClose} = usePopup();
  return (
    <Section className="banner" inner={false}>
      <div className="banner-wrap">
        <div className="banner-txt">
          <p>회원 가입 시 50,000 쿠폰팩</p>
          <span>쿠폰함을 확인해 주세요.</span>
        </div>
        <div className="banner-txt">
          <p>첫 구매시 정기구독 1회 무료</p>
        </div>
        <div className="banner-txt">
          <p>카카오 채널 추가 시 <br/> 5,000원 쿠폰 지급</p>
        </div>
        <div className="banner-txt">
          <p>출석 체크 이벤트 진행중</p>
          <button className="ico go" onClick={handleOpen}></button>
        </div>
      </div>
    </Section>
  )
}
export default Banner;