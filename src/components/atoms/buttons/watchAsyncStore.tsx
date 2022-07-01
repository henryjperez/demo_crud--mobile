import React from "react";
import { View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WatchAsyncStorage() {

	function clearStorage() {
		AsyncStorage.clear();
	}

	async function watchWhatsInside() {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const result = await AsyncStorage.multiGet(keys);

			console.log("keys", keys,);
			console.log("values", result,);
		} catch (error) {
			console.error(error)
		}
	}

	return(
		<View>
			<Button title="Watch" onPress={watchWhatsInside} />
			<Button title="Clear" onPress={clearStorage} />
		</View>
	);
}