import { useReducer } from "react";
import Context from "./index";
import initState from "./state";
import AsyncStorage from '@react-native-async-storage/async-storage';

function reducer(state, action) {
	switch (action.type) {
		case "darkmode":
			console.log("darkmode", state);
			AsyncStorage.setItem('darkMode', JSON.stringify(!state.darkMode)).then(() => console.log("dark mode set to", !state.darkMode)).catch(console.error);
			return { ...state, darkMode: !state.darkMode };

		case "login":
			console.log("login", action.payload);
			AsyncStorage.setItem('id', JSON.stringify(action.payload.author_id)).then(() => console.log("Author ID", action.payload.author_id)).catch(console.error);
			const promise0 = AsyncStorage.setItem('author_id', JSON.stringify(action.payload.author_id));
			const promise1 = AsyncStorage.setItem('name', JSON.stringify(action.payload.name));
			const promise2 = AsyncStorage.setItem('last_name', JSON.stringify(action.payload.last_name));

			Promise.all([promise0, promise1, promise2]).catch(console.error);
			return { ...state, isSignIn: true, ...action.payload };

		case "logout":
			console.log("Loguinout");
			return { ...state, isSignIn: false, author_id: "", name: "", posts: [] };

		case "post-got":
			console.log("post-got", action.payload);
			return { ...state, ...action.payload };

		case "name":
			console.log("name", action.payload);
			return { ...state, ...action.payload };

		case "author_id":
			console.log("author_id", action.payload);
			return { ...state, ...action.payload };

		default:
			return state;
	}

}

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<Context.Provider value={{...state, dispatch }}>
			{ children }
		</Context.Provider>
	);
};

export default ContextProvider;