import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Feed from "./src/Feed";
import CountryDetail from "./src/CountryDetail";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" options={{ headerShown: false }}>
          {(props) => <Feed {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CountryDetail" options={{ headerShown: false }}>
          {(props) => <CountryDetail {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
