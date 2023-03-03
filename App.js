import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Provider as PaperProvider, TextInput, useTheme } from 'react-native-paper';

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
      <StatusBar style="auto" />
      <TextInput mode="flat" label="TextInput flat" />
      <TextInput mode="flat" disabled label="TextInput flat disabled" />
      <TextInput mode="flat" multiline label="TextInput flat multiline" />
      <TextInput mode="flat" multiline disabled label="TextInput flat multiline disabled" />
      <TextInput mode="outlined" label="TextInput outlined" />
      <TextInput mode="outlined" disabled label="TextInput outlined disabled" />
      <TextInput mode="outlined" multiline label="TextInput outlined multiline" />
      <TextInput mode="outlined" multiline disabled label="TextInput outlined multiline disabled" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
