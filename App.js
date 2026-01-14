import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    letterSpacing: 1,
  },

  scroll: {
  marginBottom: 16,
  height: 160,  
  },

  card: {
    width: 140,
    height: 140,
    backgroundColor: '#D2AE73',
    marginRight: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  input: {
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
});

const languages = [
  require('./assets/c.png'),
  require('./assets/cpp.png'),
  require('./assets/java.png'),
  require('./assets/python.png'),
  require('./assets/js.png'), 
];

export default function HomeScreen() {
  return (
    <View style={styles.container}> 
      <View>
        <Text style={styles.title}>Programming Languages</Text>
   
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          {languages.map((img, index) => (
            <View key={index} style={styles.card}>
              <Image source={img} style={styles.image} />
            </View>
          ))}
        </ScrollView>
   
        <TextInput
          placeholder="What is your favorite programming language from the list above?"
          placeholderTextColor="#666"
          style={styles.input}
        />
      </View>
    </View>
  );
}
