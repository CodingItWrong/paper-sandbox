import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Menu, Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <MenuAndButton label="Left Menu" />
          <MenuAndButton label="Center Menu" />
          <MenuAndButton label="Right Menu" />
        </View>
      </View>
    </PaperProvider>
  );
}

function MenuAndButton({label}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      visible={menuOpen}
      onDismiss={() => setMenuOpen(false)}
      anchor={
        <Button mode='contained' onPress={() => setMenuOpen(true)}>{label}</Button>
      }
    >
      <Menu.Item title="Hi" onPress={() => {}} />
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
