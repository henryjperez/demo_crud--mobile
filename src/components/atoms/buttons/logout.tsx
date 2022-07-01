import React from "react";
import {  } from "react-native";
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from "../buttons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from "../../../context";

import { useNavigation } from '@react-navigation/native';

export default function Logout(props:any) {
	//@ts-ignore
	const { dispatch } = React.useContext(Context);
	const navigation = useNavigation();

	function handleLogout() {
		const promise1 = AsyncStorage.setItem('isSignIn', JSON.stringify(false));
		const promise2 = AsyncStorage.setItem('id', JSON.stringify(""))
		const promise3 = AsyncStorage.setItem('author_id', JSON.stringify(""))
		const promise4 = AsyncStorage.setItem('name', JSON.stringify(""))

		Promise.all([promise1, promise2, promise3, promise4]).then(() => {
			dispatch({ type: "logout" })
		}).catch(console.error);
		//@ts-ignore
		navigation.navigate("Authentication")
	}

	return(
		<Button onPress={handleLogout} style={{ width: 50, height: 50, borderRadius: 20 }}>
			<MaterialCommunityIcons name="exit-run" color={"white"} size={26} />
		</Button>
	);
}