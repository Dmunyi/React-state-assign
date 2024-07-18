import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software Engineer',
        imgSrc: 'https://pict.ai/images/secure/xG5Vbm/YSt1k4v3qNuzutQ_1704255526.png',
        profession: 'Software Engineer'
      },
      shows: false,
      currentTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows ? (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        ) : (
          <p>Profile is hidden</p>
        )}
        <p>Time since mounted: {this.state.currentTime} seconds</p>
      </div>
    );
  }
}

export default App;