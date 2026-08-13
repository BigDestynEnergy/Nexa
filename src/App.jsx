import { BrowserRouter } from "react-router-dom"
import "./App.css"
import ApplicationRouter from "./Paths/Application Routes"

export default function App(){
  return(
    <div className="app">
      <BrowserRouter>
        <ApplicationRouter/>
      </BrowserRouter>
    </div>
  )
}