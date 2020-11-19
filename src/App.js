import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceCognition from './components/FaceCognition/FaceCognition';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

// Define Clarifai app
const app = new Clarifai.App({
 apiKey: '7035947204294e7bad1ae526cc4f2979'
});

// Parameters for Particle.js (on the App's background)
const particlesParams = {
  particles: {
    color: {
      value: "#00000",
    },
    links: {
      color: "#000000",
      distance: 110,
      enable: true,
      opacity: 0.4,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      userName: ''
    }
  }

  // Catch the rect, start from here
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  // Display the box, getting the coordinates from 'calculateFaceLocation'
  // { box } is like { box: box }
  displayFaceBox = (box) => {
    this.setState({ box });
    console.log(box)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    // UPDATED version
    //   app.models.initModel({
    //     id: Clarifai.GENERAL_MODEL,
    //     version: "aa7f35c01e0642fda5cf400f543e7c40"})
    //     .then(generalModel => {
    //       return generalModel.predict(this.state.input);
    //     })
    //     .then(response => {
    //       this.setState({conceptName: response.outputs[0].data.concepts[0].name, conceptNameTwo: response.outputs[0].data.concepts[1].name})
    //       console.log(response.outputs[0].data)
    //     })
    //   );

    this.setState({imageUrl: this.state.input});  // Set the temporary input to imageUrl
    app.models.predict(
      '53e1df302c079b3db8a0a36033ed2d15',
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  // Change the route
  onRouteChange = (path) => {
    this.setState({ route: path});
  }

  getUserName = (event) => {
    this.setState({userName: event.target.value});
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <div className="background"></div>
        < Particles className="particles" params={ particlesParams } />
        { this.state.route === 'signin'
        ? <SignIn onRouteChange={this.onRouteChange} userName={this.getUserName}/>
        : <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            <Logo />
            <Rank userName={this.state.userName}/>
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <FaceCognition inputImg={this.state.imageUrl} box={this.state.box} />
        </div>
        }
      </div>
    );
  }
}


export default App;