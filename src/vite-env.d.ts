/// <reference types="vite/client" />

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    accent: string
  }
}
