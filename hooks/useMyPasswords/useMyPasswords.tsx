import { useCallback, useState } from "react";
import { useStorage } from "../useStorage";
import { useFocusEffect } from "expo-router";

const useMyPasswords = () => {
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

  return {
    listPasswords,
    handleRemovePassword
  }
}

export { useMyPasswords }