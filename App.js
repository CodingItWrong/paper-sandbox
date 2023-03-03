import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Provider as PaperProvider, Text, useTheme } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}

function HomeScreen() {
  const theme = useTheme();
  const backgroundStyle = {backgroundColor: theme.colors.background};
  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
