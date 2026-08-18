import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    LuArrowLeft,
    LuArrowUpRight,
    LuBriefcaseBusiness,
    LuCheck,
    LuClock3,
    LuGlobe,
    LuMail,
    LuMapPin,
    LuMessageCircle,
    LuPhone,
    LuShare2,
    LuSparkles
} from "react-icons/lu";

import { supabase } from "../Z-Index/supabase";
import "../Styles/BusinessPage.css";

export default function BusinessPage() {

    const { id } = useParams();

    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {

        const fetchBusiness = async () => {

            setLoading(true);
            setError(null);

            const { data, error } = await supabase
                .from("businesses")
                .select("*")
                .eq("slug", id)
                .maybeSingle();

            if (error) {
                console.error("Business fetch error:", error);
                setError("Could not load this business.");
                setLoading(false);
                return;
            }

            if (!data) {
                setError("Business not found.");
                setLoading(false);
                return;
            }

            setBusiness(data);
            setLoading(false);
        };

        fetchBusiness();

    }, [id]);


    const handleShare = async () => {

        const url = window.location.href;

        try {

            if (navigator.share) {
                await navigator.share({
                    title: business.name,
                    text: `Check out ${business.name} on NEXA`,
                    url
                });

            } else {
                await navigator.clipboard.writeText(url);

                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }

        } catch (error) {
            console.log("Share cancelled.");
        }
    };


    const formatWebsite = (website) => {

        if (!website) return "";

        return website
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "");
    };


    if (loading) {
        return (
            <main className="business-page">
                <div className="business-state">
                    <div className="state-icon">
                        <LuSparkles />
                    </div>

                    <h2>Loading business</h2>
                    <p>Getting their NEXA page ready...</p>
                </div>
            </main>
        );
    }


    if (error) {
        return (
            <main className="business-page">
                <div className="business-state">

                    <div className="state-icon error">
                        <LuBriefcaseBusiness />
                    </div>

                    <h1>Business not found</h1>

                    <p>{error}</p>

                    <a href="/explore" className="state-button">
                        Explore businesses
                    </a>

                </div>
            </main>
        );
    }


    return (
        <main className="business-page">

            {/* =========================
                COVER
            ========================= */}

            <section className="business-hero">

                {business.cover_url ? (
                    <img
                        src={business.cover_url}
                        alt=""
                        className="business-cover-image"
                    />
                ) : (
                    <div className="business-cover-placeholder">
                        <LuSparkles />
                    </div>
                )}

                <div className="business-hero-overlay"></div>

                <div className="business-hero-top">

                    <a
                        href="/explore"
                        className="business-back"
                    >
                        <LuArrowLeft />
                        <span>Explore</span>
                    </a>

                    <button
                        type="button"
                        className="share-button"
                        onClick={handleShare}
                    >
                        {copied ? (
                            <>
                                <LuCheck />
                                Copied
                            </>
                        ) : (
                            <>
                                <LuShare2 />
                                Share
                            </>
                        )}
                    </button>

                </div>

            </section>


            {/* =========================
                PROFILE HEADER
            ========================= */}

            <section className="business-container">

                <div className="business-profile-header">

                    <div className="business-logo">

                        {business.logo_url ? (
                            <img
                                src={business.logo_url}
                                alt={`${business.name} logo`}
                            />
                        ) : (
                            <span>
                                {business.name
                                    ?.charAt(0)
                                    .toUpperCase()}
                            </span>
                        )}

                    </div>


                    <div className="business-heading">

                        <div className="business-title-row">

                            <div>
                                <div className="business-name-row">

                                    <h1>{business.name}</h1>

                                    <span className="verified-badge">
                                        <LuCheck />
                                    </span>

                                </div>

                                {business.category && (
                                    <span className="business-category-full">
                                        {business.category}
                                    </span>
                                )}

                            </div>

                        </div>


                        {business.city && (
                            <div className="business-location-full">

                                <LuMapPin />

                                <span>
                                    {business.city}
                                    {business.country &&
                                        `, ${business.country}`}
                                </span>

                            </div>
                        )}

                    </div>

                </div>




                <div className="business-actions">

                    {business.phone && (
                        <a
                            href={`tel:${business.phone}`}
                            className="business-action primary"
                        >
                            <LuPhone />
                            <span>Call</span>
                        </a>
                    )}

                    {business.whatsapp && (
                        <a
                            href={`https://wa.me/${business.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="business-action"
                        >
                            <LuMessageCircle />
                            <span>WhatsApp</span>
                        </a>
                    )}

                    {business.email && (
                        <a
                            href={`mailto:${business.email}`}
                            className="business-action"
                        >
                            <LuMail />
                            <span>Email</span>
                        </a>
                    )}

                    {business.website && (
                        <a
                            href={
                                business.website.startsWith("http")
                                    ? business.website
                                    : `https://${business.website}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="business-action"
                        >
                            <LuGlobe />
                            <span>Website</span>
                        </a>
                    )}

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div className="business-content">

                    {/* ABOUT */}

                    {business.description && (
                        <section className="business-section">

                            <div className="section-heading">
                                <span>About</span>
                            </div>

                            <p className="business-description">
                                {business.description}
                            </p>

                        </section>
                    )}


                    {/* BUSINESS DETAILS */}

                    <section className="business-section">

                        <div className="section-heading">
                            <span>Business information</span>
                        </div>


                        <div className="business-details">

                            {business.businessType && (
                                <div className="detail-item">

                                    <div className="detail-icon">
                                        <LuBriefcaseBusiness />
                                    </div>

                                    <div>
                                        <small>Business type</small>
                                        <strong>
                                            {business.businessType}
                                        </strong>
                                    </div>

                                </div>
                            )}


                            {(business.address || business.city) && (
                                <div className="detail-item">

                                    <div className="detail-icon">
                                        <LuMapPin />
                                    </div>

                                    <div>
                                        <small>Location</small>

                                        <strong>
                                            {business.address && (
                                                <>
                                                    {business.address}
                                                    <br />
                                                </>
                                            )}

                                            {business.city}

                                            {business.country &&
                                                `, ${business.country}`}
                                        </strong>
                                    </div>

                                </div>
                            )}

                        </div>

                    </section>


                    {/* CONTACT */}

                    {(business.phone ||
                        business.whatsapp ||
                        business.email ||
                        business.website) && (

                        <section className="business-section">

                            <div className="section-heading">
                                <span>Get in touch</span>
                            </div>

                            <div className="contact-list">

                                {business.phone && (
                                    <a
                                        href={`tel:${business.phone}`}
                                        className="contact-item"
                                    >
                                        <div className="detail-icon">
                                            <LuPhone />
                                        </div>

                                        <div>
                                            <small>Phone</small>
                                            <strong>
                                                {business.phone}
                                            </strong>
                                        </div>

                                        <LuArrowUpRight />
                                    </a>
                                )}


                                {business.email && (
                                    <a
                                        href={`mailto:${business.email}`}
                                        className="contact-item"
                                    >
                                        <div className="detail-icon">
                                            <LuMail />
                                        </div>

                                        <div>
                                            <small>Email</small>
                                            <strong>
                                                {business.email}
                                            </strong>
                                        </div>

                                        <LuArrowUpRight />
                                    </a>
                                )}


                                {business.website && (
                                    <a
                                        href={
                                            business.website.startsWith("http")
                                                ? business.website
                                                : `https://${business.website}`
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-item"
                                    >
                                        <div className="detail-icon">
                                            <LuGlobe />
                                        </div>

                                        <div>
                                            <small>Website</small>
                                            <strong>
                                                {formatWebsite(
                                                    business.website
                                                )}
                                            </strong>
                                        </div>

                                        <LuArrowUpRight />
                                    </a>
                                )}

                            </div>

                        </section>
                    )}

                </div>


                {/* =========================
                    NEXA FOOTER
                ========================= */}

                <footer className="business-footer">

                    <div className="nexa-mark">
                        <LuSparkles />
                        <span>NEXA</span>
                    </div>

                    <span>
                        This business is on NEXA
                    </span>

                </footer>

            </section>

        </main>
    );
}