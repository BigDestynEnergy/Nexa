
import "../Create Styles/URL.css";

export default function URLstep({ form, errors, updateField }) {
    return (
        <main className="url step">

            <div className="url-heading">
                <h1>NEXA URL</h1>

                <p>
                    Choose the unique link customers will use to find your
                    business on NEXA.
                </p>
            </div>


            <div className="url-card">

                <div className="form-group">

                    <label htmlFor="nexa-url">
                        Your NEXA address
                    </label>

                    <div className="url-input">

                        <span className="url-prefix">
                            nexa.com/
                        </span>

                        <input
                            id="nexa-url"
                            type="text"
                            value={form.slug}
                            onChange={(e) =>
                                updateField(
                                    "slug",
                                    e.target.value
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                )
                            }
                            placeholder="feliescafe"
                        />

                    </div>


                    {errors.slug ? (
                        <div className="url-status unavailable">
                            <span className="status-dot" />
                            {errors.slug}
                        </div>
                    ) : form.slug ? (
                        <div className="url-status available">
                            <span className="status-dot" />
                            This URL is available
                        </div>
                    ) : (
                        <div className="url-status idle">
                            <span className="status-dot" />
                            Choose a short and memorable URL
                        </div>
                    )}

                </div>


                <div className="url-preview">

                    <span>YOUR PAGE</span>

                    <strong>
                        nexa.com/
                        <b>{form.slug || "yourbusiness"}</b>
                    </strong>

                </div>

            </div>

        </main>
    );
}