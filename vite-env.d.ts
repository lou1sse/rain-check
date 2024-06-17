/// <reference types="vite/env" />

interface ImportMeta {
  env: Readonly<{
    VITE_API_BASE_URL: string,
    VITE_API_KEY: string
  }>;
}
