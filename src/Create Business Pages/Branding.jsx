import { LuImage, LuImagePlus } from "react-icons/lu";
import "../Styles/Create.css";
import "../Create Styles/Branding.css"
export default function BrandingStep(){
    return(
        <main className="branding step">
            <h1>Branding</h1>

            <section className="rl">
                <div className="left">
                    <h3>Logo <span>(optional)</span></h3>
                    <div className="upload">
                        <LuImagePlus/>
                        <p>PNG, JPG or WebP - max 5MB</p>
                    </div>
                </div>

                <div className="right">
                    <div className="uplaoded-image">
                        
                    </div>
                </div>
            </section>
        </main>
    )
}