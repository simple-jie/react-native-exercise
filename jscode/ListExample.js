import React, {Component} from "react";
import {FlatList, SectionList, StyleSheet, Text, View} from "react-native";

export default class ListExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{
                    flex: 1
                }}
                    data={[
                    {
                        key: 'Devin'
                    }, {
                        key: 'Jackson'
                    }, {
                        key: 'James'
                    }, {
                        key: 'Joel-1'
                    }, {
                        key: 'John0'
                    }, {
                        key: 'Jillian1'
                    }, {
                        key: 'Jimmy2'
                    }, {
                        key: 'Julie13'
                    }
                ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>

                <SectionList
                    style={{
                    flex: 1
                }}
                    sections={[
                    {
                        title: 'D',
                        data: ['Devin']
                    }, {
                        title: 'J',
                        data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie'
                        ]
                    }
                ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})