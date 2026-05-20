import { useState } from "react";
import Popup from "./common/Popup";
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
    { unit: '%', value: '10', label: '물', color: 'green' },
    { unit: '%', value: '78', label: '습도', color: 'gray' },
    { unit: '℃', value: '24', label: '온도', color: 'red' },
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

  // state
  const [layerOpen, setLayerOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [newPlant, setNewPlant] = useState({name:'', sort:'', birth:'', img: null});
  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem('plants')
    return saved ? JSON.parse(saved) : addPlant
  });
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleOpen = () => {
    setLayerOpen(true);
    document.body.classList.add('noScroll');  
  };

  const handleClose = () => {
    setLayerOpen(false);
    document.body.classList.remove('noScroll');  
    setPreviewImg(null)
  };


  // 식물사진 추가
  const handleImgChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // 식물 등록
  const handleAdd = () => {
    const newPlants = [...plants, {
      name: newPlant.name,
      img: previewImg,
      id: plants.length + 1,
    }]
    setPlants(newPlants)
    localStorage.setItem('plants', JSON.stringify(newPlants))
    setNewPlant({name:'', sort:'', birth:'', img: null})
    setPreviewImg(null)
    handleClose()
  }

  // 식물 삭제
  const handleDelete = (id) => {
    const newPlants = plants.filter((plant) => plant.id !== id)
    setPlants(newPlants)
    localStorage.setItem('plants', JSON.stringify(newPlants))
  }

  // 식물 수정
  const handleEditStart = (item) => {
    setEditId(item.id)
    setEditName(item.name)
  }

  // 식물 수정 완료
  const handleEditDone = () => {
    const newPlants = plants.map((plant) => 
      plant.id === editId ? {...plant, name: editName} : plnat
    )
    setPlants(newPlants)
    localStorage.setItem('plants', JSON.stringify(newPlants))
    setEditId(null) 
    setEditName('')
  }


  return (
    <div className="hero-wrap right">
      <div className="hero-vid">
        <video src={mainVid} muted autoPlay loop controls playsInline></video>
      </div>

      <div className="hero-container">
        <div className="main-head">
          <h3 className="main-tit">my ground</h3>
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
          <div className="fxColCenter g4">
            <div className="plantStatus">
              {mainPlant.status.map((item) => (
              <div key={item.label} className={`fxColCenter ${item.color}`}>
                <span className="simbol">{item.unit}</span>
                <span className={item.color}>{item.value}</span>
                <span className="label">{item.label}</span>
              </div>
                ))}
            </div>

            <div className="subPlant">
              {mainPlant.sub.map((item) => (
                <div className="fxColCenter" key={item.id}>
                  <img src={item.img} alt="/" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* btm 추가 식물 */}
        <div className="hero-con addPlant">
          {plants.map((item) => (
            <div className="fxColCenter" key={item.id}>
              <img src={item.img} alt="추가된 나의 식물" />
              {editId === item.id
                ? <input className="it tac"
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onBlur={(e) => e.key === 'Enter' && handleEditDone()}
                    autoFocus
                  /> 
                : <span onClick={() => handleEditStart(item)}>{item.name}</span>
              }
              <button 
                type="button"
                className="plant-del"
                onClick={() => handleDelete(item.id)}
              >
              </button>
            </div>
          ))}
        </div>
        <button type="button" className="btn Add" onClick={handleOpen}>Add</button>
      </div>

      {/* layer Popup */}
      {layerOpen && (
        <Popup className="smLong" title="식물 등록 하기" confirmTxt="등록" onClose={handleClose} onConfirm={handleAdd}>
          {/* 이미지 업로드 */}
          <div className="img-upload">
            <label htmlFor="plantImg">
              <div className="defalutImg">
                {previewImg 
                  ? <img src={previewImg} alt="미리보기" /> 
                  : <span>+ 사진 추가</span>
                }
              </div>
            </label>
            <input 
              type="file" 
              id="plantImg" 
              className="dpnone"
              onChange={handleImgChange}
            />
          </div>

          <div className="plantInfo-wrap">
            <div className="it-wrap">
              <label htmlFor="plantName">이름</label>
              <input 
                type="text" id="plantName" className="it" placeholder="이름을 입력하세요" 
                onChange={(e) => setNewPlant({...newPlant, name: e.target.value})}
              />
            </div>
            <div className="it-wrap">
              <label htmlFor="plantSort">종류</label>
              <input 
                type="text" id="plantSort" className="it" placeholder="종류를 입력하세요" 
                onChange={(e) => setNewPlant({...newPlant, sort: e.target.value})}
              />
            </div>
            <div className="it-wrap">
              <label htmlFor="plantBirth">생일</label>
              <input 
                type="text" id="plantBirth" className="it" placeholder="생일을 입력하세요" 
                onChange={(e) => setNewPlant({...newPlant, birth: e.target.value})}
              />
            </div>
          </div>
        </Popup>
      )}
    </div>

  )
}
export default HeroRight