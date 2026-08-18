import { LuImagePlus, LuCheck } from "react-icons/lu";
import "../Styles/Create.css";
import "../Create Styles/Branding.css";
import { usePopup } from "../Contexts/Popup context";
import { useEffect, useState } from "react";

export default function BrandingStep({ form, errors, updateField }) {
    const [preview, setPreview] = useState(null);

    const { notify } = usePopup();

    const brandColors = [
        "#37885F",
        "#2563EB",
        "#7C3AED",
        "#DB2777",
        "#DC2626",
        "#EA580C",
        "#CA8A04",
        "#0891B2",
        "#4F46E5",
        "#0F766E",
        "#334155",
        "#111827"
    ];

    const monitorFileUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            notify(1, "Size limit reached.");
            return;
        }

        updateField("logo", file);
    };


    const selectColor = (color) => {
        updateField("brandColor", color);
    };


    const handleCustomColor = (e) => {
        updateField("brandColor", e.target.value);
    };


    useEffect(() => {
        if (!form.logo) {
            setPreview(null);
            return;
        }

        const url = URL.createObjectURL(form.logo);
        setPreview(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [form.logo]);


    return (
        <main className="branding step">

            <div className="branding-heading">

                <h1>Branding</h1>

                <p>
                    Give your business a visual identity. You can always add
                    or change your branding later.
                </p>

            </div>


            <section className="branding-content">

                {/* =====================
                    LOGO
                ====================== */}

                <div className="branding-left">

                    <div className="section-title">

                        <h3>
                            Logo <span>(optional)</span>
                        </h3>

                        <p>Upload your business logo</p>

                    </div>


                    <label
                        className="upload"
                        htmlFor="logo-upload"
                    >

                        <div className="upload-icon">
                            <LuImagePlus />
                        </div>

                        <div className="upload-text">

                            <strong>Upload your logo</strong>

                            <p>PNG, JPG or WebP</p>

                            <small>
                                Maximum file size: 5MB
                            </small>

                        </div>

                        <span className="browse">
                            Browse
                        </span>

                        <input
                            id="logo-upload"
                            type="file"
                            onChange={monitorFileUpload}
                            accept=".png,.jpg,.jpeg,.webp"
                            hidden
                        />

                    </label>

                </div>


                <div className="branding-right">

                    <div className="preview-header">

                        <h3>Preview</h3>

                        <span className={preview ? "live" : ""}>
                            {preview
                                ? "Preview is live"
                                : "Live preview"}
                        </span>

                    </div>


                    <div
                        className="uploaded-image"
                        style={{
                            "--brand-color":
                                form.brandColor || "#37885F"
                        }}
                    >

                        {preview ? (

                            <img
                                src={preview}
                                alt="Business logo preview"
                            />

                        ) : (

                            <div className="empty-preview">

                                <LuImagePlus />

                                <p>
                                    Your logo will appear here
                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </section>


        

            <section className="brand-colors">

                <div className="section-title">

                    <h3>
                        Brand color
                    </h3>

                    <p>
                        Choose one color that represents your business.
                    </p>

                </div>


                <div className="color-picker-area">

                    <div className="color-variations">

                        {brandColors.map((color) => (

                            <button
                                key={color}
                                type="button"
                                className={`color-option ${
                                    form.brandColor === color
                                        ? "selected"
                                        : ""
                                }`}
                                style={{
                                    backgroundColor: color
                                }}
                                onClick={() =>
                                    selectColor(color)
                                }
                                aria-label={`Select ${color}`}
                            >

                                {form.brandColor === color && (
                                    <LuCheck />
                                )}

                            </button>

                        ))}


                        {/* CUSTOM COLOR */}

                        <label
                            className={`custom-color ${
                                form.brandColor &&
                                !brandColors.includes(form.brandColor)
                                    ? "selected"
                                    : ""
                            }`}
                            style={{
                                backgroundColor:
                                    form.brandColor &&
                                    !brandColors.includes(form.brandColor)
                                        ? form.brandColor
                                        : "#ffffff"
                            }}
                            title="Choose custom color"
                        >

                            <input
                                type="color"
                                value={
                                    form.brandColor || "#37885F"
                                }
                                onChange={handleCustomColor}
                            />

                            {form.brandColor &&
                                !brandColors.includes(form.brandColor) && (
                                    <LuCheck />
                                )}

                        </label>

                    </div>


                    <div className="selected-color">

                        <div
                            className="selected-color-preview"
                            style={{
                                backgroundColor:
                                    form.brandColor || "#37885F"
                            }}
                        />

                        <div>
                            <span>Selected color</span>

                            <strong>
                                {form.brandColor || "#37885F"}
                            </strong>
                        </div>

                    </div>

                </div>


                {errors.brandColor && (
                    <span className="error-message">
                        {errors.brandColor}
                    </span>
                )}

            </section>

        </main>
    );
}