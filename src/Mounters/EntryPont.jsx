import { BrowserRouter } from "react-router-dom"
import ApplicationRouter from "../Routes/Application Routes"
import { LoadingProvider } from "../Contexts/Loading Context"
import { PopupProvider } from "../Contexts/Popup context"
import { SignedInProvider } from "../Z-Index/SignedIn"

export default function EntryPoint(){
  return(
    <div className="app">
      <PopupProvider>
      <LoadingProvider>
        <SignedInProvider>
      <BrowserRouter>
        <ApplicationRouter/>
      </BrowserRouter>
      </SignedInProvider>
      </LoadingProvider>
      </PopupProvider>
    </div>
  )
}