import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const Favourite = props =>{

    const favMeals = useSelector(state => state.meals.favoriteMeals); 
    if ( favMeals.length === 0 || !favMeals){
        return <View style={styles.content}>
            <Text>No favorite meals found. Start adding some!</Text>
        </View>
    }
    return <MealList displayedMeals={favMeals} navigation={props.navigation}/>;
}

Favourite.navigationOptions = navData => {
    return{
        headerTitle: 'Your Favourites',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={()=> {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>)
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Favourite;