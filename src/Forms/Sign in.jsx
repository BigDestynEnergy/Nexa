import { useState } from "react";
import "./Forms.css";
import { useLoading } from "../Contexts/Loading Context";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../Contexts/Popup context";
import { supabase } from "../Z-Index/supabase";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function Signin(){
    const [form,setForm] = useState({
        email:"", password:""
    })
    const [vp, setVp] = useState(false);



    const {startLoading } = useLoading();
    const {notify} = usePopup();
    const navigate = useNavigate();

    const collectInputs = (e) => {
        const {name, value} = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!form.email){
            return notify(1, "Please enter your email");
        }

        
         if(!form.email.includes("@")){
            return notify(1, "Please enter a valid email");
        }

         if(!form.password){
            return notify(1, "Please enter your password");
        }

         if(form.password.length < 8){
            return notify(1, "Please enter a valid password");
        }

        try{
            startLoading(true);

            const {data, error} = await supabase.auth.signInWithPassword({
                email: form.email.trim(),
                password: form.password
            });

            if(error){
                console.log(`Sign in error`, error.message);
                notify(1, `Invalid email or password.`);
                return;
            }

            if(!data.user){
                notify(1, `Couldnt sign in. Please try again`);
                return;
            }

            notify(2, `Signed in successfully`);
              navigate("/home");
        } catch(error){
             console.error("Unexpected sign in error", error);
            notify(1, "Something went wrong. Please try again." );
           
        } finally{
            startLoading(false);
        }

    }

    return(
        <section className="forms">
            <div className="topbar">
                <h2 onClick={()=>navigate("/")}>Nexa</h2>
            </div>
            <form onSubmit={submitForm}>
                <h1>Sign in</h1>
            
                <div className="input-group">
                    <div className="top">
                        <label>Email</label>
                    </div>

                    <input type="email" value={form.email}
                    name="email"
                    onChange={collectInputs} placeholder="e.g johnbanda@gmail.com" />
                </div>

                <div className="input-group">
                    <div className="top">
                        <label>Password</label>
                        <span>Forgot password?</span>
                    </div>
                   <div className="eye">
                     <input type={vp ? 'text' : 'password'} value={form.password}
                    name="password" onChange={collectInputs} placeholder={vp ? 'XXXX-XXXX' : '****-****'} />
                {vp ? <LuEye onClick={()=>setVp(false)}/> : <LuEyeClosed onClick={()=>setVp(true)}/>}
                   </div>
                </div>

                <button type="submit">Sign in</button>
                <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Sign up</span></p>
            </form>
            
        </section>
    )
}