import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit';


const OldTotalExpenditure = ({ route }) => {
 const { luxuryExpenditure, foodExpenditure, travelExpenditure, billsExpenditure } = route.params;
 const totalExpenditure = luxuryExpenditure + foodExpenditure + travelExpenditure + billsExpenditure;


 const fadeInAnimation = useRef(new Animated.Value(0)).current;
 const [showChart, setShowChart] = useState(false);


 useEffect(() => {
   Animated.timing(fadeInAnimation, {
     toValue: 1,
     duration: 1000,
     useNativeDriver: true,
   }).start();
 }, []);


 const data = {
   labels: ['Food', 'Luxury', 'Travel', 'Miscellaneous'],
   datasets: [
     {
       data: [foodExpenditure, luxuryExpenditure, travelExpenditure, billsExpenditure],
     },
   ],
 };


 const chartConfig = {
   backgroundGradientFrom: '#1E2923',
   backgroundGradientTo: '#08130D',
   decimalPlaces: 0,
   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
   style: {
     borderRadius: 16,
   },
   propsForLabels: {
     fontSize: 12,
   },
   propsForVerticalLabels: {
     fontSize: 12,
   },
 };


 const barColors = ['#F8C2C2', '#E74141', '#F08080', '#FFA880'];


 const toggleChartVisibility = () => {
   setShowChart((prevShowChart) => !prevShowChart);
 };


 return (
   <Animated.View style={[styles.container, { opacity: fadeInAnimation }]}>
     <Animated.Text style={[styles.headingText, { opacity: fadeInAnimation }]}>TOTAL EXPENDITURE</Animated.Text>


     <Animated.View style={[styles.categoryContainer, styles.borderContainer, { opacity: fadeInAnimation }]}>
       <Text style={styles.categoryLabel}>Luxury</Text>
       <Text style={styles.categoryValue}>Rs. {luxuryExpenditure}</Text>
     </Animated.View>


     <Animated.View style={[styles.categoryContainer, styles.borderContainer, { opacity: fadeInAnimation }]}>
       <Text style={styles.categoryLabel}>Food</Text>
       <Text style={styles.categoryValue}>Rs. {foodExpenditure}</Text>
     </Animated.View>


     <Animated.View style={[styles.categoryContainer, styles.borderContainer, { opacity: fadeInAnimation }]}>
       <Text style={styles.categoryLabel}>Travel</Text>
       <Text style={styles.categoryValue}>Rs. {travelExpenditure}</Text>
     </Animated.View>


     <Animated.View style={[styles.categoryContainer, styles.borderContainer, { opacity: fadeInAnimation }]}>
       <Text style={styles.categoryLabel}>Miscellaneous</Text>
       <Text style={styles.categoryValue}>Rs. {billsExpenditure}</Text>
     </Animated.View>


     <Animated.View style={{ opacity: fadeInAnimation }}>
       <TouchableOpacity style={styles.button} onPress={toggleChartVisibility}>
         <Text style={styles.buttonText}>Show Analytics</Text>
       </TouchableOpacity>
     </Animated.View>


     {showChart && (
       <View style={styles.chartContainer}>
         <Text style={styles.chartLabel}>Expenditure Chart</Text>
         <BarChart
           data={data}
           width={300}
           height={200}
           yAxisLabel="Rs."
           chartConfig={chartConfig}
           style={styles.chart}
           verticalLabelRotation={30}
           fromZero={true}
           showValuesOnTopOfBars={true}
           flatColor={true}
           segments={4}
           barColor={(opacity, index) => barColors[index % barColors.length]}
         />
       </View>
     )}
   </Animated.View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#000000',
   paddingHorizontal: 20,
   paddingTop: 20,
 },
 headingText: {
   color: '#ffd700',
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 20,
 },
 categoryContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: 10,
   borderRadius: 10,
 },
 borderContainer: {
   borderWidth: 1,
   borderColor: '#fffaf0',
   paddingHorizontal: 10,
   paddingVertical: 5,
 },
 categoryLabel: {
   color: '#ffffff',
   fontSize: 16,
   fontWeight: 'bold',
 },
 categoryValue: {
   color: '#ffffff',
   fontSize: 16,
   fontWeight: 'bold',
 },
 button: {
   backgroundColor: '#000000',
   alignSelf: 'center',
   paddingHorizontal: 20,
   paddingVertical: 10,
   borderRadius: 5,
   marginTop: 20,
 },
 buttonText: {
   color: '#fffaf0',
   fontSize: 16,
   fontWeight: 'bold',
 },
 chartContainer: {
   marginTop: 20,
   alignItems: 'center',
 },
 chartLabel: {
   color: '#ffd700',
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 10,
 },
 chart: {
   marginVertical: 20,
   borderRadius: 16,
 },
});


export default OldTotalExpenditure;


