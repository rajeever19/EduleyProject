import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors,shadow,sizes,spacing } from '../../constants/theme'
const CARD_WIDTH=sizes.width-80
const CARD_HEIGHT=200
const CARD_WIDTH_SPACING=CARD_WIDTH+spacing.l

const TopPlacesCarousel = ({list}) => {
  return (
   <FlatList
   data={list}
   horizontal
   snapToInterval={CARD_WIDTH_SPACING}
   
   />
  )
}

export default TopPlacesCarousel

const styles = StyleSheet.create({})