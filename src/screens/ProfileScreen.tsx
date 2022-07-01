import React, { useState, useEffect, useContext, } from "react";
import { View, Text } from "react-native";

import Title from "../components/atoms/text/Title";
import useColors from "../hooks/useColors";
import Logout from "../components/atoms/buttons/logout";
import DarkMode from "../components/atoms/buttons/DarkMode";
import Context from "../context";


export default function ProfileScreen() {
	const colors = useColors();
	const { name } = useContext(Context)


	return(
		<View style={{ backgroundColor: colors.main, flex: 1 }}>
			<View style={{ marginTop: 20 }}>
				<Title>
					{
						`Hello, ${name || "Dear User"}`
					}
				</Title>
			</View>
			<View style={{ alignItems: "flex-end",  }}>
				<Logout />
				<DarkMode />
			</View>
		</View>
	);
};