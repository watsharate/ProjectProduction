import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Linking,
} from 'react-native';
import React, {useEffect, useState, Component} from 'react';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';

//var xmls='';
// let xmls='<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"\ xmlns:glob="http://sap.com/xi/SAPGlobal20/Global">\
//             <soapenv:Header/>\
//             <soapenv:Body>\
//             <glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
//             <MobileUserLoginSimpleSelectionBy>\
//                <SelectionByUserName>\
//                   <InclusionExclusionCode>I</InclusionExclusionCode>\
//                   <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
//                   <LowerBoundaryUserName>TESTID</LowerBoundaryUserName>\
//                </SelectionByUserName>\
//                <SelectionByPassword>\
//                   <InclusionExclusionCode>I</InclusionExclusionCode>\
//                   <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
//                   <LowerBoundaryPassword>12345</LowerBoundaryPassword>\
//                </SelectionByPassword>\
//             </MobileUserLoginSimpleSelectionBy>\
//          </glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
//             </soapenv:Body>\
//           </soapenv:Envelope>';



// axios({
//   method: 'get',
//   url: 'https://my334089.sapbydesign.com/sap/bc/srt/scs/sap/yyd61neday_mobileprdcfauth?sap-vhost=my334089.sapbydesign.com',xmls,
//   auth:{
//     username: '_NTZ_KAN',
//     password: 'Welcome2021'
//   }
// }).then((Response)=>{
//     console.log(Response.data);
//   }).catch(err=>{console.log(err)});

const App = () => {
  let xmls='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:glob="http://sap.com/xi/SAPGlobal20/Global">\
            <soapenv:Header/>\
            <soapenv:Body>\
            <glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
            <MobileUserLoginSimpleSelectionBy>\
               <SelectionByUserName>\
                  <InclusionExclusionCode>I</InclusionExclusionCode>\
                  <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
                  <LowerBoundaryUserName>TESTID</LowerBoundaryUserName>\
               </SelectionByUserName>\
               <SelectionByPassword>\
                  <InclusionExclusionCode>i</InclusionExclusionCode>\
                  <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
                  <LowerBoundaryPassword>123456</LowerBoundaryPassword>\
               </SelectionByPassword>\
            </MobileUserLoginSimpleSelectionBy>\
         </glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
            </soapenv:Body>\
          </soapenv:Envelope>';
  axios.post('https://my334089.sapbydesign.com/sap/bc/srt/scs/sap/yyd61neday_mobileprdcfauth?sap-vhost=my334089.sapbydesign.com',
  xmls,
  {
    headers:
    {'Content-Type': 'text/xml',
    'Authorization':'Basic X05UWl9LQU46V2VsY29tZTIwMjE='
  },
  }).then(res=>{
    console.log('sucess');
    console.log(res.data);
  }).catch(err=>{
    console.log('fail');
    console.log(err)
  });


  return (
    <View style={styles.container}>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'rgb(99,55,888)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stext: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
  },
  textshow: {
    fontSize: 20,
    color: 'black',
  },
  cardstyle: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#EEF1F3',
    flex: 1,
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: '#EEF1F3',
    height: 50,
    marginBottom: 15,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
