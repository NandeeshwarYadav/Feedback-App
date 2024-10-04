import {Component} from 'react'
import Feedback from './components/Feedback'
import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {isTrue: false}

  clickEmoji = name => {
    if (resources.emojis.map(each => each.name === name)) {
      this.setState({isTrue: true})
      console.log('yes')
    }
  }

  beforeClickBtn = () => (
    <div>
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
      </div>
      <div className="emojis-container">
        {resources.emojis.map(eachItem => (
          <Feedback
            listedItem={eachItem}
            clickEmoji={this.clickEmoji}
            key={eachItem.id}
          />
        ))}
      </div>
    </div>
  )

  afterClicktBtn = () => (
    <div>
      <img src={resources.loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
      <p>
        We will use your feedback to improve our customer support perfomance.
      </p>
    </div>
  )

  render() {
    const {isTrue} = this.state
    console.log(isTrue)

    return (
      <ul className="bg">
        <div className="card">
          {isTrue ? this.afterClicktBtn() : this.beforeClickBtn()}
        </div>
      </ul>
    )
  }
}

export default App
