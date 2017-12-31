import axios from 'axios';
import React, { Component } from 'react';

class Weather extends Component {
  componentWillMount() {

    var instance = axios.create({
      baseURL: 'http://api.openweathermap.org/data/2.5/weather'
    });

    instance.get(`weatherAPIURL?zip=11237,us&APPID={${process.env.REACT_APP_WEATHER_KEY}}`)
      .then(res => {
        console.log(res);
        this.setState({weather: res.data});
      })
      .catch(err => {
        this.setState({error: err});
      });
  }

  render() {
    if(!this.state.weather) {
      return null;
    }

    return (
      <div>
        {this.state.weather}
      </div>
    );
  }

  state = {
    error: null,
    weather: null
  }
}


export default Weather;
