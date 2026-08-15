
export default function ProgressBar({currentStep, totalSteps}){
    
    const progress = (currentStep / totalSteps) * 100;

    return(
        <div className="progress">
            <div className="tube" style={{width: `${progress}%`}}></div>
        </div>
    )
}