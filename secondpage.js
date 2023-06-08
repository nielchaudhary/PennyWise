import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SecondPage = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [salary, setSalary] = useState('');
 const [selectedInput, setSelectedInput] = useState('');
 const [showAlert, setShowAlert] = useState(false);
 const navigation = useNavigation();
 const inputScale = useRef(new Animated.Value(1)).current;
 const fadeInAnim = useRef(new Animated.Value(0)).current;


 const handleInputFocus = (inputName) => {
   setSelectedInput(inputName);
   Animated.spring(inputScale, {
     toValue: 1.05,
     useNativeDriver: true,
   }).start();
 };


 const handleInputBlur = () => {
   setSelectedInput('');
   Animated.spring(inputScale, {
     toValue: 1,
     useNativeDriver: true,
   }).start();
 };


 const handleGoButtonPress = () => {
   if (name.trim() === '' || email.trim() === '' || salary.trim() === '') {
     // One or more fields are empty, show the alert
     setShowAlert(true);
   } else if (!isValidEmail(email)) {
     // Invalid email format, show the alert
     setShowAlert(true);
     Alert.alert('Invalid Email', 'Please enter a valid email address.');
   } else {
     const totalIncome = parseFloat(salary); // Parse salary as a float number
     navigation.navigate('ThirdPage', { totalIncome }); // Pass totalIncome as a parameter
   }
 };


 const isValidEmail = (email) => {
   // Use a regular expression to validate email format
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 };


 const isInputSelected = (inputName) => {
   return selectedInput === inputName;
 };


 const getInputStyle = (inputName) => {
   const inputStyles = [styles.input];
   if (isInputSelected(inputName)) {
     inputStyles.push(styles.inputSelected);
   }
   return inputStyles;
 };


 const handleEmailChange = (text) => {
   // Convert the input to lowercase before setting it in the state
   const lowercaseEmail = text.toLowerCase();
   setEmail(lowercaseEmail);
 };


 const handleSalaryChange = (text) => {
   // Remove any non-numeric characters from the input
   const formattedText = text.replace(/[^0-9]/g, '');
   setSalary(formattedText);
 };


 useEffect(() => {
   Animated.timing(fadeInAnim, {
     toValue: 1,
     duration: 1000,
     useNativeDriver: true,
   }).start();
 }, []);


 return (
   <TouchableOpacity activeOpacity={1} style={styles.container}>
     <Animated.Text style={[styles.text, { opacity: fadeInAnim }]}>SAVE TODAY, PROSPER TOMORROW</Animated.Text>


     <Text style={styles.enterDetailsText}>enter your details</Text>


     <View style={styles.inputContainer}>
       <Animated.View style={[getInputStyle('name'), { transform: [{ scale: inputScale }] }]}>
         <TextInput
           style={styles.inputText}
           placeholder="name"
           placeholderTextColor="#CCCCCC"
           value={name}
           onChangeText={setName}
           onFocus={() => handleInputFocus('name')}
           onBlur={handleInputBlur}
           required={true} // Make the field mandatory
         />
       </Animated.View>
     </View>
     <View style={styles.inputGap} />


     <View style={styles.inputContainer}>
       <Animated.View style={[getInputStyle('email'), { transform: [{ scale: inputScale }] }]}>
         <TextInput
           style={styles.inputText}
           placeholder="email"
           placeholderTextColor="#CCCCCC"
           value={email}
           onChangeText={handleEmailChange} // Handle email change with lowercase conversion
           onFocus={() => handleInputFocus('email')}
           onBlur={handleInputBlur}
           required={true} // Make the field mandatory
         />
       </Animated.View>
     </View>
     <View style={styles.inputGap} />


     <View style={styles.inputContainer}>
       <Animated.View style={[getInputStyle('salary'), { transform: [{ scale: inputScale }] }]}>
         <TextInput
           style={styles.inputText}
           placeholder="salary"
           placeholderTextColor="#CCCCCC"
           value={salary}
           onChangeText={handleSalaryChange}
           onFocus={() => handleInputFocus('salary')}
           onBlur={handleInputBlur}
           keyboardType="numeric" // Set keyboard type to numeric
           required={true} // Make the field mandatory
         />
       </Animated.View>
     </View>


     <TouchableOpacity style={styles.goButton} onPress={handleGoButtonPress}>
       <Text style={styles.goButtonText}>Go</Text>
     </TouchableOpacity>


     {showAlert && (
       <Text style={styles.alertText}>All fields are mandatory.</Text>
     )}
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
 text: {
   fontSize: 18,
   fontWeight: 'bold',
   color: '#008080',
   marginBottom: 40,
   marginTop: 40,
   paddingTop: 40,
   paddingBottom: 40,
 },
 enterDetailsText: {
   fontSize: 18,
   fontWeight: 'bold',
   color: '#BF5F5F',
   marginBottom: 16,
   textAlign: 'left',
 },
 inputContainer: {
   width: '100%',
   marginBottom: 16,
 },
 input: {
   width: '100%',
   height: 40,
   borderColor: '#CCCCCC',
   borderWidth: 1,
   borderRadius: 6,
   paddingHorizontal: 8,
   backgroundColor: '#FFFFFF',
   fontWeight: 'bold',
   textAlign: 'center',
 },
 inputText: {
   flex: 1,
   color: '#000000',
   fontWeight:'bold',
 },
 inputSelected: {
   borderColor: 'black',
   borderWidth: 2,
 },
 inputGap: {
   height: 2,
 },
 goButton: {
   marginTop: 16,
   backgroundColor: '#008080',
   borderRadius: 6,
   paddingVertical: 12,
   paddingHorizontal: 24,
   alignItems: 'center',
 },
 goButtonText: {
   color: '#FFFFFF',
   fontSize: 18,
   fontWeight: 'bold',
 },
 alertText: {
   marginTop: 8,
   color: 'red',
   fontSize: 14,
 },
});


export default SecondPage;


