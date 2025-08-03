import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = async () => {
    
    if (!eventName || !eventDate || !eventLocation) {
      console.log('All fields are required.');
      return;
    }

    const eventData = {
      name: eventName,
      date: eventDate,
      location: eventLocation
    };

    try {
      const response = await fetch('https://sahoora-6c5f3-default-rtdb.firebaseio.com/Events.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear fields after successful submission
      setEventName('');
      setEventDate('');
      setEventLocation('');
      console.log('Event created successfully!');
    } catch (error) {
      console.error('Failed to create event:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Event</Text>
      <TextInput
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <TextInput
        placeholder="Event Date"
        value={eventDate}
        onChangeText={setEventDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Event Location"
        value={eventLocation}
        onChangeText={setEventLocation}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    backgroundColor: 'white',
  },
});

export default CreateEvent;
