import React, { useState, useEffect, useContext } from "react";
import AuthNavigation from "./AuthNavigation";
import PostNavigation from "./PostNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import context from "../context";


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
			value = value ? await JSON.parse(value) : null;
			darkModer = darkModer ? await JSON.parse(darkModer) : null;

			if (value !== null) {
				setLogged(true);
			}
			if (darkModer) {
				dispatch({ type: "darkmode" });
			}
			if (name) {
				dispatch({ type: "name", payload: { name } });
			}
			if (author_id) {
				dispatch({ type: "author_id", payload: { author_id } });
			}
			console.log(value, darkModer, "perro");
		} catch (e) {
			console.error(e);
			Alert.alert("Inténtelo más tarde");
		}
	}

	async function just4Debug() {
		try {
			
			const keys = await AsyncStorage.getAllKeys();
			const result = await AsyncStorage.multiGet(keys);

			console.log(keys, result, "is logged", logged);
			

			// @ts-ignore
			// return result.map(req => JSON.parse(req)).forEach(val => console.log("Async Storage", val));
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getData();
		just4Debug();
	}, []);

	useEffect(() => {
		// if (isSignIn) {
		AsyncStorage.setItem('isSignIn', JSON.stringify(isSignIn));
		setLogged(isSignIn);
		// };
	}, [isSignIn]);


	if (logged) {
		// return <AuthNavigation />
		return <PostNavigation />
	}
	if (!logged) {
		// return <AuthNavigation />
		return <PostNavigation />
	}
	// return <AuthNavigation />
};

export default AppNavigation;