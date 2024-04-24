/// <reference types="vite/client" />
declare module 'vite-plugin-eslint'
// src/shims-modules.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
}

// Declare all modules prefixed with '@/' which covers all your src directory
declare module '@/store/*' {
  export * from '@/store/*' // This line assumes you are exporting everything from each store module
}
