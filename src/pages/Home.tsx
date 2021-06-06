import React from 'react'
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  Pressable,
  Alert
} from 'react-native';
import fonts from '../constant/fonts';
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import data from '../constant/data';
const Home = () => {
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.logo}>biLeak</Text>
      <TouchableWithoutFeedback 
        onPress={() => Alert.alert('Foi mal', 'ainda vou terminar essa parte')} 
      >
        <View style={styles.buttonAdd}>
          <Ionicons name="add-sharp" size={30} color="black"/>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Pressable style={styles.boxContainer}
          onPress={() => Alert.alert("Sobre a prova", item.description)}
        >
          <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.textSubject}>{item.subject}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
          </View>
          <Text style={styles.textValue}>{item.value}</Text>
        </Pressable>
      )}
      keyExtractor={item => item.id.toString()}
    />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    backgroundColor: 'black',
    width: '100%',
  },
  logo: {
    color: '#fff',
    fontSize: 36,
    fontFamily: fonts.title,
    padding: 10,
  },
  buttonAdd: {
    padding: 10,
    backgroundColor: 'white',
    height: 50,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 16
  },
  boxContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginVertical: 5,
    marginRight: 20,
    borderRadius: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textSubject: {
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.title,
    width: 150,
  },
  textValue: {
    color: 'black',
    fontSize: 30,
    fontFamily: fonts.title,
    marginTop: 5,
  },
  textDate: {
    color: 'black',
    fontSize: 14,
    fontFamily: fonts.heading
  }

});

export default Home