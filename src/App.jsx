import React, {Component} from 'react';

const Kanye = (props) => {
  const clicks = props.clicks
  let src = ""

  if (clicks <= 0) {
    src = "build/kanyes/100.png"
  } else if (clicks <= 5) {
    src = "build/kanyes/50.png"
  } else if (clicks <= 10) {
    src = "build/kanyes/25.png"
  } else {
    src = "build/kanyes/0.png"
  }

  return (
    <img className="kanye" src={src}/>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0
    }

    this.increaseKanye = this.increaseKanye.bind(this)
  }


  increaseKanye() {
    console.log('INCREASE')
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Increase Kanye!</h1>
        <h2>{this.state.clicks} clicks</h2>
        <button onClick={this.increaseKanye}>
          Increase
        </button>
        <Kanye clicks={this.state.clicks}/>
      </div>
    );
  }
}
export default App;
