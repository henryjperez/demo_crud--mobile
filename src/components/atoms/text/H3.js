import React from "react";
import { Text, StyleSheet, } from "react-native";
import useColors from "../../../hooks/useColors";

const H3 = (props) => {
	const colors = useColors();

	return (
		<Text
			style={{ ...styles.h1, color: colors.fonts, ...props.style }}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 18,
		textAlign: "center",
		fontWeight: "normal"
	}
});

export default H2;