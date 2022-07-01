import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";


const Tab = createMaterialBottomTabNavigator();

function PostNavigation() {
	return (
		// @ts-ignore
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					// tabBarLabel: '',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
				}}
				/>
			<Tab.Screen
				name="New Post"
				component={PostScreen}
				options={{
					// tabBarLabel: '',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="plus" color={color} size={26} />
					),
					// tabBarBadge: 12,
				}}
				/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					// tabBarLabel: '',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" color={color} size={26} />
					),
				}}
				/>
		</Tab.Navigator>
	);
}


export default PostNavigation;