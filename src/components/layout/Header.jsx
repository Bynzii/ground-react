
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Header.css'


// header-imgs
import headerLogo from '../../assets/img/hlogo.png'
import gnbBtnOpen from '../../assets/img/hamberger.png'
import gnbBtnClose from '../../assets/img/xbtn.png'

// gnbData
const gnbData = [
  {
    label: 'ground', 
    to: '/about',
    depth2: [{label: "about 'ground'", to: '/about'}]
  },
  {
    label: 'subscription',
    to: '/subscription',
    depth2: [
      {label: "꽃다발", to: '.'},
      {label: "화분", to: '.'},
      {label: "분재/테라리움", to: '.'},
    ]
  },
  {
    label: 'our garden',
    to: '/our',
  },
  {
    label: 'shop',
    to: '.',
    depth2: [
      {label: "굿즈", to: '.'},
      {label: "꽃다발", to: '.'},
      {label: "식물", to: '.'},
      {label: "화분", to: '.'},
      {label: "테라리움", to: '.'},
    ]
  },
  {
    label: 'my ground',
    to: '.',
  },
  {
    label: 'login',
    to: '.',
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true)
    document.body.classList.add('noScroll')
  };

  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove('noScroll')
  };

  return (
  <>
    <header>
      <div className="header-inner">
        <h1 className="header-logo">
          <Link to="/">
            <img src={headerLogo} alt="그라운드 로고" />
            <span className="soundOnly">그라운드</span>
          </Link>
        </h1>

        <nav>
          <ul className="gnb">
            {gnbData.map((menu) => (
              <li key={menu.label}>
                <Link to={menu.to}>{menu.label}</Link>

                {menu.depth2  &&  (
                  <ul className='depth2'>
                    {menu.depth2.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.to}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button type="button" className='gnbBtn' onClick={openMenu}>
            <img src={gnbBtnOpen} alt="전체메뉴 열기" />
          </button>
        </nav>
      </div>
    </header>

    {/* 전체 메뉴 > 모바일 */}
    <div className={isOpen ? 'mobile-menu active' : 'mobile-menu'}>
      <button type="button" className='gnbBtn' onClick={closeMenu}>
        <img src={gnbBtnClose} alt="전체메뉴 닫힘" />
      </button>
      <ul>
        {gnbData.map((menu) => (
          <li key={menu.label}>
            <Link to={menu.to}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
export default Header