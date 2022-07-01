import React, { useState, useEffect, useContext } from "react";
import AuthNavigation from "./AuthNavigation";
import PostNavigation from "./PostNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import context from "../context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	const [logged, setLogged] = useState(false);
	// @ts-ignore
	const { dispatch, isSignIn } = useContext(context);

	async function getData() {
		try {
			let _isSignIn = AsyncStorage.getItem('isSignIn');
			let _darkMode = AsyncStorage.getItem('darkMode');
			let _author_id = AsyncStorage.getItem('author_id');
			let _name = AsyncStorage.getItem('name');

			let [ value, darkModer, author_id, name ] = await Promise.all([_isSignIn, _darkMode, _author_id, _name]);

			console.log("Async Data On Load: value, darkModer, id, name =>", value, darkModer, author_id, name,);

			setLogged(!!value);


			if (darkModer) {
				dispatch({ type: "darkmode" });
			}
			if (name) {
				dispatch({ type: "name", payload: { name } });
			}
			if (author_id) {
				dispatch({ type: "author_id", payload: { author_id } });
			}

			if (!!value) {
				dispatch({ type: "login", payload: { name: name || "", author_id: author_id || "", darkMode: darkModer, isSignIn: true } });
			}
		} catch (e) {
			console.error(e);
			Alert.alert("Inténtelo más tarde");
		}
	}

	

	useEffect(() => {
		getData();
	}, []);

	/* useEffect(() => {
		// if (isSignIn) {
		AsyncStorage.setItem('isSignIn', JSON.stringify(isSignIn));
		setLogged(isSignIn);
		// };

		console.log("The isSign In changed", isSignIn);
		

	}, [isSignIn]); */


	/* if (!logged) {
		// return <AuthNavigation />
		return <PostNavigation />
	}

	return <PostNavigation /> */

	// return <AuthNavigation />
	// return logged? <PostNavigation /> : <AuthNavigation />

	return(
		//@ts-ignore
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			{/* {!logged ? ( */}
				<Stack.Screen name="Authentication" component={AuthNavigation} />
			{/* ) : ( */}
				<Stack.Screen name="Poston" component={PostNavigation} />
			{/* )} */}
		</Stack.Navigator>
	);
};

export default AppNavigation;