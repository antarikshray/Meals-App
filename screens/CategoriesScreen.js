import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTab from '../components/CategoryGridTab';
import { CATEGORIES } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTab 
                    navigation={props.navigation} 
                    itemData={itemData} 
                    onSelect={()=>{
                        props.navigation.navigate({ 
                            routeName: 'CategoryMeal', 
                            params: {
                                categoryId: itemData.item.id
                            }
                        });
                    }}/>;
    }

    return (
        <FlatList data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    );
}

CategoriesScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Meal Categories',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={()=> {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>)
    };
};

const styles = StyleSheet.create({
   
});

export default CategoriesScreen;