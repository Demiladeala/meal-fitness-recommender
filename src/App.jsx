import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"

function App() {

  return (
  <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
  </main>
  )
}

export default App