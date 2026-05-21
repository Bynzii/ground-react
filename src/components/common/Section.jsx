
import '../../assets/css/base.css'

const Section = ({inner=true, secTitle, children, className}) => {
  return (
    <section className={`sec ${className || ''}`}>
      {inner ? (
      <div className="sec-inner">
        {secTitle && (
          <header className="sec-head">
            <h2 className="sec-tit">{secTitle}</h2>
          </header>
        )}

        <div className="sec-con">{children}</div>
      </div>
      ) : (
        <>
          {secTitle && (
            <header className="sec-head">
              <h2 className="sec-tit">{secTitle}</h2>
            </header>
          )}

          <div className="sec-con">{children}</div>
        </>
      )}
    </section>
  )
}
export default Section