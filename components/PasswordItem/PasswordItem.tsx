import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
  data: string;
  removePassword: () => void;
}

const PasswordItem = ({ data, removePassword }: Props) => {
 return (
    <Pressable style={styles.container} onLongPress={removePassword}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
 )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  text: {
    color: '#fff'
  }
})

export { PasswordItem }