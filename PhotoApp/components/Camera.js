import React, {Component, Fragment} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const style = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cameraButton: {
    backgroundColor: 'black',
    marginBottom: 35,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 100,
    opacity: 0.4,
  },
  buttonText: {fontWeight: 'bold', fontSize: 25, color: 'white'},
});

export default class Camera extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true, fixOrientation: true};
      let data = await this.camera.takePictureAsync(options);
      this.props.onImageSave(data);
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <Fragment>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          style={style.camera}>
          <TouchableOpacity
            style={style.cameraButton}
            onPress={() => this.takePicture()}>
            <Text style={style.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </RNCamera>
      </Fragment>
    );
  }
}
