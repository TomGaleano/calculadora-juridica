import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Cuota from './components/calculadoraCuota'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="m-4 p-4">
      <ChakraProvider>
        <Cuota />
      </ChakraProvider>
    </div>
  )
}

export default App