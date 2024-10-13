import { Dashboard } from "./components/dashboard"
import { Header } from "./components/header"

const App = () => {
  return (
    <div className="h-min-screen w-screen bg-black flex flex-col">
      <Header />
      <Dashboard/>
    </div>
  )
}

export default App
