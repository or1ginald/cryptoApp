import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  VirtualizedList,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import EventEntity from '../components/EventEntity';

const EventsScreen = () => {
  const developments = useSelector(store => store.developments.events);

  return (
    // <ScrollView>
    <FlatList data={developments} renderItem={EventEntity} />
    // </ScrollView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({});
