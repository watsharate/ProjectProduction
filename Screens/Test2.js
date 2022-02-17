import React from "react";
import { View, Text, FlatList } from 'react-native'
import SoapRequest from 'react-native-soap-request';
import axios from 'axios';

let xmls='<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"\
                        xmlns:glob="http://sap.com/xi/SAPGlobal20/Global">\
            <soap:Header/>\
            <soap:Body>\
            <glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
                <MobileUserLoginSimpleSelectionBy>\
                    <SelectionByUserName>\
                        <InclusionExclusionCode>i</InclusionExclusionCode>\
                        <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
                        <LowerBoundaryUserName>TEST01</LowerBoundaryUserName>\
                    </SelectionByUserName>\
                    <SelectionByPassword>\
                        <InclusionExclusionCode>i</InclusionExclusionCode>\
                        <IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode>\
                        <LowerBoundaryPassword>123456</LowerBoundaryPassword>\
                    </SelectionByPassword>\
                </MobileUserLoginSimpleSelectionBy>\
            </glob:MobileUserLoginQueryByUserPasswordSimpleByRequest_sync>\
            </soap:Body>\
          </soap:Envelope>';

axios.post('file:/C:/Users/NTZ-Watcharate/Downloads/MobilePrdCf_Auth/MobilePrdCf_Auth.wsdl',
           xmls,
           {headers:
             {'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log(res);
           }).catch(err=>{console.log(err)});
           