import { useEffect, useRef, useState } from "react";
import "../Styles/Create.css";
import { LuArrowLeft, LuArrowRight, LuSparkles } from "react-icons/lu";
import Steps from "./Steps";
import BasicsStep from "./Basics";
import BrandingStep from "./Branding";
import ContactStep from "./Contact";
import LocationStep from "./Location";
import {supabase} from "../Z-Index/supabase"
import URLstep from "./URL";
import PreviewStep from "./Preview";
import {usePopup} from "../Contexts/Popup context"
import { validateStep } from "../Utils/Validation";
import ProgressBar from "./Progress Bar";
import { useNavigate } from "react-router-dom";

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
    maps:"",
    country: "Malawi",
    slug: "",
    brandColor: ""
});

const clearForm = () => {
    setFormData({
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
    maps:"",
    country: "Malawi",
    slug: "",
    brandColor: ""
    })
}

const nextRef = useRef();
const backRef = useRef();

const navigate =useNavigate();

const [currentStep, setCurrentStep] = useState(1);

const [errors, setErrors] = useState({});

const [creating, setCreating] = useState(false);

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
    case 2:
        return "Add your look. You can always change.";
    case 3:
        return "How customers get in touch from NEXA Page.";
    case 4:
        return "You're online only, so location optional, add it if you want it shown.";
    case 5:
        return "This is the link you share with customers. Pick something short and memorable.";
        
    case 6:
        return "Check everything looks right, you can edit any of this later";
    
  }
}    


// Functions 
   const goToNextStep = () => {
    const validationErrors = validateStep(currentStep, formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        return;
    }

    setCurrentStep(prev => Math.min(prev + 1, 6));
};

const goBackward = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
};

    useEffect(()=>{
       
        const onKeyDown = (e) => {
        if(e.key === "ArrowLeft"){
            if(currentStep > 1){
                backRef.current?.click()
            }
        }

        if(e.key === "ArrowRight"){
           if(currentStep < 6){
            nextRef.current?.click();
           }
        }}

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
        
    }, [currentStep])


    const createBusiness = async () => {

    if (creating) return;

    try {

        setCreating(true);

        // Get currently authenticated user
        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser();


        if (userError) {
            console.error("User error:", userError);
            notify(1, "Could not verify your account.");
            return;
        }


        if (!user) {
            notify(1, "You must be signed in to create a business.");
            return;
        }


        let logoUrl = null;
        let coverUrl = null;


        /*
        =========================
        LOGO UPLOAD
        =========================
        */

        if (formData.logo) {

            const file = formData.logo;

            const extension =
                file.name.split(".").pop();

            const fileName =
                `${user.id}/logo-${crypto.randomUUID()}.${extension}`;

                console.log("Authenticated user ID:", user.id);
console.log("Upload path:", fileName);
            const { error: logoError } =
                await supabase.storage
                    .from("business-assets")
                    .upload(fileName, file, {
                        cacheControl: "3600",
                        upsert: false
                    });


            if (logoError) {
                console.error("Logo upload error:", logoError);

                notify(
                    1,
                    "Your logo could not be uploaded."
                );

                return;
            }


            const {
                data: logoData
            } = supabase.storage
                .from("business-assets")
                .getPublicUrl(fileName);


            logoUrl = logoData.publicUrl;
        }

        if (formData.cover) {

            const file = formData.cover;

            const extension =
                file.name.split(".").pop();

            const fileName =
                `${user.id}/cover-${crypto.randomUUID()}.${extension}`;


            const { error: coverError } =
                await supabase.storage
                    .from("business-assets")
                    .upload(fileName, file, {
                        cacheControl: "3600",
                        upsert: false
                    });


            if (coverError) {
                console.error("Cover upload error:", coverError);

                notify(
                    1,
                    "Your cover image could not be uploaded."
                );

                return;
            }


            const {
                data: coverData
            } = supabase.storage
                .from("business-assets")
                .getPublicUrl(fileName);


            coverUrl = coverData.publicUrl;
        }


      

        const { data, error } = await supabase
            .from("businesses")
            .insert({
    user_id: user.id,
    name: formData.name,
    category: formData.category,
    description: formData.description,
    business_type: formData.businessType,

    brand_color: formData.brandColor,

    phone: formData.phone,
    whatsapp: formData.whatsapp,
    email: formData.email,
    website: formData.website,

    address: formData.address,
    city: formData.city,
    country: formData.country,

    slug: formData.slug
})
            .select()
            .single();


        if (error) {

           console.error("Business creation error:", {
    message: error.message,
});

            notify(
                1,
                "Could not create your business."
            );

            return;
        }


        console.log(
            "Business created:",
        );


        notify(
            2,
            "Your business has been created!"
        );
        clearForm();
        navigate(`/home`)

    } catch (error) {

        console.error(
            "Unexpected creation error:",
            error
        );

        notify(
            1,
            "Something went wrong. Please try again."
        );

    } finally {

        setCreating(false);

    }
};
    

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
                    (<button
    className="create-business-btn"
    onClick={createBusiness}
    disabled={creating}
>
    {creating
        ? "Creating..."
        : "Create Business"
    }

    {!creating && <LuArrowRight />}
</button>)
                }
                </div>
            </div>
        </main>
    )
}