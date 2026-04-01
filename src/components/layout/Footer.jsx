
import { Link } from 'react-router-dom'

//footer-imgs
import footerLogo from '../../assets/img/flogo.png'
import footerBack from '../../assets/img/footerBack.png'

//footer-link
const footerLinks = [
  {label: '개인정보처리방침', to: '.'},
  {label: '이용약관', to: '.'},
  {label: '영상정보처리방침', to: '.'},
  {label: '이메일 무단 수집거부', to: '.'},
  {label: '고객센터', to: '.'},
  {label: '사업제안', to: '.'},
]

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Link to="/">
            <img src={footerLogo} alt="푸터 그라운드 로고" />
          </Link>
        </div>

        <div className="footer-info">
          <h2>ground <span>(그라운드)</span></h2>
          <div className="info-wrap">
            <div className="info">
              <p>대표 : 변지은</p>
              <p>010.5788.1835</p>
              <p>bynzi92@gamil.com</p>
            </div>
            <div className="info">
              <p>사업자 등록번호 : 409904-04-09904</p>
              <p>대구광역시 동구 화랑로 108길</p>
              <p>1:1 문의하기</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-background">
        <img src={footerBack} alt="푸터 배경이미지" />
      </div>

      <ul className='footer-links'>
        {footerLinks.map((item) => {
          <li key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        })}
      </ul>
    </footer>
  )
}
export default Footer