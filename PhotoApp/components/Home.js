import React, {Fragment} from 'react';
import {ScrollView, Image, Text, View, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import Config from "react-native-config";

const style = StyleSheet.create({
  imageList: {flex: 5},
  imageListOrder: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {marginLeft: 20, marginTop: 20, width: 104, height: 104},
  imageListOptions: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: '#24A0ED',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {fontWeight: 'bold', fontSize: 25, color: 'white'},
});

const baseImageUrl = `${Config.API_BASE_URL}/images`;

const renderImages = images => {
  return images.map(image => (
    <View key={image.id} style={style.image}>
      <Image
        source={{
          uri: `${baseImageUrl}/${image.id}.jpg`,
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  ));
};

const Home = ({images}) => {
  return (
    <Fragment>
      <View style={style.imageList}>
        <ScrollView>
          <View style={style.imageListOrder}>{renderImages(images)}</View>
        </ScrollView>
      </View>
      <View style={style.imageListOptions}>
        <Link to={`/camera`} style={style.button}>
          <Text style={style.buttonText}>Take New Picture</Text>
        </Link>
      </View>
    </Fragment>
  );
};

export default Home;
