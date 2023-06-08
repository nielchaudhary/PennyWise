import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TotalExpenditure from './TotalExpenditure';

const ExpenseDetailsScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [randomMessages, setRandomMessages] = useState([]);
  const [luxuryExpenditure, setLuxuryExpenditure] = useState('');
  const [foodExpenditure, setFoodExpenditure] = useState('');
  const [travelExpenditure, setTravelExpenditure] = useState('');
  const [billsExpenditure, setBillsExpenditure] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleFetchExpenses = () => {
    if (randomMessages.length > 0) {
      setRandomMessages([]);
    } else {
      const expenseMessages = [
        '(Luxury)Payment of Rs. 2500 to Zara',
        '(Luxury): H&M bill payment of Rs. 3500.',
        '(Luxury) :Gucci  payment of Rs. 4500 completed.',
        '(Luxury)Rs. 500 Louis Vuitton(Luxury) bill paid successfully.',
        '(Luxury) Coach bill payment of Rs. 4800 processed.',
        '(Travel) Ola ride payment of Rs. 150 completed.',
        '(Travel) Uber trip payment of Rs. 180 successful.',
        '(Travel) RailYatra booking payment of Rs. 200 done.',
        '(Travel) Rs. 120 ixigo payment successful.',
        '(Travel) Indigo flight payment of Rs. 190 processed.',
        '(Food) Swiggy food order payment of Rs. 280 successful.',
        '(Food) Payment of Rs. 250 to Zomato for food delivery.',
        '(Food) BigBasket payment of Rs. 180 for groceries completed.',
        '(Food) OrderMyFood bill payment of Rs. 220 successful.',
        '(Food) Rs. 290 Foodwala payment processed.',
        '(Misc)Mahavitaran electricity bill payment of Rs. 520 done.',
        '(Misc)Payment of Rs. 450 to ICICI for credit card bill.',
        '(Misc)Water bill payment of Rs. 300 successfully completed.',
        '(Misc)Parking fee payment of Rs. 180 done.',
        '(Misc)Maintenance bill payment of Rs. 550 processed successfully.',
      ];

      const shuffledMessages = expenseMessages.sort(() => 0.5 - Math.random());
      const selectedMessages = shuffledMessages.slice(0, 4);
      setRandomMessages(selectedMessages);
    }
  };

  const handleNext = () => {
    const extractNumericValue = (value) => {
      const regex = /(\d+)/g;
      const matches = value.match(regex);
      if (matches) {
        return matches.reduce((sum, match) => sum + parseInt(match), 0);
      }
      return 0;
    };

    const totalExpenditure =
      extractNumericValue(luxuryExpenditure) +
      extractNumericValue(foodExpenditure) +
      extractNumericValue(travelExpenditure) +
      extractNumericValue(billsExpenditure);

    navigation.navigate('TotalExpenditure', {
      luxuryExpenditure: extractNumericValue(luxuryExpenditure),
      foodExpenditure: extractNumericValue(foodExpenditure),
      travelExpenditure: extractNumericValue(travelExpenditure),
      billsExpenditure: extractNumericValue(billsExpenditure),
      totalExpenditure,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.headingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.headingText}>EXPENSE DETAILS</Text>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <Text style={styles.inputLabel}>Luxury</Text>
        <TextInput
          style={styles.inputField}
          multiline
          numberOfLines={2}
          underlineColorAndroid="#dcdcdc"
          placeholder="Amount: Detail(use a new line for new expense)"
          value={luxuryExpenditure}
          onChangeText={setLuxuryExpenditure}
          keyboardType="default" // Updated to "default"
        />
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <Text style={styles.inputLabel}>Food</Text>
        <TextInput
          style={styles.inputField}
          multiline
          numberOfLines={2}
          underlineColorAndroid="#dcdcdc"
          placeholder="Amount: Detail(use a new line for new expense)"
          value={foodExpenditure}
          onChangeText={setFoodExpenditure}
          keyboardType="default" // Updated to "default"
        />
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <Text style={styles.inputLabel}>Travel</Text>
        <TextInput
          style={styles.inputField}
          multiline
          numberOfLines={2}
          underlineColorAndroid="#dcdcdc"
          placeholder="Amount: Detail(use a new line for new expense)"
          value={travelExpenditure}
          onChangeText={setTravelExpenditure}
          keyboardType="default" // Updated to "default"
        />
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <Text style={styles.inputLabel}>Bills</Text>
        <TextInput
          style={styles.inputField}
          multiline
          numberOfLines={2}
          underlineColorAndroid="#dcdcdc"
          placeholder="Amount: Detail(use a new line for new expense)"
          value={billsExpenditure}
          onChangeText={setBillsExpenditure}
          keyboardType="default" // Updated to "default"
        />
      </Animated.View>

      <TouchableOpacity onPress={handleFetchExpenses}>
        <View style={styles.centerButtonContainer}>
          <Text style={styles.fetchButton}>Fetch Online Expenses</Text>
        </View>
      </TouchableOpacity>

      {randomMessages.length > 0 && (
        <View style={styles.randomMessagesContainer}>
          {randomMessages.map((message, index) => (
            <Text key={index} style={styles.randomMessageText}>
              {'\u2022'} {message}
            </Text>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={handleNext}>
        <Animated.Text style={[styles.navigationText, { opacity: fadeAnim }]}>Next</Animated.Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headingText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: '#FFF3B6',
    borderRadius: 10,
    height: 44,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  centerButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fetchButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  navigationText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  randomMessagesContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  randomMessageText: {
    color: '#00FF36',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ExpenseDetailsScreen;
