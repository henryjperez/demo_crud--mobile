import React from "react";
import { View, TextInput } from "react-native";

export default function TextArea(props: any) {
	return (
		<View>
			<TextInput
				{...props} // Inherit any props passed to it;
				editable
				// maxLength={40}
				placeholder={"Write your world..."}
				onChange={props.onChange}
				multiline
				numberOfLines={5}
				style={{ padding: 10, color: "black", backgroundColor: "white", alignSelf: "stretch" }}
			/>
		</View>
	);
};