import { toast } from 'react-toastify'

export function ToastAlerta(mensagem: string, tipo: string) {
  if (tipo === 'sucesso') {
    toast.success(mensagem, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'colored',
    })
  } else if (tipo === 'erro') {
    toast.error(mensagem, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'colored',
    })
  } else {
    toast.info(mensagem, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'colored',
    })
  }
}