import {
    LuRocket,
    LuMapPin,
    LuArrowUpRight,
    LuUsers,
    LuChartBar,
    LuImage,
    LuShare2,
    LuMousePointerClick,
    LuGlobe
} from "react-icons/lu";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTiktok
} from "react-icons/fa";

import "../App Styles/Landing Page.css";


const businesses = [
    {
        id: 1,
        name: "Mwezi Coffee",
        category: "Coffee & Café",
        location: "Blantyre, Malawi",
        description:
            "A local coffee brand focused on quality coffee, community and creating a warm space for people to connect.",
        image:
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
        slug: "mwezi-coffee",
        color: "#8B5E3C"
    },
    {
        id: 2,
        name: "Creative Roots",
        category: "Creative Collective",
        location: "Lilongwe, Malawi",
        description:
            "A collective of young creatives working together across design, photography, media and storytelling.",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
        slug: "creative-roots",
        color: "#6C63FF"
    },
    {
        id: 3,
        name: "Green Basket",
        category: "Organic Produce",
        location: "Zomba, Malawi",
        description:
            "Fresh locally grown produce delivered directly from small farmers to families and communities.",
        image:
            "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
        slug: "green-basket",
        color: "#4D8B55"
    },
    {
        id: 4,
        name: "Kaya Fitness",
        category: "Fitness & Wellness",
        location: "Blantyre, Malawi",
        description:
            "A community-driven fitness space helping people build healthier habits through movement and accountability.",
        image:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
        slug: "kaya-fitness",
        color: "#D65A31"
    },
    {
        id: 5,
        name: "Malo Crafts",
        category: "Handmade & Crafts",
        location: "Mzuzu, Malawi",
        description:
            "Handcrafted products made by local artists while creating sustainable opportunities for talented makers.",
        image:
            "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
        slug: "malo-crafts",
        color: "#B07A45"
    },
    {
        id: 6,
        name: "Ubuntu Youth Hub",
        category: "Community",
        location: "Lilongwe, Malawi",
        description:
            "A youth community creating opportunities through education, collaboration, mentorship and technology.",
        image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
        slug: "ubuntu-youth-hub",
        color: "#3B82F6"
    }
];


const howItWorks = [
    {
        number: "01",
        icon: <LuGlobe />,
        title: "Create your Nexa profile",
        description:
            "Choose a unique profile name and add your business, brand, group or community information."
    },
    {
        number: "02",
        icon: <LuImage />,
        title: "Tell people about yourself",
        description:
            "Add your location, services, mission, bio, photos and important links so people can understand what you do."
    },
    {
        number: "03",
        icon: <LuShare2 />,
        title: "Share your profile",
        description:
            "Your profile gets a simple link such as nexa/profiles/your-business-name that you can share anywhere."
    },
    {
        number: "04",
        icon: <LuChartBar />,
        title: "Monitor your audience",
        description:
            "The account owner and up to two secondary users can access a dashboard to monitor views and interactions."
    }
];


export default function LandingPage() {

    return (

        <div className="landing-page">

            {/* ================= TOP BAR ================= */}

            <div className="landing-topbar">

                <h2>Nexa</h2>

                <button>
                    Get Started
                </button>

            </div>


            {/* ================= VERSION ================= */}

            <div className="rocket-quick-info">

                <LuRocket />

                <span>Nexa v.1</span>

            </div>


            {/* ================= HERO ================= */}

            <div className="hero-section">

                <h1>
                    A simple <span>storefront</span> for your business
                </h1>

                <p>
                    Nexa helps small businesses, brands, groups and communities
                    create a simple digital presence for their business,
                    mission, services and products — without needing to build
                    their own website.
                </p>

            </div>


            {/* ================= CTA ================= */}

            <div className="cta-buttons">

                <button>
                    Get Started
                    <LuArrowUpRight />
                </button>

                <button>
                    See how it works
                </button>

            </div>


            {/* ================= BUSINESS SHOWCASE ================= */}

            <div className="hero-section-businesses">

                <div className="businesses-heading">

                    <div>
                        <span>DISCOVER NEXA</span>

                        <h2>
                            Small businesses deserve
                            <br />
                            to be discovered.
                        </h2>
                    </div>

                    <p>
                        Explore some of the businesses, brands and communities
                        that can have a home on Nexa.
                    </p>

                </div>


                <div className="businesses-grid">

                    {businesses.map((business) => (

                        <div
                            className="business-card"
                            key={business.id}
                        >

                            {/* Business image */}

                            <div className="business-card-image">

                                <img
                                    src={business.image}
                                    alt={business.name}
                                />

                                <span
                                    className="business-category"
                                    style={{
                                        backgroundColor: business.color
                                    }}
                                >
                                    {business.category}
                                </span>

                            </div>


                            {/* Business information */}

                            <div className="business-card-content">

                                <div className="business-title-row">

                                    <div>

                                        <h3>
                                            {business.name}
                                        </h3>

                                        <p className="business-location">
                                            <LuMapPin />
                                            {business.location}
                                        </p>

                                    </div>

                                    <button
                                        className="business-open-button"
                                        aria-label={`View ${business.name}`}
                                    >
                                        <LuArrowUpRight />
                                    </button>

                                </div>


                                <p className="business-description">
                                    {business.description}
                                </p>


                                <div className="business-socials">

                                    <FaWhatsapp />
                                    <FaInstagram />
                                    <FaTiktok />
                                    <FaFacebook />
                                    <FaLinkedin />

                                </div>


                                <div className="business-profile-url">

                                    <span>
                                        nexa/profiles/{business.slug}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* ================= HOW IT WORKS ================= */}

            <div className="how-it-works">

                <div className="how-it-works-heading">

                    <span>HOW NEXA WORKS</span>

                    <h2>
                        Your digital presence,
                        <br />
                        without the complexity.
                    </h2>

                    <p>
                        You don't need a website, a developer or a complicated
                        setup. Nexa gives you one simple profile that brings
                        your important information together.
                    </p>

                </div>


                <div className="how-it-works-grid">

                    {howItWorks.map((step) => (

                        <div
                            className="how-it-works-card"
                            key={step.number}
                        >

                            <div className="how-it-works-top">

                                <span className="step-number">
                                    {step.number}
                                </span>

                                <div className="step-icon">
                                    {step.icon}
                                </div>

                            </div>


                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>


            {/* ================= DASHBOARD VALUE ================= */}

            <div className="dashboard-promo">

                <div className="dashboard-promo-content">

                    <span>
                        NEXA DASHBOARD
                    </span>

                    <h2>
                        Your profile is more than
                        <br />
                        just a link.
                    </h2>

                    <p>
                        Once your profile is live, you and up to two
                        secondary users can manage your presence and
                        understand how people interact with it.
                    </p>

                </div>


                <div className="dashboard-stats">

                    <div className="dashboard-stat">

                        <LuMousePointerClick />

                        <strong>
                            Interactions
                        </strong>

                        <span>
                            Understand what visitors engage with.
                        </span>

                    </div>


                    <div className="dashboard-stat">

                        <LuUsers />

                        <strong>
                            Audience
                        </strong>

                        <span>
                            See how people discover your profile.
                        </span>

                    </div>


                    <div className="dashboard-stat">

                        <LuChartBar />

                        <strong>
                            Analytics
                        </strong>

                        <span>
                            Monitor your profile performance.
                        </span>

                    </div>

                </div>

            </div>


            {/* ================= FINAL CTA ================= */}

            <div className="landing-final-cta">

                <LuRocket />

                <h2>
                    Give your business
                    <br />
                    a place to be found.
                </h2>

                <p>
                    Create your Nexa profile and give your customers,
                    community or audience one simple place to find you.
                </p>

                <button>
                    Create your Nexa profile
                    <LuArrowUpRight />
                </button>

            </div>

        </div>

    );

}