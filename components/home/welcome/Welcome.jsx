import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity,
Image, FlatList } from 'react-native' 
import { useRouter } from 'expo-router';
import { icons , SIZES} from '../../../constants';

import styles from './welcome.style' ;
import { Calendar } from 'react-native-calendars';
const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const[activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>Hello Raouia</Text>
      <Text style={styles.welcomeMessage}>Find your task !</Text>

      </View> 
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value={searchTerm}
          onChange={(text) => setSearchTerm(text)}
          placeholder="what are you looking for ?" />

        </View>
        <TouchableOpacity  style={styles.searchBtn} onPress={() => {}}>
      <Image source={icons.search}
        resizeMode="contain"
       style={styles.searchBtnImage}/>
      </TouchableOpacity>
      </View>

      <Calendar     />
     </View>

  )
}

export default Welcome