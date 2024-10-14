import { Dashboard } from "./components/dashboard"
import { Header } from "./components/header"

const App = () => {
  return (
    <div className="h-min-screen w-min-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <Dashboard/>
    </div>
  )
}

export default App
