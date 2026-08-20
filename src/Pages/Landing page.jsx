import "../Styles/Landing Page.css";
import "../Styles/Landing Media.css";

import {
  LuRocket,
  LuMapPin,
  LuArrowUpRight,
  LuUsers,
  LuChartBar,
  LuImage,
  LuShare2,
  LuMousePointerClick,
  LuGlobe,
  LuCopyright,
} from "react-icons/lu";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import businesses from "../Utils/Businesses";
import { howItWorks } from "../Utils/works";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

    const learnMoreRef = useRef(null);

    const navigate = useNavigate();

    const scrollToRef = () => {
        learnMoreRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

  return (
    <section className="landing-page">
      {/* ====== TOP BAR ======= */}
      <div className="landing-topbar">
        <h2>Nexa</h2>
        <div className="btns">
            <button onClick={()=>navigate("/signup")}>Get Started</button>
        </div>
      </div>

      <div className="version">
        <LuRocket />
        <span>Nexa v.1</span>
      </div>

      <div className="hero-section">
        <h1>
          A simple <span>storefront</span> for your business
        </h1>
        <p>
          Nexa helps small businesses, brands, groups and communities create a
          simple digital presence for their business, mission, services and
          products, without needing to build their own website.
        </p>
      </div>

      <div className="cta-buttons">
        <button onClick={()=>navigate("/explore")}>
          Explore Businesses <LuArrowUpRight />
        </button>
        <button onClick={scrollToRef}>
            Learn More
        </button>
      </div>

      <div className="hero-section-businesses">
        <div className="business-heading">
          <div>
            <span>DISCOVER NEXA</span>
            <h2>
              Small businesses deserve <br />
              to be discovered.
            </h2>
          </div>

          <p>
            Explore some of the businesses, brands and communities that can have
            a home on Nexa.
          </p>
        </div>
        <div className="businesses-grid">
          {businesses.map((business) => (
            <div className="business-card" key={business.id}>
              {/* Business image */}

              <div className="business-card-image">
                <img src={business.image} alt={business.name} />

                <span
                  className="business-category"
                  style={{
                    backgroundColor: business.color,
                  }}
                >
                  {business.category}
                </span>
              </div>

              {/* Business information */}

              <div className="business-card-content">
                <div className="business-title-row">
                  <div>
                    <h3>{business.name}</h3>

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

                <p className="business-description">{business.description}</p>

                <div className="business-socials">
                  <FaWhatsapp style={{color: "#1db954"}} />
                  <FaInstagram className="ig" />
                  <FaTiktok style={{color: `#000`}} />
                  <FaFacebook style={{color:`#0c2594`}} />
                  <FaLinkedin style={{color:`#18ce`}} />
                </div>

                <div className="business-profile-url">
                  <span>nexa/profiles/{business.slug}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works" ref={learnMoreRef} id="howitworks">
          <div className="how-it-works-heading">
            <span>HOW NEXA WORKS</span>

            <h2>
              Your digital presence,
              <br />
              without the complexity.
            </h2>

            <p>
              You don't need a website, a developer or a complicated setup. Nexa
              gives you one simple profile that brings your important
              information together.
            </p>
          </div>

          <div className="how-it-works-grid">
            {howItWorks.map((step) => (
              <div className="how-it-works-card" key={step.number}>
                <div className="how-it-works-top">
                  <span className="step-number">{step.number}</span>

                  <div className="step-icon">{step.icon}</div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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

                <button onClick={()=>navigate("/signup")}>
                    Create your Nexa profile
                    <LuArrowUpRight />
                </button>

            </div>

            <footer>
                <h1>Ready to join us?</h1>
                <p>Join other businesses, collectives, services and ventures in managing your digital presence without having a complex system</p>
                <button onClick={()=>navigate("/signup")}>
                    Create A Business Account
                    <LuArrowUpRight/>
                    
                </button>

                <div className="footer-bottom">
                    <h2>Nexa</h2>

                    <div className="reqs">
                        <h4>Privacy Policy</h4>
                        <h4>Terms of use</h4>
                        <h4>FAQs</h4>
                    </div>

                    <span>
                        <LuCopyright/> 2026 NEXA. All Rights Reserved
                    </span>
                </div>
            </footer>
    </section>
  );
}
