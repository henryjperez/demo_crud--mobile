import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import context from "../context";

const Stack = createNativeStackNavigator();

const AuthNavigation = (props) => {
	const { isSignIn } = useContext(context);

	useEffect(() => {
		// console.log("Auth Nav", props);
		if (isSignIn) {
			props.navigation.navigate("Poston");
		}
	}, [isSignIn]);

	return (
		// @ts-ignore
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={'Login'} component={LoginScreen} />
			<Stack.Screen name={'Registration'} component={RegistrationScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;