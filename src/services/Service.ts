import axios, { type AxiosRequestConfig } from "axios";

// URL da API vem do .env (VITE_API_URL); o fallback aponta para o deploy no Render
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://blog-pessoal-paet.onrender.com'
})

type Setter<T> = (dados: T) => void

export const cadastrarUsuario = async <T>(url: string, dados: object, setDados: Setter<T>) => {
    const resposta = await api.post<T>(url, dados)
    setDados(resposta.data)
}

export const login = async <T>(url: string, dados: object, setDados: Setter<T>) => {
    const resposta = await api.post<T>(url, dados)
    setDados(resposta.data)
}

export const buscar = async <T>(url: string, setDados: Setter<T>, header: AxiosRequestConfig) => {
    const resposta = await api.get<T>(url, header)
    setDados(resposta.data)
}

export const cadastrar = async <T>(url: string, dados: object, setDados: Setter<T>, header: AxiosRequestConfig) => {
    const resposta = await api.post<T>(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async <T>(url: string, dados: object, setDados: Setter<T>, header: AxiosRequestConfig) => {
    const resposta = await api.put<T>(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: AxiosRequestConfig) => {
    await api.delete(url, header)
}
