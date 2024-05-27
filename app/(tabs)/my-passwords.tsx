import { useStorage } from '@/hooks/useStorage';
import { useState,  useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from  'expo-router'
import { PasswordItem } from '@/components';

export default function TabTwoScreen() {
  const [listPasswords, setListPasswords] = useState([]);
  const { getItem, removeItem } = useStorage();

  useFocusEffect(
    useCallback(() => {
      const loadPasswords = async () => {
        const passwords = await getItem('@pass')
        setListPasswords(passwords)
       }
    
       loadPasswords()
    }, [])
  )

  const handleRemovePassword = async (item: string) => {
    const passwords = await removeItem('@pass', item)
    setListPasswords(passwords)
  }


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
