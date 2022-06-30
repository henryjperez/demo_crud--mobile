import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostScreen from "../screens/PostScreen";


const Tab = createMaterialBottomTabNavigator();

function PostNavigation() {
	return (
		// @ts-ignore
		<Tab.Navigator style={ { backgroundColor: "red" } }>
			<Tab.Screen
				name="Home"
				component={PostScreen}
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
				labeled={false}
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
				component={PostScreen}
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