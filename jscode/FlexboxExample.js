import React, {Component} from 'react';
import {View, SegmentedControlIOS} from 'react-native'

export default class FlexboxExample extends Component {
    render() {
        return (
            <View
                style={{
                flexDirection: "column",
                flexWrap: 'wrap'
            }}>
                {/* 注释 */}
                {/* <FlexDirectionBasics/> */}
                <JustifyContentBasics/>
            </View>
        );
    }
};

class FlexDirectionBasics extends Component {
    render() {
        return (

            <View style={{
                flexDirection: 'row',
            }}>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "rgba(233,53,75,1)"
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'skyblue'
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'steelblue'
                }}/>
            </View>
        );
    }
};

class JustifyContentBasics extends Component {
    render() {
        return (
            <View
                style={{
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap:'wrap',
                alignContent: 'center'
            }}>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue'
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'skyblue'
                }}/>
                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'steelblue'
                }}/>
            </View>
        );
    };
};