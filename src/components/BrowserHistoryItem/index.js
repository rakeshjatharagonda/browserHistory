import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const OnDeleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="item-container">
      <h1 className="time-text">{timeAccessed}</h1>
      <div className="website-container">
        <img className="image" src={logoUrl} alt={title} />
        <h1 className="logo-title">{title}</h1>
        <p className="url-text">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-logo"
        onClick={OnDeleteHistory}
      />
    </li>
  )
}

export default BrowserHistoryItem
