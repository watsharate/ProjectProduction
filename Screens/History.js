import React, { Component, component } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from "react-native";
// import firebase from "../database/firebaseDb";
import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
// import firebase from "../database/firebaseDb";



// class History extends Component {
//     constructor() {
//         super();

//         this.dbRef = firebase.firestore().collection('react-native-data');
//         this.state = {
//           name:"",
//           email:"",
//           mobile:"",
//           isLoading: false
//         }
//     }

//     inputValueUpdate = (val, prop) => {
//         const state = this.state;
//         state[prop] = val;
//         this.setState(state);
//     }

//     render() {
//       return(
//         <ThemeProvider theme={theme}>
//               <ScrollView style={styles.container}>
//               <Input
//                 leftIcon={
//                   <Icon
//                       name='user'
//                       size={20}
//                       color='#0085e6'
//                   />
//                 }
//                 placeholder={'Name'}
//               />
//               <Input
//                 leftIcon={
//                   <Icon
//                       name='envelope-o'
//                       size={20}
//                       color='#0085e6'
//                   />
//                 }
//                 placeholder={'Email'}
//               />
//               <Input
//                 leftIcon={
//                   <Icon
//                       name='mobile'
//                       size={30}
//                       color='#0085e6'
//                   />
//                 }
//                 placeholder={'Moblie'}
//               />
//               <Button
//                 icon={
//                   <Icon
//                       name='check'
//                       size={15}
//                       color='white'
//                   />
//                 }
//                 title={'  Add user'}
//               />
//               </ScrollView>
//         </ThemeProvider>
//       )
//     }
// }

// const theme = {
//     Butoon: {
//         raised: true
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 35
//     },
//       preloader: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//       }
// })
// import firebase from '../database/firebaseDB';
// import SearchBar from 'react-native-search-bar';



const History = ({navigation}) => {
  
  

  return (
    <ScrollView style={styles.container}>
      <Divider color="white" width={1.5} style={{marginHorizontal: 20}} />

      <Card containerStyle={{borderRadius: 10, marginBottom: 10}}>
        
  
        <View style={{flex: 1, flexDirection: 'row'}}>
          
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          
          <Card containerStyle={styles.cardstyle}>
            <Text style={styles.textshow}> : {}</Text>
          </Card>
        </View>

        {/* <Button
          raised
          title="eiei"
          onPress={() => navigation.navigate('ProductionConfirm')}
          containerStyle={{marginVertical: 10, marginHorizontal: 10}}
          buttonStyle={{backgroundColor: 'green', borderRadius: 7}}
          titleStyle={{fontSize: 20}}
        /> */}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#FFB23E',
  },
  stext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textshow: {
    fontSize: 18,
    color: 'black',
  },
  cardstyle: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#EEF1F3',
    flex: 1,
  },
});

export default History;
