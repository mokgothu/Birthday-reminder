import React, { useState } from 'react';

import { SafeAreaView, StyleSheet,Text,View, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

const App = () => {
  const [task,setTask] = useState('');

  const [events, setEvents] = useState([
    {
      start: '2022-09-21 08:00:00',
      end: '2022-09-19 10:00:00',
      title: 'AWIEF Workshop',
      summary: 'online zoom meeting',
    },

     {
      start: '2022-09-24 11:00:00',
      end: '2022-09-19 13:00:00',
      title: 'Heritage Festival',
      summary: 'Meter sperepere',
    },

    {
      start: '2022-09-26 10:00:00',
      end: '2020-09-22 12:00:00',
      title: 'Important UI/UX meeting',
      summary: 'Call to every one',
    },
    {
      start: '2022-09-28 13:30:00',
      end: '2020-01-02 15:30:00',
      title: 'Client Meeting',
      summary: 'Discuss client contract',
    },
    {
      start: '2022-09-29 08:30:00',
      end: '2020-10-01 17:00:00',
      title: 'Meeting with client',
      summary: 'Financial wellness',
    },
    {
      start: '2022-10-03 10:10:00',
      end: '2020-02-04 00:00:00',
      title: 'Farming Training',
      summary: 'SMME',
    },
  ]);

 const[start, setStart] = useState('');

 const[end, setEnd] = useState('');

 const[title, setTitle] = useState('');

 const[summary, setSummary] = useState('');

 const addTask = (() => {
    setTodos((events) => [...events, { task:task, start:start, end:end, title:title, summary:summary}]);
    console.log(task);
 });

  const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

     <Text>{task}</Text>

      <TextInput 
      placeholder="Enter item" style={styles.input} 
      onChangeText={(task => setTask(task))}/>

      <TouchableOpacity style={styles.btn}
        onPress= {addTask}
        >

        <Text> Add</Text>

      </TouchableOpacity>

        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}

          scrollToFirst
        />

       <Text>Birthday Reminder</Text>
       <TextInput 
       placeholder="start date"
       style={styles.input} 
       onChangeText={(task => setStart(task))}
       />
       <TextInput 
       placeholder="Title"
       style={styles.input} 
       onChangeText={(task => setTitle(task))}
       />
       <TextInput 
       placeholder="Summary"
       style={styles.input} 
       onChangeText={(task => setTask(task))}
       />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    width: 350,
    height: 40,
    backgroundColor: 'pink',
    padding: 12,
    borderRadius: 15,
    textDecorationLine:5,
  },
});
