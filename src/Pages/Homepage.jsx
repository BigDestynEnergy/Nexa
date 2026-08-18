import { useNavigate } from "react-router-dom";
import "../Styles/Page.css";
import { supabase } from "../Z-Index/supabase";
import { LuArrowRight, LuPlus, LuSparkles } from "react-icons/lu";
import { useEffect, useState } from "react";
import BusinessCard from "../Components/Business Card";
import {usePopup} from "../Contexts/Popup context"
export default function Homepage(){
    const nav = useNavigate();

    const {notify} = usePopup();

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

const [deletingId, setDeletingId] = useState(null);

const deleteBusiness = async (businessId) => {

    const confirmed = window.confirm(
        "Are you sure you want to delete this business? This action cannot be undone."
    );

    if (!confirmed) return;

    setDeletingId(businessId);

    const { error } = await supabase
        .from("businesses")
        .delete()
        .eq("id", businessId);
        notify(2, `Business deleted.`)

    if (error) {
        console.error("Business deletion error:", error);
        setDeletingId(null);
        return;
    }

    // Remove it immediately from the UI
    setBusinessData((prev) =>
        prev.filter((business) => business.id !== businessId)
    );

    setDeletingId(null);
};

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
        businessData.map((business) => (
        <BusinessCard
          key={business.id}
        business={business}
        onDelete={deleteBusiness}
        deleting={deletingId === business.id}/>))
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