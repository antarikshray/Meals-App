import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Favourite from '../screens/Favourites';
import FilterScreen from '../screens/FilterScreen';

import { Ionicons } from '@expo/vector-icons';
import { enableScreens } from 'react-native-screens';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';

enableScreens();

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white'
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
},
    {
        defaultNavigationOptions: defaultOptions 
});

const FavoriteStack = createStackNavigator({
    Favourites: Favourite,
    MealDetail: MealDetailScreen
    }, {
    defaultNavigationOptions: defaultOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoriteStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor
        }
    }
};


const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(
            tabScreenConfig,
            {
                activeTintColor: 'white',
                shifting: true
            }
        )
        : createBottomTabNavigator({
            tabScreenConfig,
            tabBarOptions: {
                activeTintColor: Colors.accentColor,
            }
        });

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
},{
    defaultNavigationOptions: defaultOptions 
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator, 
        navigationOptions:{
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);