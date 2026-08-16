import { useEffect, useRef, useState } from "react";
import "../Styles/Create.css";
import { LuArrowLeft, LuArrowRight, LuSparkles } from "react-icons/lu";
import Steps from "./Steps";
import BasicsStep from "./Basics";
import BrandingStep from "./Branding";
import ContactStep from "./Contact";
import LocationStep from "./Location";
import URLstep from "./URL";
import PreviewStep from "./Preview";
import {usePopup} from "../Contexts/Popup context"
import { validateStep } from "../Utils/Validation";
import ProgressBar from "./Progress Bar";

export default function CreateBusiness(){

    const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    businessType: "",
    logo: null,
    cover: null,
    phone: "",
    whatsapp: "",
    email: "",
    website: "",
    address: "",
    city: "", 
    country: "Malawi",
    url: "",
    slug: ""
});

const nextRef = useRef();
const backRef = useRef();

const [currentStep, setCurrentStep] = useState(1);

const [errors, setErrors] = useState({});

const {notify} = usePopup();



const updateField = (field, value) => {
    setFormData((prev) => ({
        ...prev,
        [field]:value
    }))
}

const bioText = ()=>{
  switch(currentStep){
    case 1:
        return "Tell us about your business.";
        break;
    case 2:
        return "Add your look. You can always change.";
        break;
    case 3:
        return "How customers get in touch from NEXA Page.";
        break;
    case 4:
        return "You're online only, so location optional, add it if you want it shown.";
        break;
    case 5:
        return "This is the link you share with customers. Pick something short and memorable.";
        break;
    case 6:
        return "Check everything looks right, you can edit any of this later";
        break;
  }
}    


// Functions 
    const goToNextStep = () => {
    
    const validationErrors = validateStep(currentStep, formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0){
        return;
    }
        setCurrentStep(prev => prev + 1);

    }

    const goBackward = ()=>{
        setCurrentStep(prev => prev - 1)
    }

    useEffect(()=>{
       
        const onKeyDown = (e) => {
        if(e.key === "ArrowLeft"){
            currentStep === 1 ?
            null :
            backRef.current?.click()
    
        }

        if(e.key === "ArrowRight"){
            nextRef.current?.click();
            return;
        }}

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onkeydown);
        }
        
    }, [])
    

    return(
        <main className="create">
            <div className="brand">
                <LuSparkles/>
                <span>NEXA </span>
                - <span>Create your business</span>
            </div>

            <div className="create-business-container">
                <div className="topbar-container">
                    <div className="top-layer">
                        <span className="stepsof">{`Step ${currentStep} of 6`}</span>
                        <span className="bio">{bioText()}</span>
                    </div>

                   <ProgressBar 
                   currentStep={currentStep}
                   totalSteps={6}
                   />
                    <Steps currentStep={currentStep}/>
                </div>

                {currentStep === 1 && (<BasicsStep form={formData} updateField={updateField} errors={errors}/>)}
                {currentStep === 2 && (<BrandingStep form={formData} updateField={updateField} errors={errors}/>)}
                {currentStep === 3 && (<ContactStep form={formData} updateField={updateField} errors={errors}/>)}
                {currentStep === 4 && (<LocationStep form={formData} updateField={updateField} errors={errors}/>)}
                {currentStep === 5 && (<URLstep form={formData} updateField={updateField} errors={errors}/>)}
                {currentStep === 6 && (<PreviewStep form={formData} updateField={updateField} errors={errors}/>)}

                <div className="wizard-navigation">
                    {currentStep > 1 && (<button 
                    onClick={goBackward}
                    ref={backRef}
                    className="navigate-back">
                        <LuArrowLeft/>
                        Back</button>)}

                    {currentStep < 6 ? 
                    (<button 
                        className="navigate-forward"
                    onClick={goToNextStep}
                    ref={nextRef}
                    >Continue <LuArrowRight/></button>)
                    :
                    (<button className="create-business-btn">Create Business <LuArrowRight/></button>)
                }
                </div>
            </div>
        </main>
    )
}