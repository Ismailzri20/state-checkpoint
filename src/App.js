import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Ismail Zouari",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula neque ac ante ultrices, vel volutpat eros faucibus. Nam viverra massa vel magna vehicula, sed auctor sapien rhoncus. Suspendisse mollis, turpis in bibendum vestibulum, mauris dolor tempor erat, a posuere nulla odio et sem.",
      imgSrc:"Profil.png",
      profession: "Web Developer"
    },
    shows: true,
    intervalId: null,
    mountedAt: new Date()
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedAt: new Date() })
    }, 1000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  toggleShows = () => {
    this.setState({ shows: !this.state.shows })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShows}>Toggle Profile</button>
        {this.state.shows &&
          <div>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        }
        <p>Component mounted at: {this.state.mountedAt.toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
