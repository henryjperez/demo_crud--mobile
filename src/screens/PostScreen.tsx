import React, { useState, useEffect, useContext, } from "react";
import { View, Text } from "react-native";

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
import { useFocusEffect } from '@react-navigation/native';

export default function PostScreen() {
	const [content, setContent] = useState("");
	const { name, author_id, } = useContext(Context);
	const fetcher = useFetchAuth();
	const colors = useColors();

	/* useFocusEffect(() => {
		setContent("");
	}) */


	function handlePost() {
		console.log("Pressed", content);
		fetcher(sRoutes.create_post, { name, author_id, text_content: content });
	}

	return(
		<View style={{ backgroundColor: colors.main, flex: 1 }}>
			<View style={{ marginTop: 20 }}>
				<Title>
					New Post
				</Title>
			</View>
			<View style={{ alignItems: "flex-end",  }}>
				<TextArea onChangeText={setContent} />
				<Button onPress={handlePost} style={{ width: 50, height: 50, borderRadius: 20 }}>
					<MaterialCommunityIcons name="send" color={"white"} size={26} />
				</Button>
			</View>
		</View>
	);
};