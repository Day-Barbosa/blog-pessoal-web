/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base da API do Blog Pessoal (ex.: http://localhost:8080) */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
