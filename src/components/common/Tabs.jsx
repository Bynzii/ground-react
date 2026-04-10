
import '../../assets/css/base.css'

const Tabs = ({tabs, activeTab, onTabChange}) => {
  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li key={tab.id}>
        <button 
          type="button" 
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      </li>
      ))}
    </ul>
  )
}
export default Tabs