import "../Create Styles/Basics.css";

export default function BasicsStep({ form, updateField, errors }) {

    const categories = [
        "Restaurant & Cafe",
        "Retail & Shop",
        "Fashion & Apparel",
        "Beauty & Wellness",
        "Health & Medical",
        "Professional Services",
        "Education & Training",
        "Technology",
        "Transport & Logistics",
        "Agriculture",
        "Other"
    ];

    const businessTypes = [
        {
            type: "Physical Business",
            slug: "Customers visit you"
        },
        {
            type: "Online Business",
            slug: "You operate online only"
        },
        {
            type: "Both",
            slug: "Storefront & Online"
        }
    ];

    return (
        <main className="basics">

            {/* HEADER */}
            <div className="basics-heading">
               
                <h2>Business basics</h2>

                <p>
                    Tell us about your business. These are the essentials
                    customers will see first on your NEXA Page.
                </p>
            </div>


            {/* BUSINESS NAME */}
            <div className="form-group">
                <label htmlFor="business-name">
                    Business Name
                </label>

                <input
                    id="business-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                        updateField("name", e.target.value)
                    }
                    className={errors.name ? "input-error" : ""}
                    placeholder="e.g. Felie's Cafe"
                />

                {errors.name && (
                    <span className="error-message">
                        {errors.name}
                    </span>
                )}
            </div>


            {/* CATEGORY */}
            <div className="form-group">

                <div className="field-heading">
                    <div>
                        <label>Business Category</label>
                        <span>Choose the category that best describes your business.</span>
                    </div>

                    {form.category && (
                        <small className="selected-indicator">
                            Selected
                        </small>
                    )}
                </div>

                <div className="categories">
                    {categories.map((cat) => (
                        <button
                            type="button"
                            className={`category ${
                                form.category === cat ? "selected" : ""
                            }`}
                            onClick={() => updateField("category", cat)}
                            key={cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {errors.category && (
                    <span className="error-message">
                        {errors.category}
                    </span>
                )}
            </div>


            {/* DESCRIPTION */}
            <div className="form-group">

                <div className="field-heading">
                    <div>
                        <label htmlFor="description">
                            Business Description
                        </label>

                        <span>
                            Give customers a quick idea of what you offer.
                        </span>
                    </div>
                </div>

                <textarea
                    id="description"
                    value={form.description}
                    onChange={(e) =>
                        updateField("description", e.target.value)
                    }
                    className={
                        errors.description ? "input-error" : ""
                    }
                    placeholder="Tell customers what your business does..."
                    maxLength={300}
                />

                <div className="textarea-bottom">
                    {errors.description ? (
                        <span className="error-message">
                            {errors.description}
                        </span>
                    ) : (
                        <span />
                    )}

                    <small>
                        {form.description?.length || 0}/300
                    </small>
                </div>

            </div>


            {/* BUSINESS TYPE */}
            <div className="form-group">

                <div className="field-heading">
                    <div>
                        <label>Business Type</label>

                        <span>
                            How do your customers interact with your business?
                        </span>
                    </div>
                </div>

                <div className="business-types">

                    {businessTypes.map((bType) => (
                        <button
                            type="button"
                            onClick={() =>
                                updateField(
                                    "businessType",
                                    bType.type
                                )
                            }
                            className={`business-type ${
                                form.businessType === bType.type
                                    ? "selected"
                                    : ""
                            }`}
                            key={bType.type}
                        >
                            <span className="business-radio">
                                <span />
                            </span>

                            <div>
                                <h4>{bType.type}</h4>
                                <span>{bType.slug}</span>
                            </div>
                        </button>
                    ))}

                </div>

                {errors.businessType && (
                    <span className="error-message">
                        {errors.businessType}
                    </span>
                )}

            </div>

        </main>
    );
}