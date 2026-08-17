import { BrowserRouter } from "react-router-dom"
import ApplicationRouter from "../Routes/Application Routes"
import { LoadingProvider } from "../Contexts/Loading Context"
import { PopupProvider } from "../Contexts/Popup context"
import { AuthProvider } from "../Contexts/Auth"

export default function EntryPoint(){
  return(
    <div className="app">
      <PopupProvider>
      <LoadingProvider>
        <AuthProvider>
      
      <BrowserRouter>
        <ApplicationRouter/>
      </BrowserRouter>
 
      </AuthProvider>
      </LoadingProvider>
      </PopupProvider>
    </div>
  )
}