
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Pagination } from "swiper/modules";
import { Heart } from "lucide-react";
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/pagination'

import Section from "../components/common/Section";
import '../assets/css/OurSlide.css'

// img
import garden1 from '../assets/img/garden1.jpg'
import garden2 from '../assets/img/garden2.jpg'
import garden3 from '../assets/img/garden3.jpg'
import garden4 from '../assets/img/garden4.jpg'
import garden5 from '../assets/img/garden5.jpg'
import garden6 from '../assets/img/garden6.jpg'
import garden7 from '../assets/img/garden7.jpg'
import { useState } from "react";

// slideData
const slideData = [
  {
    id: 1, img: garden1, 
    tag: ['#브라운', '#우드', '#복층'],
    user: '흑설탕', color: 'gray', likes: 142
  },
  {
    id: 2, img: garden2, 
    tag: ['#식물원', '#노랑', '#여름'],
    user: 'pping', color: 'primary', likes: 170
  },
  {
    id: 3, img: garden3, 
    tag: ['#복층인테리어', '#우드', '#chill'],
    user: 'ari_home', color: 'ivory', likes: 42
  },
  {
    id: 4, img: garden4, 
    tag: ['#우리집포토존', '#플렌테리어'],
    user: '식집사', color: 'red', likes: 170
  },
  {
    id: 5, img: garden5, 
    tag: ['#우드', '#거실인테리어', '#이케아'],
    user: 'heyoon27', color: 'gray', likes: 354
  },
  {
    id: 6, img: garden6, 
    tag: ['#화분정리대', '#레코드', '#최애공간'],
    user: 'record', color: 'primary', likes: 112
  },
  {
    id: 7, img: garden7, 
    tag: ['#데스크테리어', '#그린', '#화이트'],
    user: 'ivgreen', color: 'ivory', likes: 281
  },
  
]


const OurSlide = () => {

  // 좋아요 숫자상태
  const [likes, setLikes] = useState(
    slideData.reduce((acc, slide) => ({...acc, [slide.id] : slide.likes}), {})
  );

  // 좋아요 누른 슬라이드 id 배열
  const [likedIds, setLikedIds] = useState([]);

  // 좋아요 토글 : 누르면 +1 / 다시 누르면 -1
  const handleLike = (id) => {
    if (likedIds.includes(id)) {
      setLikedIds(prev => prev.filter(item => item !== id))
      setLikes(prev => ({...prev, [id]: prev[id] - 1}))
    } else {
      setLikedIds(prev => [...prev, id])
      setLikes(prev => ({...prev, [id]: prev[id] + 1}))
    }
  };

  return (
    <Section secTitle='Our garden' inner={false}>
      <div className="sec-desc">
        <p className="desc">
          <span className="TT primary">&#39;our garden&#39;</span> 은 정성스럽게 가꾼 공간과 꿀템, 반려 식물을 서로 공유하고, 공감하는 ‘우리의 정원' 입니다. <br/>
          소중한 나만의 공간과 플렌테리어를 자랑 해주세요! our garden에 이미지를 올려 주시고, SNS에 <span className="TT primary">@ground_official</span> 을 태그해 주세요.
          <br/>
          가장 많은 하트를 받으신 분들께는 매달 다양한 혜택을 드립니다.
        </p>
      </div>

      <Swiper
        modules={[Parallax, Autoplay, Pagination]}
        parallax={true}
        speed={800}
        slidesPerView={4.5}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {slidesPerView: 2},
          768: {slidesPerView: 3},
          1024: {slidesPerView: 3.5},
          1200: {slidesPerView: 4},
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`slide-img ${slide.color}`} data-swiper-parallax="0%">
              <img src={slide.img} alt={slide.user} />
            </div>

            <div className="slide-info" data-swiper-parallax="0%">
              <ul className="tag">
                {slide.tag.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ul className="account">
                <li><span className={slide.color}></span>{slide.user}</li>
                <li onClick={() => handleLike(slide.id)} style={{cursor:'pointer'}}>
                  <Heart size={24} className={likedIds.includes(slide.id) ? 'liked' : ''} fill="transparent"/>
                  <span className="like-C">{likes[slide.id]}</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </Section>
  )

}
export default OurSlide;