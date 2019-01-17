import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent = `
    <h1 style="color: red; border: 1px solid deeppink; ">This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class HtmlView extends Component {
  render () {
    return (
      <ScrollView style={{ flex: 1 }}>
        <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
    );
  }
}
