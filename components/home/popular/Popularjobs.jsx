import {useState} from 'react'
import { View, Text , TouchableOpacity, ActivityIndicator} from 'react-native'

import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from'../../common/cards/popular/PopularJobCard'
import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  }
  )

  console.log(data);

  const handleCardPress = (item) =>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Tasks</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ) : error ? (
          <Text> Somthing went wrong</Text>
      ) : (
        <FlatList
        data={data}
        renderItem={({item}) => (
          <PopularJobCard item={item} />
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{ columnGap:SIZES.medium}}
        horizontal
        />
      )}

      </View>
      
    </View>
  )
}

export default Popularjobs