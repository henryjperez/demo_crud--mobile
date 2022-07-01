import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import AppNavigation from "./src/navigation/AppNavigation";
import ContextProvider from "./src/context/context_provider";

export default function App() {
	return (
		<ContextProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					{/* <StatusBar style="light" /> */}
					<AppNavigation />
				</NavigationContainer>
			</SafeAreaProvider>
		</ContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
