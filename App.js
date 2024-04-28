import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabProvider from "./contexts/tab-context";
import "react-native-gesture-handler";
import { ThemeProvider } from "./contexts/theme-context";
import WrapperContainer from "./screens/WrapperContainer";
export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <WrapperContainer />
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
