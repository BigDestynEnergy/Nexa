import "../App Styles/Loading.css";

export default function Loading({isOpen}){
    if(!isOpen) return null;
    return(
        <div className="loading-overlay">
            <div className="card">
                <div className="line"></div>
                <div className="spinner"></div>
                <span>Please wait...</span>
            </div>
        </div>
    )
}