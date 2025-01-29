import { Button, Box } from '@chakra-ui/react'
import HomePage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Box minH={"100vh"}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
    </>
  )
}

export default App
