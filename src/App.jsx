import { BrowserRouter } from "react-router-dom"
import "./App.css"
import ApplicationRouter from "./Routes/Application Routes"
import { LoadingProvider } from "./Contexts/Loading Context"
import { PopupProvider } from "./Contexts/Popup context"

export default function App(){
  return(
    <div className="app">
      <PopupProvider>
      <LoadingProvider>
      <BrowserRouter>
        <ApplicationRouter/>
      </BrowserRouter>
      </LoadingProvider>
      </PopupProvider>
    </div>
  )
}