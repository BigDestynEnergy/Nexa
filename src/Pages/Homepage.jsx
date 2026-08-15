import { useNavigate } from "react-router-dom";
import "../Styles/Page.css";
import { LuArrowRight, LuPlus, LuSparkles } from "react-icons/lu";

export default function Homepage(){
    const nav = useNavigate();

    return(
        <section className="home page">
           

            <div className="home-card">
                 <div className="brand">
                <LuSparkles/>
                <span>Nexa</span>
            </div>
                <h1>One Link for your whole business.</h1>
                <p>Build a polished business page with your branding, contact, location and share it everywhere.</p>
                
                <button 
                className="create-button"
                onClick={()=>nav("/create")}>
                    <LuPlus/>
                    <span>Create your business</span>
                    <LuArrowRight/>
                </button>

                <div className="business-list">
                <h4>YOUR BUSINESSES</h4>
                <span>Nothing here yet. Your business profiles will show up here</span>
            </div>
            </div>

            
        </section>
    )
}