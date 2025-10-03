import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import Banner from './components/Banner/Banner'
import Especially from './components/Especially/Especially'
import Categories from './components/Categories/Categories'

import ProductFeatures from './components/ProductFeatures/ProductFeatures'

const App = () => {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   
            <Banner></Banner>
            <Especially></Especially>
            <Categories></Categories>
            <ProductFeatures></ProductFeatures>
      
      
    </ThemeProvider>
  
  )
}

export default App