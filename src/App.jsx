import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom"
import { ExercisesContextProvider } from './contexts/ExercisesContext'
function App() {

  return (
    <>
    <ExercisesContextProvider>
      <Header/>
      <Outlet/>
    </ExercisesContextProvider>
    </>
  )
}

export default App
