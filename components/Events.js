import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
  { id: '1', name: 'Concert', date: '2024-09-15', location: 'Venue A' },
  { id: '2', name: 'Art Exhibition', date: '2024-10-05', location: 'Gallery B' },
  { id: '2', name: 'Movie', date: '2024-10-05', location: 'Opera Gujranwala' },
  
];

const EventList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Text>{item.location}</Text>
            <Button
              title="Buy Ticket"
              onPress={() => navigation.navigate('BookingForm', { event: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  eventItem: {
    marginBottom: 16,
  },
});

export default EventList;
