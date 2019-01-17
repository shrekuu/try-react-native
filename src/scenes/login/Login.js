import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button } from '@ant-design/react-native'
import * as WeChat from 'react-native-wechat'

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Login',
  }

  componentDidMount (): void {
    console.log('componentDidMount 2')
  }

  weChatLogin() {
    WeChat.sendAuthRequest("snsapi_userinfo");//在需要触发登录的时候调用
  }

  render () {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.box}>
            <Text>微信登录</Text>
          </View>
          <Button onPress={() => this.weChatLogin()} title='微信登录'>微信登录</Button>
        </View>
    )
  }
}

const styles = EStyleSheet.create({
  box: {
    width: '750rem',
    borderWidth: 1,
    borderColor: 'red'
  },
  box2: {
    width: 375,
    borderWidth: 1,
    borderColor: 'red'
  },
  primary: {
    fontSize: '16rem',
  },
  secondly: {
    fontSize: '32rem',
  },
  thirdly: {
    fontSize: '48rem',
  }
})
