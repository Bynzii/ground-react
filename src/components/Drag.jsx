import { useState, useRef } from "react"
import html2canvas from "html2canvas"
import { Download as SavedIco } from "lucide-react"
import Section from "./common/Section"
import "../assets/css/Drag.css"

// img
import drag1 from '../assets/img/drag1.png'
import drag2 from '../assets/img/drag2.png'
import drag3 from '../assets/img/drag3.png'
import drag4 from '../assets/img/drag4.png'
import drag5 from '../assets/img/drag5.png'
import drag6 from '../assets/img/drag6.png'
import drag7 from '../assets/img/drag7.png'
import drag8 from '../assets/img/drag8.png'
import drag9 from '../assets/img/drag9.png'
import drag10 from '../assets/img/drag10.png'
import drag11 from '../assets/img/drag11.png'
import drag12 from '../assets/img/drag12.png'
import dragMain from '../assets/img/drag_main.png'

const dragDeco = [
  {id: 1, img: drag1},
  {id: 2, img: drag2},
  {id: 3, img: drag3},
  {id: 4, img: drag4},
  {id: 5, img: drag5},
  {id: 6, img: drag6},
  {id: 7, img: drag7},
  {id: 8, img: drag8},
  {id: 9, img: drag9},
  {id: 10, img: drag10},
  {id: 11, img: drag11},
  {id: 12, img: drag12},
]

// 드래그 아이템
const DragItem = ({img, alt}) => {
  const [pos, setPos] = useState({x: 0, y: 0})
  const startPos = useRef({x: 0, y: 0})
  const isDragging = useRef(false)

  const handleMouseDown = (e) => {
    isDragging.current = true
    startPos.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }

    const handleMouseMove = (e) => {
      if (!isDragging.current) return
      setPos({ x: e.clientX - startPos.current.x, y: e.clientY - startPos.current.y })
    }

    const handleMouseUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <img
      src={img}
      alt={alt}
      draggable={false}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: 'grab',
      }}
      onMouseDown={handleMouseDown}
    />
  )
}

const Drag = () => {
  const dragRoomRef = useRef(null)

  const handleSave = () => {
    html2canvas(dragRoomRef.current).then((canvas) => {
      const link = document.createElement('a')
      link.download = 'my-room.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <Section secTitle='home Drag home' className="secDrag">
      <div className="sec-desc">
        <p className="desc">
          준비 된 이미지들을 자유롭게 드래그해서 나만의 'home DRAG home'을 만들어주세요! <br />
          '등록하기' 를 눌러 이미지를 올려 주시고, SNS에 <span className="TT primary">@ground_official</span> 을 태그해 주세요. 많은 하트와 좋아요를 받으신 분들께는 선물을 드립니다.
        </p>
        <b className="bold">*본 이벤트는 별도의 공지가 없을 시 매달 진행 됩니다.</b>
      </div>

      <div className="drag-wrap" ref={dragRoomRef}>
        <div className="drag-deco">
          {dragDeco.slice(0, 6).map((item) => (
            <DragItem key={item.id} img={item.img} alt={`deco${item.id}`} />
          ))}
        </div>

        <div className="drag-room">
          <img src={dragMain} alt="원룸 이미지" />
        </div>

        <div className="drag-deco">
          {dragDeco.slice(6, 12).map((item) => (
            <DragItem key={item.id} img={item.img} alt={`deco${item.id}`} />
          ))}
        </div>
      </div>

      <button type="button" className="ico saved" onClick={handleSave}>
        <SavedIco className="savedIco" size={30} />
      </button>
    </Section>
  )
}
export default Drag