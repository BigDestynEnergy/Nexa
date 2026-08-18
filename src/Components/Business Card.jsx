import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "../Styles/Business.css";

export default function BusinessCard({ business }) {
    const nav = useNavigate();

    if (!business) return null;

    const handleOpen = () => {
        nav(`/nexa/${business.slug}`);
    };

    return (
        <button className="business-card-home" onClick={handleOpen}>
            <div className="business-card-logo">
                {business.logo_url ? (
                    <img
                        src={business.logo_url}
                        alt={`${business.name} logo`}
                    />
                ) : (
                    <span>

                        {business.name?.charAt(0).toUpperCase()}
                    </span>
                )}
            </div>

            <div className="business-card-home-info">
                <h3>{business.name}</h3>
                <span>{business.category}</span>
                {business.city && (
                    <span className="business-location">
                        <LuMapPin />
                        {business.city}
                    </span>
                )}
            </div>

            <div className="business-card-home-arrow">
                <LuArrowRight />
            </div>
        </button>
    );
}