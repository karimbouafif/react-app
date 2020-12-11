import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  Main from './components/MainComponent';

export default  class App extends Component
{
  render() {

    return(
<Main/>



    );
  }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor:'#aeaeff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

