import { useState } from "react";
import "./Forms.css";
import { useLoading } from "../Contexts/Loading Context";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../Contexts/Popup context";

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

    const submitForm = (e) => {
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
                    <input type={vp ? 'text' : 'password'} value={form.password}
                    name="password" onChange={collectInputs} placeholder={vp ? 'XXXX-XXXX' : '****-****'} />
                </div>

                <button type="submit">Sign in</button>
                <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Sign up</span></p>
            </form>
            
        </section>
    )
}