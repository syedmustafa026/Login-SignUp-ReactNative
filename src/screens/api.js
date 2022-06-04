import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const url = 'https://jsonplaceholder.typicode.com/todos'

const Item = ({ id,title }) => {
  return (
    <ScrollView>
      <View style={styles.item}>
        <Text style={styles.title}>{id}{ title}</Text>
      </View>
    </ScrollView>
  )
};
const  Api = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id + " \n"}title={item.title} />
  );
  const [todo, setTodo] = useState([])
  useEffect(() => {
    fetch(url)
      .then((response) => (response.json()))
      .then((datas) => setTodo(datas)
      );
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>THIS IS API CALLING</Text>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={({ id }, index) => id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'grey',
    color: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {

    fontSize: 32,
    color: "#ffff"
  },
  text: {
    fontSize: 32,
    color: "black",
    textAlign: 'center'
  }
});

export default Api;