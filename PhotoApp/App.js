import React, {Component} from 'react';
import {View} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Camera from './components/Camera';
import Home from './components/Home';
import Config from "react-native-config";


export default class App extends Component {
  state = {
    images: [],
  };


  async componentDidMount() {
    try {
      const res = await fetch(`${Config.API_BASE_URL}/api/images`);
      const images = await res.json();
      this.setState({images});
    } catch (err) {
      console.log('failed to fetch images', err);
    }
  }

  onImageSave = async image => {
    try {
      const res = await fetch(`${Config.API_BASE_URL}/api/images`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(image.base64),
      });
      const newImage = await res.json();
      this.setState({images: [...this.state.images, newImage]});
    } catch (err) {
      console.log('failed to save image', err);
    }
  };

  render() {
    return (
      <NativeRouter>
        <View style={{flex: 1}}>
          <Route
            exact
            path="/"
            render={props => <Home {...props} images={this.state.images} />}
          />
          <Route
            exact
            path="/camera"
            render={props => (
              <Camera {...props} onImageSave={this.onImageSave} />
            )}
          />
        </View>
      </NativeRouter>
    );
  }
}
