interface ImportMataEnv {
  readonly VITE_PROJECT_URL: string;
  readonly VITE_ANON_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMataEnv;
}
