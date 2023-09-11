

import { StyleSheet, Text, View ,Button, FlatList, ScrollView} from 'react-native'
import React from 'react'
import { CourseCard, TopPlacesCarousel } from '../section/homeScreen';
import { colors } from '../constants/theme';
import MainHeader from '../component/layout/MainHeader';

const HomeScreen = ({navigation}) => {

   

  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1' },
    { id: '2', title: 'Card 2', description: 'Description for Card 2' },
    // Add more data items as needed
  ];
  const renderItem = ({ item }) => (
    <CourseCard title={item.title} description={item.description} />
  );
  return (
    <View style={styles.container}>
      <MainHeader title={'Home'}/>
<ScrollView >
  <TopPlacesCarousel/>
</ScrollView>

      <Text>HomeScreen</Text>
     
       <Button
       title="Go to About"
         onPress={() => navigation.navigate('About')}
       />
<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.light
  }
})