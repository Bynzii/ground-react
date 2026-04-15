
import { useEffect } from 'react'

import '../../assets/css/base.css'
// import '../../assets/css/Popup.css'

const Popup = ({className, title, subTitle, onClose, children, cancelTxt = '취소', confirmTxt = '확인', singleTxt}) => {

  //Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, []);


  return (
    <div className="layer">
      <div className="layer-dimmed" onClick={onClose}></div>
        <div className={`layer-wrap ${className || ''}`} onClick={(e) => e.stopPropagation()}>
          <header className="layer-head">
            {title && <h3 className='layer-tit'>{title}</h3>}
            {subTitle && <p>{subTitle}</p>}
            <button type='button' className='layer-close' onClick={onClose}></button>
          </header>

          <div className="layer-con">
            {children}
          </div>

          {singleTxt ? 
            // true
            <div className="btn-wrap">
              <button type="button" className='btn' onClick={onClose}>{singleTxt}</button>
            </div>
            :
            // false > 버튼 2개
            <div className="btn-wrap">
              <button type="button" className='btn border' onClick={onClose}>{cancelTxt}</button>
              <button type="button" className='btn' onClick={onClose}>{confirmTxt}</button>
            </div>
          }
        </div>
    </div>
  )
}
export default Popup