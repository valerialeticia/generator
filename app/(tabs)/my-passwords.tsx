import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PasswordItem } from '@/components';
import { useMyPasswords } from '@/hooks/useMyPasswords';

export default function TabTwoScreen() {
  const { listPasswords, handleRemovePassword } = useMyPasswords()

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList 
          style={{ flex: 1, paddingTop: 14 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItem data={item} removePassword={ () => handleRemovePassword(item)} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingRight: 14,
    paddingLeft: 14,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  }
});
