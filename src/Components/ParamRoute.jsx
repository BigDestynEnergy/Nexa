
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../Z-Index/supabase";
import "../Styles/BusinessPage.css";

export default function BusinessPage() {

    const { id } = useParams();

    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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


    if (loading) {
        return (
            <main className="business-page">
                <div className="business-loading">
                    Loading business...
                </div>
            </main>
        );
    }


    if (error) {
        return (
            <main className="business-page">
                <div className="business-error">
                    <h1>Business not found</h1>
                    <p>{error}</p>
                </div>
            </main>
        );
    }


    return (
        <main className="business-page">

            <header className="business-cover">

                {business.cover_url && (
                    <img
                        src={business.cover_url}
                        alt=""
                    />
                )}

            </header>


            <section className="business-profile">

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


                <div className="business-info">

                    <h1>{business.name}</h1>

                    {business.category && (
                        <span className="business-category">
                            {business.category}
                        </span>
                    )}

                    {business.description && (
                        <p className="business-description">
                            {business.description}
                        </p>
                    )}

                </div>


                <div className="business-contact">

                    {business.phone && (
                        <a href={`tel:${business.phone}`}>
                            Call
                        </a>
                    )}

                    {business.whatsapp && (
                        <a
                            href={`https://wa.me/${business.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    )}

                    {business.email && (
                        <a href={`mailto:${business.email}`}>
                            Email
                        </a>
                    )}

                    {business.website && (
                        <a
                            href={business.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    )}

                </div>

            </section>

        </main>
    );
}