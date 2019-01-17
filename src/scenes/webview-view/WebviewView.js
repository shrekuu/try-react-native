import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

export default class WebviewView extends Component {
  render () {
    return (
      <WebView
        source={{ uri: 'https://m.hao123.com' }}
        style={{ marginTop: 20 }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    )
  }
}
