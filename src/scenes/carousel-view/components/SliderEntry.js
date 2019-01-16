import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { ParallaxImage } from 'react-native-snap-carousel'
import styles from '../styles/SliderEntry.style'

export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  }

  get image () {
    const { data: { illustration } } = this.props

    console.log('illustration', illustration)
    return <Image
      source={{ uri: illustration }}
      style={styles.image}
    />
  }

  render () {
    const { data: { title, subtitle }, even } = this.props

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {title.toUpperCase()}
      </Text>
    ) : false

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${title}'`) }}
      >
        <View style={styles.shadow}/>
        <View style={styles.imageContainer}>
          {this.image}
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}/>
        </View>
      </TouchableOpacity>
    )
  }
}
