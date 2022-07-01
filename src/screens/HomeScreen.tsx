import React, { useState, useEffect, useContext, } from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView } from "react-native";

import TextArea from "../components/atoms/inputs/TextArea";
import Title from "../components/atoms/text/Title";
import H2 from "../components/atoms/text/H2";
import H3 from "../components/atoms/text/H3";
import Button from "../components/atoms/buttons";
import Context from "../context";
import useFetchAuth from "../hooks/useFetchAuth";
import { sRoutes } from "../utils/constants";
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useColors from "../hooks/useColors";
import Logout from "../components/atoms/buttons/logout";
import DarkMode from "../components/atoms/buttons/DarkMode";
import { useFocusEffect } from '@react-navigation/native';


export default function HomeScreen() {
	const [content, setContent] = useState("");
	const { posts } = useContext(Context);
	const fetcher = useFetchAuth();
	const colors = useColors();

	useEffect(() => {
		handlePost();
	}, []);

	function handlePost() {
		fetcher(sRoutes.get_posts, {});
		console.log("POSTS", posts);
	}

	const renderItem = ({ item }: any) => {
		return (
			<View style={{ padding: 10, backgroundColor: colors.second, paddingRight: 10, paddingLeft: 10, margin: 5, marginLeft: 20, marginRight: 20, paddingTop: 5, paddingBottom: 20, borderRadius: 10 }}>
				<Text style={{ color: colors.third, fontWeight: "bold", fontSize: 16 }}>
					{`by ${item.name || "Anonymous"}`}
				</Text>
				<Text style={{ color: colors.fonts }}>
					{item.text_content}
				</Text>
			</View>
		);
	};

	return (
		<View style={{ backgroundColor: colors.main, flex: 1 }}>
			<View style={{ marginTop: 20 }}>
				<Title>
					Home
				</Title>
			</View>
			{/* <ScrollView> */}

			<View style={{ marginBottom: 60 }}>
				<FlatList
					data={posts}
					renderItem={renderItem}
					//@ts-ignore
					keyExtractor={item => item._id}
				/>
				<Button onPress={handlePost} style={{ width: 50, height: 50, borderRadius: 20, alignSelf: "center" }}>
					<MaterialCommunityIcons name="reload" color={"white"} size={26} />
				</Button>
			</View>

			{/* </ScrollView> */}
		</View>
	);
};