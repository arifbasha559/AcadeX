import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function onboarding() {
  return (
    <View>
      <Text>onboarding</Text>
      <Link href="/">Go to Home</Link>
      <Link href="/index">Go to Index</Link>
    </View>
  )
}