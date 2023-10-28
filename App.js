import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'John', id: '1' },
    { name: 'Bob', id: '2' },
    { name: 'Greg', id: '3' },
    { name: 'Derek', id: '4' },
    { name: 'Sam', id: '5' },
    { name: 'Joe', id: '6' },
  ])

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {
          people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
