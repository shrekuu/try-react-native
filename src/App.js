import React from 'react'
import { Dimensions } from 'react-native'
import AppNavigator from './AppNavigator'
import { createAppContainer } from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet'

const { width } = Dimensions.get('window')
// 使用了 EStyleSheet, rem 不能写入行内
// 以 750 宽为缩放基线
// UI 稿中 10 像素, 在样式中使用 `10rem`
// 所以视图元素在其它尺寸屏幕上是整体缩放的
const rem = width / 750

EStyleSheet.build({
  $rem: rem
})

export default createAppContainer(AppNavigator)