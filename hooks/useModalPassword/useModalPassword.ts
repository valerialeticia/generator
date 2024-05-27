import { useStorage } from '../useStorage';
import * as Clipboard from 'expo-clipboard';

type Props = {
  password: string;
  handleClose: () => void;
}

const useModalPassword = ({ password, handleClose }: Props) => {
  const { saveItem } = useStorage();

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password)

    await saveItem('@pass', password)

    alert('Senha salva  com sucesso!')

    handleClose()
  }

  return {  
    handleCopyPassword
  }
}

export { useModalPassword }