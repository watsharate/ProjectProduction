import React, {useEffect, useState, Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { AuthContext } from '../components/context';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import Users from '../model/users';
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const Login =  ({navigation}) => {

    try{
        AsyncStorage.getItem('ConfigDb').then(value => {
            if (value !== null) {
                console.log('getdata');
                let config = JSON.parse(value);
                console.log(config);
                setusername(config.Username);
                setpassword(config.Password);
                seturl(config.Url);
            }
                console.log(Username);
                console.log(Password);
                console.log(Url);
        })
    }catch (e) {
        console.log(e);}

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('กรุณากรอกข้อมูล', 'ไม่พบ Username หรือ password.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('ไม่พบข้อมูล', 'Username หรือ password ไม่ถูกต้อง.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    var Cxml2json = require('xml2js').parseString;
    var stripNS = require('xml2js').processors.stripPrefix;

    var base64 = require('base-64');
    var utf8 = require('utf8');

    const setConfig = async () => {  
        if (Url.length == 0 || Username.length == 0 || Password.length == 0) {
          Alert.alert('Warning!','กรุณากรอกข้อมูล');
        } else {
          var createuser = Username + ':' + Password;
          var bytes = utf8.encode(createuser);
          var encoded = base64.encode(bytes);
          var basicAuth = 'Basic ' + encoded;
          console.log(basicAuth);
  
          let xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:glob="http://sap.com/xi/SAPGlobal20/Global">
          <soapenv:Header/>
          <soapenv:Body>
             <glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>
                <MobileUserLoginSimpleSelectionBy>
                   <SelectionByLogin_UserName>
                      <InclusionExclusionCode>I</InclusionExclusionCode>
                      <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>
                      <LowerBoundaryLogin_UserName>${Lusername}</LowerBoundaryLogin_UserName>
                   </SelectionByLogin_UserName>
                   <SelectionByLogin_Password>
                      <InclusionExclusionCode>I</InclusionExclusionCode>
                      <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>
                      <LowerBoundaryLogin_Password>${Lpassword}</LowerBoundaryLogin_Password>
                   </SelectionByLogin_Password>
       
                </MobileUserLoginSimpleSelectionBy>
             </glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>
          </soapenv:Body>
       </soapenv:Envelope>`;
          await axios
            .post(
              `${Url}/sap/bc/srt/scs/sap/yyd61neday_mobileprdcfauth?sap-vhost=my334089.sapbydesign.com`,
              xmls,
              {
                headers: {
                  'Content-Type': 'text/xml',
                  Authorization: basicAuth,
                },
              },
            )
            
            .then (res => { 
              console.log(res.data); 
             // const data = 
              // convert.xml2json(res.data, { compact: true, spaces: 1 })
               //console.log(data);
               try {
                console.log('start setdata');
                  var configID = {
                  Username : Username,
                  Password : Password,
                  Url : Url
                }
                console.log(configID);
                console.log('setdata');
               AsyncStorage.setItem('ConfigDb', JSON.stringify(configID));
              Alert.alert('Connect Success');
              
              var Token ={
                  useToken : 1234
              }
              AsyncStorage.setItem('userToken', JSON.stringify(Token));

              } catch (e) {
                console.log(e);
            }
                Cxml2json  (res.data, { tagNameProcessors: [stripNS] },
                function (err, result) {
                console.log(result.Envelope.Body[0].MobileUserLoginQueryByUserPasswordSimpleByConfirmation_sync[0].ProcessingConditions[0].ReturnedQueryHitsNumberValue[0]);
                  console.log(JSON.stringify(result));
                if  (result.Envelope.Body[0].MobileUserLoginQueryByUserPasswordSimpleByConfirmation_sync[0].ProcessingConditions[0].ReturnedQueryHitsNumberValue[0] == 1) {
                  Alert.alert('Successfully', 'ยินต้อนรับเข้าสู่ระบบ By Design'), navigation.navigate('Home')
                }else{
                  Alert.alert('Warning!', 'Username หรือ password ไม่ถูกต้อง')
                }
    
    
              });
           }
        )};
      };
        const [Lusername, Loginusername] = useState('');
        const [Lpassword, Loginpassword] = useState('');
        const [Url, seturl] = useState('');
        const [Username, setusername] = useState('');
        const [Password, setpassword] = useState('');    
      
      return (
          <View style={styles.container}>
              <StatusBar backgroundColor='#FFB23E' barStyle="light-content"/>
            <View style={ styles.title_header}>
                <TouchableOpacity onPress={() => navigation.navigate('TestConfig')}>
                <Feather
                    name="settings"
                    color="white"
                    size={30}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
            <Animatable.Image 
                  animation="bounceIn"
                  duraton="1500"
                  source={require('../assets/u.png')}
                  style={styles.logo}
                  resizeMode="stretch"
                />
            </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
          >
              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Username</Text>
              <View style={styles.action}>
                  <FontAwesome 
                      name="user-o"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Username"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      onChangeText={(value) => Loginusername(value)}
                  />
              </View>
              
  
              <Text style={[styles.text_footer, {
                  color: colors.text,
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color={colors.text}
                      size={20}
                  />
                  <TextInput 
                      placeholder="Your Password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      onChangeText={(value) => Loginpassword(value)}
                  />
                  <TouchableOpacity
                      onPress={updateSecureTextEntry}
                  >
                      {data.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
              
              <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      onPress={setConfig}
                  >
                  <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>CONFIRM</Text>
                  </LinearGradient>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
    };

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFB23E'
    },
    title_header: {
        paddingHorizontal: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 30
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginTop: 180
    },
    logo: {
        marginLeft: 10,
        width: 330,
        height: 220,
        marginBottom: 20,
      },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 0
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
