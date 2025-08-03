import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const bookings = [
  { id: '1', eventName: 'Concert', date: '2024-09-15', tickets: 2 },
  { id: '2', eventName: 'Art Exhibition', date: '2024-10-05', tickets: 1 },
  
];

const MyBookings = () => {
  const handleCancel = (id) => {
    
    console.log(`Cancel booking with id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text>{item.eventName}</Text>
            <Text>{item.date}</Text>
            <Text>Tickets: {item.tickets}</Text>
            <Button
              title="Cancel Booking"
              onPress={() => handleCancel(item.id)}
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
  bookingItem: {
    marginBottom: 16,
  },
});

export default MyBookings;
