
import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarCheck2, X } from "lucide-react";

import Section from "../components/common/Section";
import Popup from "../components/common/Popup";
import usePopup from "../hooks/usePopup";

import 'react-calendar/dist/Calendar.css'
import "../assets/css/Banner.css"

// img
import chkBanner from "../assets/img/banner_check.svg"

// 배너 데이터
const bannerData = [
  {id: 1, title: '회원 가입 시 50,000원 쿠폰팩', desc:'쿠폰함을 확인해 주세요'},
  {id: 2, title: '첫 구매시 정기구독 1회 무료'},
  {id: 3, title: '카카오 채널 추가 시 5,000원 쿠폰 지급'},
  {id: 4, title: '출석 체크 이벤트 진행중', hasBtn: true},
]


const Banner = () => {

  const [step, setStep] = useState(1);
  const [attendDates, setAttendDates] = useState(() => {
    const saved = localStorage.getItem('attendDates')
    return saved ? JSON.parse(saved) : []
  });
  const {isOpen, handleOpen, handleClose} = usePopup();
  const today = new Date()

  const handleBtnClick = () => {
    if (step === 1) {
      setStep(2)
    } else {
      const todayStr = today.toDateString()
      if (!attendDates.includes(todayStr)) {
        const newDates = [...attendDates, todayStr]
        setAttendDates(newDates)
        localStorage.setItem('attendDates', JSON.stringify(newDates))
      }
    }
  }

  const handleCloseAll = () => {
    handleClose()
    setStep(1)      
  }

  return (
    <Section className="banner" inner={false}>
      <div className="banner-wrap">
        {bannerData.map((item) => (
          <div 
            className={`banner-txt ${item.hasBtn ? 'row' : ''} `} 
            key={item.id}
            onClick={item.hasBtn ? handleOpen : undefined}
          >
            <p>{item.title}</p>
            {item.desc && <span>{item.desc}</span>}
            {item.hasBtn && 
              <button className="ico go">
                <CalendarCheck2 size={28}/>
              </button>
            }
          </div>
        ))}
      </div>

      {isOpen && 
        <Popup className="event-check" showClose onClose={handleCloseAll} noBtn>
          <div className={`chk-wrap ${step === 2 ? 'up' : ''}`}>
            <img src={chkBanner} alt="출석체크 안내" />
            {step === 2 && (
              <div className="chk-calendar">
                <Calendar 
                  value={today}
                  locale="en-EN"
                  formatShortWeekday={(locale, date) => 
                    ['S','M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
                  }
                  tileClassName={({date}) => 
                    attendDates.includes(date.toDateString()) ? 'attend' : null
                  }
                />
              </div>
            )}
          </div>

          <div className="btn-wrap">
            <button
              type="button"
              className={`btn ${step === 2 ? 'glass' : ''}`}
              onClick={handleBtnClick}
            >
              {step === 1 ? '이벤트 참여하기' : '출석하기'}
            </button>
          </div>
        </Popup>
      }
    </Section>
  )
  
}
export default Banner;