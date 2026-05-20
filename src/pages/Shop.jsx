
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Section from "../components/common/Section";
import Popup from "../components/common/Popup";
import usePopup from "../hooks/usePopup";
import '../assets/css/Shop.css';


// img
import shop1 from '../assets/img/shop1.jpg'
import shop2 from '../assets/img/shop2.png'
import shop3 from '../assets/img/shop3.png'
import shop4 from '../assets/img/shop4.jpg'
import shop5 from '../assets/img/shop5.jpg'
import shop6 from '../assets/img/shop6.png'
import cart from '../assets/img/ico_cart.svg'

// products
const products = [
  {id: 1, type: 'color', color: 'ivory', text:';)', aniDuration:'1s', aniDelay: '3s'},
  {id: 2, type: 'product', img: shop1,  name: 'boots', price: '₩ 50,000'},
  {id: 3, type: 'color', color: 'red', text:'*^^*', aniDuration:'1.4s', aniDelay: '4s'},
  {id: 4, type: 'product', img: shop2,  name: 'sol', price: '₩ 80,000'},
  {id: 5, type: 'color', color: 'primary', text:'✦‿✦', aniDuration:'1.2s', aniDelay: '5s'},
  {id: 6, type: 'product', img: shop3,  name: 'tumb', price: '₩ 18,000'},
  {id: 7, type: 'product', img: shop4,  name: 'greenary', price: '₩ 38,000'},
  {id: 8, type: 'color', color: 'primary', text:'✦‿✦', aniDuration:'2s', aniDelay: '3s'},
  {id: 9, type: 'color', color: 'ivory', text:';)', aniDuration:'1.6s', aniDelay: '4s'},
  {id: 10, type: 'product', img: shop5,  name: 'bluer', price: '₩ 30,000'},
  {id: 11, type: 'product', img: shop6,  name: 'ttall', price: '₩ 67,000'},
  {id: 12, type: 'color', color: 'red', text:'*^^*', aniDuration:'1.8s', aniDelay: '2s'},
]

const Shop = () => {
  
  const {isOpen, handleOpen, handleClose} = usePopup();

  const navigate = useNavigate()
  const handleCart = () => {
    handleClose()
    navigate('/Cart')
  }
  return (
    <Section secTitle='shop shop shop' inner={false}>
      <div className="product-wrap">
        {products.map((item) => (
          item.type === 'product' ? (
            <div className="product-item overlay" key={item.id}>
              <img src={item.img} alt={item.img} />
              <div className="product-desc">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
              </div>
              <button type="button" className="ico cart" onClick={handleOpen} />
            </div>
          ) : (
            <div className={`product-item ${item.color}`} key={item.id} style={{animationDuration: item.aniDuration, animationDelay: item.aniDelay }}>
              <span className="emoji">{item.text}</span>
            </div>
          )
        ))}
      </div>

      {isOpen && (
        <Popup className="xs" cancelTxt="쇼핑 계속하기" confirmTxt="장바구니 보기" onClose={handleClose} showClose={false}>
          <div className="cart-wrap">
            <img src={cart} alt="카트 아이콘" />
            <p className="cart-txt">장바구니에 상품이 추가 되었습니다.</p>
          </div>
        </Popup>
      )}
    </Section>
  )
}
export default Shop