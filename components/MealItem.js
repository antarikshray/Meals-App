import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View >
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                    <Text style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        margin: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.45)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        textAlign: 'center'
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '88%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    }
});

export default MealItem;