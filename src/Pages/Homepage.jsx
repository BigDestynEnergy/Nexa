import { useNavigate } from "react-router-dom";
import "../Styles/Page.css";
import { supabase } from "../Z-Index/supabase";
import { LuArrowRight, LuPlus, LuSparkles } from "react-icons/lu";
import { useEffect, useState } from "react";
import BusinessCard from "../Components/Business Card";

export default function Homepage(){
    const nav = useNavigate();

    const [businessData, setBusinessData] = useState(null);

    const fetchBusiness = async () => {
    const {
        data: { user },
        error: userError
    } = await supabase.auth.getUser();

    if (userError || !user) {
        console.error("Could not get user:", userError);
        return;
    }

    const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("user_id", user.id)

    if (error) {
        console.error("Business fetch error:", error);
        return;
    }

    setBusinessData(data);
};

    useEffect(()=>{
    fetchBusiness();
}, [])

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
    <div className="business-list-topbar">
        <h4>Your Businesses</h4>
        <label>Manage Businesses</label>
    </div>

   <div className="business-grid">
     {businessData ? (
        businessData.map((business) => (<BusinessCard key={business.id} business={business} />))
    ) : (
        <span>
            Nothing here yet. Your business profile will show up here.
        </span>
    )}
   </div>
</div>
            </div>

            
        </section>
    )
}