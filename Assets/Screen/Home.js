import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deletePokemonAction, editPokemonAction} from '../Redux/Index';

const Home = ({navigation}) => {
  const dis = useDispatch();
  const catList = useSelector(state => state.list);
  console.log(catList?.length);
  const renderItem = ({ item, index }) => (
    
    <View style={styles.item}>
      <Text style={styles.title}>{index + 1}</Text>
      <Text style={styles.title}>{item?.data?.name ??  item?.name}</Text>
      <Text style={styles.title}>{item?.data?.breed ??  item?.breed}</Text>
      <Text style={styles.title}>{item?.data?.color ??  item?.color}</Text>
      <Text style={styles.title}>{item?.data?.description ??  item?.description}</Text>
      <TouchableOpacity
        
        onPress={() => {
          var id = item?.data?.id ??  item?.id
          dis(deletePokemonAction(index));
        }}>
        <Image source={require('../../asset/img/icons8-delete-30.png')} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Edit', {item:item, index:index})}>
        <Image source={require('../../asset/img/icons8-edit-30.png')} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tbl}>
        <Text style={styles.tblItem}>ID</Text>
        <Text style={styles.tblItem}>NAME</Text>
        <Text style={styles.tblItem}>BREED</Text>
        <Text style={styles.tblItem}>COLOR</Text>
        <Text style={styles.tblItem}>DESCRIPTION</Text>
        <Text style={styles.tblItem}>ACTION</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList data={catList} renderItem={renderItem}></FlatList>
      </SafeAreaView>
      <Button
        title="Add Cat"
        onPress={() => navigation.navigate('FirstScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    margin: 1,
  },
  title: {
    padding: 5,
    flex: 1,
    flexWrap: 'wrap',
  },
  tbl: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
  },
  tblItem: {
    padding: 9,
    borderLeftColor: 'red',
    borderLeftWidth: 2,
  },
});

export default Home;
