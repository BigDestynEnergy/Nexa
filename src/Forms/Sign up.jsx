import { useState } from "react";
import "./Forms.css";
import { useLoading } from "../Contexts/Loading Context";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../Contexts/Popup context";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [vp, setVp] = useState(false);
    const [errorState, setErrorState] = useState([]);

    const {notify} = usePopup();

    const { startLoading } = useLoading();
    const navigate = useNavigate();

    const collectInputs = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        
        if (name === "password") {
            validateFields(value);
        }
    };

    const validateFields = (value) => {
        const errors = [];

        if (!/[A-Z]/.test(value)) {
            errors.push("Add an uppercase letter");
        }

        if (!/[a-z]/.test(value)) {
            errors.push("Add a lowercase letter");
        }

        if (!/[0-9]/.test(value)) {
            errors.push("Add one number");
        }

        if (!/[^A-Za-z0-9]/.test(value)) {
            errors.push("Add a special character");
        }

        if (value.length < 8) {
            errors.push("Add at least 8 characters");
        }

        setErrorState(errors);
        return errors.length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();

        const passwordValid = validateFields(form.password);

        if (!form.name.trim()) {
            return notify(1, "Please enter your name");
        }

        if (!form.email.trim()) {
            return notify(1, "Please enter your email");
        }

        if (!form.password) {
            return notify(1, "Please create a password");
        }

        if(!passwordValid){
            return notify(1, "Please create a valid password")
        }

        
       
        startLoading(true)
        setTimeout(() => {
             notify(2, "Successfully created your account")
             startLoading(false);
             navigate("/home");
             setForm({
                email:"", name:"", password:""
             })
        }, 3000);

        
    };

    return (
        <section className="forms">
        
            <div className="topbar">
                <h2 onClick={() => navigate("/")}>Nexa</h2>
            </div>

            <form onSubmit={submitForm}>
                <h1>Sign up</h1>
                <span>Lets get you started</span>

                <div className="input-group">
                    <div className="top">
                        <label>Name</label>
                    </div>

                    <input
                        type="text"
                        value={form.name}
                        name="name"
                        onChange={collectInputs}
                        placeholder="e.g John Banda"
                    />
                </div>

                <div className="input-group">
                    <div className="top">
                        <label>Email</label>
                    </div>

                    <input
                        type="email"
                        value={form.email}
                        name="email"
                        onChange={collectInputs}
                        placeholder="e.g johnbanda@gmail.com"
                    />
                </div>

                <div className="input-group">
                    <div className="top">
                        <label>Password</label>
                    </div>

                    {errorState.length > 0 && (
                        <div className="errors">
                            {errorState.map((err, index) => (
                                <li key={index}>{err}</li>
                            ))}
                        </div>
                    )}

                    <input
                        type={vp ? "text" : "password"}
                        value={form.password}
                        name="password"
                        onChange={collectInputs}
                        placeholder={vp ? "XXXX-XXXX" : "****-****"}
                    />
                </div>

                <button type="submit">Create account</button>

                <p>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/signin")}>
                        Sign in
                    </span>
                </p>
            </form>
        </section>
    );
}