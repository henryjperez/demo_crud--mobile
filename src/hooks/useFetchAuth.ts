import { useContext } from "react";
import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import context from "../context";
import { hostServer, sRoutes } from "../utils/constants";

interface Content {
	name?: string | undefined;
	last_name?: string | undefined;
	email?: string | undefined;
	avatar?: string | undefined;
	password?: string | undefined;
	author_id?: string | undefined;
}

function useFetchAuth() {
	// @ts-ignore
	const { isSignIn, dispatch } = useContext(context);
	// const navigation = useNavigation();

	async function fetcher(route: string, content: Content) {
		try {
			const { name } = content;
			const value = await fetch(hostServer + route, {
				method: "POST",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...content,
				}),
			})
				.then((response) => response.json())
				.then((json) => {
					return json;
				})
				.catch((error) => {
					console.error(error);
				});
			console.log(route, value, content);

			switch (route) {
				case sRoutes.register:
					if (value.created) {
						dispatch({ type: "login", payload: { name, author_id: value.author_id } });
						// navigation.navigate()
					} else {
						Alert.alert("Hubo un problema al crear el usuario, por favor inténtelo más tarde.");
					}
					break;
				
				case sRoutes.login:
					if (value.login) {
						dispatch({ type: "login", payload: { name, author_id: value.author_id } })
					} else {
						Alert.alert("No se pudo encontrar el usuario.");
					}
					break;
				
				case sRoutes.create_post:
					if (value.login) {
						dispatch({ type: "login", payload: { name, author_id: value.author_id } })
					} else {
						Alert.alert("No se pudo encontrar el usuario.");
					}
					break;
				
				case sRoutes.get_posts:
					if (value.login) {
						dispatch({ type: "login", payload: { name, author_id: value.author_id } })
					} else {
						Alert.alert("No se pudo encontrar el usuario.");
					}
					break;
			
				default:
					break;
			}

		} catch (err) {
			console.error(err);
			Alert.alert("Hubo un problema con el servidor, por favor inténtelo más tarde.");
		}
	}

	return fetcher;

}

export default useFetchAuth;