import React, { useEffect, useState } from 'react'
import { Text, View, Animated, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import fonts from '../constant/fonts'
const { height } = Dimensions.get('window')

interface AV {
  id: number,
  subject: string,
  description: string,
  value: number,
  date: string
}

const Modal = ({ show, close, data, setShow }) => {
  const item: AV = data

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 50, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 0, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 0, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: height, duration: 300, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 0, useNativeDriver: true }),
      Animated.timing(state.modal, { toValue: height, duration: 500, useNativeDriver: true }),
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])


  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />
        <View style={styles.infoContent}>
          <Text style={styles.subject}>
            {item.subject}
          </Text>
          <Text style={styles.description}>
            <Text style={styles.textdivision}>Sobre{'\n'}</Text>
            {item.description}
          </Text>
          <Text style={styles.description}>
            <Text style={styles.textdivision}>A prova será realizada dia{'\n'}</Text>
            {item.date}.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.textdivision}>Valor da prova {'\n'}</Text>
            {item.value} pontos.
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => {
            setShow(false)
            closeModal()
          }}
          activeOpacity={0.7}
        >
            <Text style={styles.textButton}>Fechar</Text>
          </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'flex-end',
    marginHorizontal: 14,
    paddingHorizontal: 14,
    bottom: 0,
  },
  modal: {
    position: 'absolute',
    height: '50%',
    maxHeight: '100%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingLeft: 25,
    paddingRight: 25,
    bottom: 0,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textdivision: {
    fontFamily: fonts.heading,
    fontSize: 17,
  },
  subject: {
    fontFamily: fonts.title,
    fontSize: 24,
    color: 'black',
  },
  description:{
    fontFamily: fonts.subtitle,
    fontSize: 16,
  },
  buttonContainer: {
    height: 50,
    backgroundColor: 'black',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 15,
  },
  textButton: {
    color: 'white',
    fontFamily: fonts.title,
    fontSize: 14,
  },
  infoContent: {
  }
})

export default Modal