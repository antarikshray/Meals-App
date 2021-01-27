import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const CategoryGridTab = props =>{
    
    return<TouchableOpacity 
            style={{backgroundColor: props.itemData.item.color ,...styles.gridItem}}
            onPress={props.onSelect}>
            <View>
                <Text style={styles.tabTitle}>{props.itemData.item.title}</Text>
            </View>
        </TouchableOpacity>;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10, 
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 20 
    }
}); 

export default CategoryGridTab;