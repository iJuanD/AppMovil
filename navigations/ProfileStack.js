import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../screens/Profile/Profile'

export default function ProfileStack() {
  return (
   <Stack.Navigator>
        <Stack.Screen
            name='Perfil'
            component={Profile}
            options={{ title: ""}}
        />
    </Stack.Navigator>
  )
}