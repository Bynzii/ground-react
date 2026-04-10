
import '../../assets/css/base.css'
import '../../assets/css/Section.css'


const Section = ({inner=true, secTitle, children}) => {
  return (
    <section className="sec">
      {inner ? (
      <div className="sec-inner">
        <header className="sec-head">
          <h2 className="sec-tit">{secTitle}</h2>
        </header>

        <div className="sec-con">{children}</div>
      </div>
      ) : (
        <>
          <header className="sec-head">
            <h2 className="sec-tit">{secTitle}</h2>
          </header>

          <div className="sec-con">{children}</div>
        </>
      )}
    </section>
  )
}
export default Section