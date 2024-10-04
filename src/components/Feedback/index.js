// Write your React code here.
import './index.css'

const Feedback = props => {
  const {listedItem, clickEmoji} = props
  const {id, imageUrl, name} = listedItem
  const triggerTheButton = () => {
    clickEmoji('Happy')
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={triggerTheButton}>
        <img src={imageUrl} alt={name} className="feedback-image" />
      </button>
      <p>{name}</p>
    </li>
  )
}

export default Feedback
