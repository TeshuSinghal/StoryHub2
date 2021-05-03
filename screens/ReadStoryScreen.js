import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
  render(){
    return(
      <View>
      <Header
            backgroundColor={'#f3b6c4'}
            centerComponent={{text:'Story Hub', style:{color:'black', fontSize:30, fontWeight:'bold'}}}
          />
          <View style = {styles.container}>
        <Text>Read Story</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
})