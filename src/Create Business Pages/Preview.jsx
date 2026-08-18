import { useEffect, useState } from "react";
import {
    LuPhone,
    LuMail,
    LuGlobe,
    LuMapPin,
    LuMessageCircle,
    LuExternalLink,
    LuImagePlus,
    LuStore,
    LuArrowUpRight
} from "react-icons/lu";

import "../Styles/Create.css";
import "../Create Styles/Preview.css";

export default function PreviewStep({ form }) {

    const [logoPreview, setLogoPreview] = useState(null);

    /*
        Create temporary URL for the uploaded logo
    */
    useEffect(() => {

        if (!form.logo) {
            setLogoPreview(null);
            return;
        }

        const url = URL.createObjectURL(form.logo);

        setLogoPreview(url);

        return () => {
            URL.revokeObjectURL(url);
        };

    }, [form.logo]);


    const hasContact =
        form.phone ||
        form.whatsapp ||
        form.email ||
        form.website;

    const hasLocation =
        form.address ||
        form.city ||
        form.country;


    return (
        <main className="preview step">

            {/* =========================
                HEADER
            ========================= */}

            <div className="preview-heading">

                <div>
                    <span className="preview-label">
                        FINAL CHECK
                    </span>

                    <h1>Preview your page</h1>

                    <p>
                        This is how your business information will appear
                        on your NEXA page.
                    </p>
                </div>

            </div>


            {/* =========================
                PAGE PREVIEW
            ========================= */}

            <section className="business-preview">

                {/* COVER */}
                <div className="preview-cover">

                    <div className="preview-cover-pattern" />

                </div>


                {/* BUSINESS HEADER */}
                <div className="business-header">

                    <div className="business-logo">

                        {logoPreview ? (
                            <img
                                src={logoPreview}
                                alt={`${form.name} logo`}
                            />
                        ) : (
                            <div className="logo-placeholder">
                                <LuImagePlus />
                            </div>
                        )}

                    </div>


                    <div className="business-main-info">

                        <div className="business-title">

                            <h2>
                                {form.name || "Your Business Name"}
                            </h2>

                            {form.category && (
                                <span className="category-badge">
                                    {form.category}
                                </span>
                            )}

                        </div>


                        <div className="business-meta">

                            {form.businessType && (
                                <span>
                                    <LuStore />
                                    {form.businessType}
                                </span>
                            )}

                            {form.city && (
                                <span>
                                    <LuMapPin />
                                    {form.city}
                                </span>
                            )}

                        </div>

                    </div>

                </div>


                {/* CONTENT */}
                <div className="preview-body">

                    {/* DESCRIPTION */}

                    <section className="preview-section">

                        <div className="section-heading">
                            <h3>About</h3>
                        </div>

                        <p className="description">

                            {form.description ||
                                "No business description added yet."
                            }

                        </p>

                    </section>


                    {/* CONTACT */}

                    {hasContact && (
                        <section className="preview-section">

                            <div className="section-heading">
                                <h3>Contact</h3>
                            </div>


                            <div className="contact-grid">

                                {form.phone && (
                                    <div className="contact-item">

                                        <div className="contact-icon">
                                            <LuPhone />
                                        </div>

                                        <div>
                                            <span>Phone</span>
                                            <strong>
                                                {form.phone}
                                            </strong>
                                        </div>

                                    </div>
                                )}


                                {form.whatsapp && (
                                    <div className="contact-item">

                                        <div className="contact-icon">
                                            <LuMessageCircle />
                                        </div>

                                        <div>
                                            <span>WhatsApp</span>
                                            <strong>
                                                {form.whatsapp}
                                            </strong>
                                        </div>

                                    </div>
                                )}


                                {form.email && (
                                    <div className="contact-item">

                                        <div className="contact-icon">
                                            <LuMail />
                                        </div>

                                        <div>
                                            <span>Email</span>
                                            <strong>
                                                {form.email}
                                            </strong>
                                        </div>

                                    </div>
                                )}


                                {form.website && (
                                    <div className="contact-item">

                                        <div className="contact-icon">
                                            <LuGlobe />
                                        </div>

                                        <div>
                                            <span>Website</span>
                                            <strong>
                                                {form.website}
                                            </strong>
                                        </div>

                                    </div>
                                )}

                            </div>

                        </section>
                    )}


                    {/* LOCATION */}

                    {hasLocation && (
                        <section className="preview-section">

                            <div className="section-heading">
                                <h3>Location</h3>
                            </div>

                            <div className="location-card">

                                <div className="location-icon">
                                    <LuMapPin />
                                </div>

                                <div>

                                    <strong>
                                        {form.address ||
                                            "Business location"
                                        }
                                    </strong>

                                    <span>
                                        {[form.city, form.country]
                                            .filter(Boolean)
                                            .join(", ")
                                        }
                                    </span>

                                </div>

                                {form.maps && (
                                    <a
                                        href={form.maps}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <LuExternalLink />
                                    </a>
                                )}

                            </div>

                        </section>
                    )}


                    {/* NEXA URL */}

                    <section className="preview-section">

                        <div className="section-heading">
                            <h3>Your NEXA URL</h3>
                        </div>

                        <div className="nexa-url-preview">

                            <div>

                                <span>
                                    NEXA PAGE
                                </span>

                                <strong>
                                    nexa.com/
                                    <b>
                                        {form.url ||
                                            form.slug ||
                                            "yourbusiness"
                                        }
                                    </b>
                                </strong>

                            </div>

                            <LuArrowUpRight />

                        </div>

                    </section>

                </div>


                {/* FOOTER */}

                <div className="preview-footer">

                    <span>
                        Your business will be published on NEXA
                    </span>

                </div>

            </section>

        </main>
    );
}