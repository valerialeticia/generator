import { useState } from 'react'

const useHome = () => {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0123456789'

    const passwordArray = Array.from({ length: size }, () => {
      const randomIndex = Math.floor(Math.random() * charset.length)
      return charset.charAt(randomIndex);
    })

    const password = passwordArray.join('')

    setPasswordValue(password)
    setModalVisible(true)
  };

  return {
    passwordValue,
    size,
    modalVisible,
    setSize,
    setModalVisible,
    generatePassword
  }
}

export { useHome}