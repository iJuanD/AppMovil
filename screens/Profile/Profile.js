
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase/app'


import UserLogged from './UserLogged'
import UserGuest from './UserGuest'

  export default function Profile() {
  const [login, setLogin] = useState(null)

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) =>{
        user !== null ? (setLogin(true)) : setLogin(false)
    }, [])
  }, [])

    if (login == null){
      return  <Text>Cargando...</Text>
    }

  return login ? <UserLogged/> : <UserGuest/>
} 

const styles = StyleSheet.create({})