import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ThirdPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const totalIncome = route.params?.totalIncome || 0; // Get the totalIncome from route params, defaulting to 0 if not provided

  const luxuryExpense = Math.round((0.2 * totalIncome) * 100) / 100; // Calculate 20% of totalIncome for luxury
  const travelExpense = Math.round((0.1 * totalIncome) * 100) / 100; // Calculate 10% of totalIncome for travel
  const foodExpense = Math.round((0.2 * totalIncome) * 100) / 100; // Calculate 20% of totalIncome for food
  const miscellaneousExpense = Math.round((0.2 * totalIncome) * 100) / 100; // Calculate 20% of totalIncome for miscellaneous

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handlePress = () => {
    navigation.navigate('ExpenseDetailsScreen'); // Replace 'ExpenseDetailsScreen' with the actual screen name of the fourth page
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Animated.View style={[styles.topContainer, { opacity: fadeAnim }]}>
          <Text style={styles.headingText}>TOTAL INCOME</Text>
          <Text style={styles.totalAmountTextWhite}>₹{totalIncome}</Text>
        </Animated.View>

        <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
          <Text style={styles.idealExpensesText}>IDEAL EXPENDITURE</Text>
        </Animated.View>

        <Animated.View style={[styles.middleContainer, { opacity: fadeAnim }]}>
          <View style={[styles.subSection, styles.luxuryContainer]}>
            <Text style={styles.subSectionTextLeft}>Luxury</Text>
            <Text style={styles.subSectionTextRightWhite}>₹{luxuryExpense}</Text>
          </View>
          <View style={[styles.subSection, styles.travelContainer]}>
            <Text style={styles.subSectionTextLeft}>Travel</Text>
            <Text style={styles.subSectionTextRightWhite}>₹{travelExpense}</Text>
          </View>
          <View style={[styles.subSection, styles.foodContainer]}>
            <Text style={styles.subSectionTextLeft}>Food</Text>
            <Text style={styles.subSectionTextRightWhite}>₹{foodExpense}</Text>
          </View>
          <View style={[styles.subSection, styles.miscContainer]}>
            <Text style={styles.subSectionTextLeft}>Miscellaneous</Text>
            <Text style={styles.subSectionTextRightWhite}>₹{miscellaneousExpense}</Text>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
  },
  headingText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalAmountTextWhite: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  middleContainer: {
    marginTop: 20,
  },
  subSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fffaf0',
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#000000',
    paddingHorizontal: 10,
  },
  luxuryContainer: {
    backgroundColor: '#000000',
  },
  travelContainer: {
    backgroundColor: '#000000',
  },
  foodContainer: {
    backgroundColor: '#000000',
  },
  miscContainer: {
    backgroundColor: '#000000',
  },
  subSectionTextLeft: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subSectionTextRightWhite: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idealExpensesText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ThirdPage;
