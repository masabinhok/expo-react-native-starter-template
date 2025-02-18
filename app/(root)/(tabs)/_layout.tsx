import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

const TabIcon = ({ focused, icon }: { focused: boolean, icon: any }) => (
  <View className='flex-1 flex items-center flex-col  mt-4'>
    <Image source={icon} tintColor={focused ? "#8A24FF" : "#666876"} resizeMode='contain' className='size-6' />
  </View>
)

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderRadius: 40,
          marginHorizontal: 20,
          marginBottom: 20,
          borderTopWidth: 1,
          minHeight: 64,
        }
      }}
    >


      <Tabs.Screen name='sleep' options={{
        title: "Sleep",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.sleep} />
        )
      }} />

      <Tabs.Screen name='index' options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.home} />
        )
      }} />

      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} />
        )
      }} />

    </Tabs>
  )
}

export default TabsLayout