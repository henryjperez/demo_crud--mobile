import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import useColors from "../../../hooks/useColors";
import context from "../../../context";
import Buttons from "./index";
import Icon from "react-native-vector-icons/FontAwesome5";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const DarkMode = (props) => {
	const colors = useColors();
	const { dispatch, darkMode } = useContext(context);

	function handleDarkMode() {
		// AsyncStorage.setItem('@darkMode', JSON.stringify(isSignIn));
		dispatch({ type: "darkmode" });
	}

	return (
		<Buttons onPress={handleDarkMode} style={{ width: 50, borderRadius: 50, backgroundColor: colors.fonts, }} tStyle={{ color: colors.main }}>
			<Icon name={darkMode ? "sun" : "moon"} size={25} color={colors.main} />
		</Buttons>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold"
	},
	button: {
		padding: 5,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default DarkMode;