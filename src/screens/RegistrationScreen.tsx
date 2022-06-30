import React, { useContext, useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Title from "../components/atoms/text/Title";
import H2 from "../components/atoms/text/H2";
import DarkMode from "../components/atoms/buttons/DarkMode";
import Buttons from "../components/atoms/buttons";
import context from "../context";
import useFetchAuth from "../hooks/useFetchAuth";
import useColors from "../hooks/useColors";
import { sRoutes } from "../utils/constants";


const LoginScreen = (props: any) => {
	const [name, setName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// @ts-ignore
	const { dispatch, darkMode } = useContext(context);
	const colors = useColors();
	const fetcher = useFetchAuth();

	function handleSubmit() {
		fetcher(sRoutes.register, { name, last_name, email, password });
	}

	return (
		<View style={{ backgroundColor: colors.main, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }}>
			<SafeAreaView>
				<ScrollView>
					<View style={{ alignItems: "center" }}>
						<Title>
							Registration
						</Title>
						
						<View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
							<H2>
								First Name:
							</H2>
							<TextInput style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts }} onChangeText={setName} />
						</View>

						<View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
							<H2>
								Last Name:
							</H2>
							<TextInput style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts }} onChangeText={setLastName} />
						</View>

						<View style={{ marginTop: 30, justifyContent: "center", alignItems: "center" }}>
							<H2>
								Email:
							</H2>
							<TextInput keyboardType="email-address" autoComplete="email" style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts }} onChangeText={setEmail} />
						</View>

						<View style={{ marginTop: 30, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
							<H2>
								Password:
							</H2>
							<TextInput secureTextEntry style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts }} onChangeText={setPassword} />
						</View>

						<Buttons onPress={handleSubmit} style={{ width: 200 }}>
							Register
						</Buttons>
					</View>
					<View style={{ marginTop: 40, alignItems: "center" }}>
						<Text style={{ color: colors.fonts }}>
							Already have an account?
						</Text>
						<Buttons onPress={() => { props.navigation.navigate('Login') }} style={{ width: 200 }}>
							Login
						</Buttons>
					</View>
					<View style={{ alignItems: "center", marginTop: 20, marginBottom: 30 }}>
						<DarkMode />
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	formInput: {
		padding: 10,
		borderRadius: 5,
		width: 250
	}
})

export default LoginScreen;