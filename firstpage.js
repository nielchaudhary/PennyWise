import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const navigation = useNavigation();
  const [logoAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    animateLogo();
  }, []);

  const animateLogo = () => {
    Animated.timing(logoAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleScreenTap = () => {
    navigation.navigate('SecondPage');
  };

  return (
    <TouchableOpacity onPress={handleScreenTap} style={styles.container}>
      <View style={styles.headingContainer}>
        <Animated.Image
          source={require('./assets/walletlogo.png')}
          style={[styles.logo, { opacity: logoAnimation }]}
        />
        <Text style={styles.heading}>PENNYWISE</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fffaf0',
  },
});

export default FirstPage;
