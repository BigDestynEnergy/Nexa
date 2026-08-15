import "../Styles/Steps.css";
import { LuCheck, LuCircleCheck } from "react-icons/lu";

export default function Steps({currentStep}){
    const steps = [
        "Basics",
        "Branding",
        "Contact",
        "Location",
        "NEXA URL",
        "Preview"
    ]

    return(
        <div className="steps">
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                let status;
                if(stepNumber < currentStep){
                    status = 'completed'
                } else if(stepNumber === currentStep){
                    status === 'active'
                } else{
                    status = 'upcoming';
                }
                return(
                   <div 
                   key={index}
                   className="step">
                   <span className={`icon-number ${status}`}>
                     {
                        status === "completed" ? 
                        <LuCheck/>
                        :
                        <span className="number">{stepNumber}</span>
                    }
                   </span>

                    <span className="name">{step}</span>
                   </div>
                )
            })}
        </div>
    )
}