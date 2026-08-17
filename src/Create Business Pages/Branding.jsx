import { LuImagePlus } from "react-icons/lu";
import "../Styles/Create.css";
import "../Create Styles/Branding.css";
import { usePopup } from "../Contexts/Popup context";
import { useEffect, useState } from "react";

export default function BrandingStep({form, errors, updateField}) {
    const [preview, setPreview] = useState(null);

    const {notify} = usePopup();
    const monitorFileUpload = (e)=>{
        const file = e.target.files[0];

        if(!file) return;

        if(file.size > 5 * 1024 * 1024){
            notify(1, `Size limit reached.`)
        }

        updateField("logo", file);
    }

    useEffect(()=>{
        if(!form.logo){
            setPreview(null);
            return;
        }

        const url = URL.createObjectURL(form.logo);
        setPreview(url);

        return () => {
            URL.revokeObjectURL(url);
        }
    }, [form.logo])


    return (
        <main className="branding step">
            <div className="branding-heading">

                <h1>Branding</h1>
                <p>
                    Give your business a visual identity. You can always add
                    or change your logo later.
                </p>
            </div>

            <section className="branding-content">
                <div className="branding-left">
                    <div className="section-title">
                        <h3>
                            Logo <span>(optional)</span>
                        </h3>
                        <p>Upload your business logo</p>
                    </div>

                    <label className="upload" htmlFor="logo-upload">
                        <div className="upload-icon">
                            <LuImagePlus />
                        </div>

                        <div className="upload-text">
                            <strong>Upload your logo</strong>
                            <p>PNG, JPG or WebP</p>
                            <small>Maximum file size: 5MB</small>
                        </div>

                        <span className="browse">Browse</span>

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
                        <span className={preview ? "live" : ""}>{preview ? "Preview is live" : "Live preview"}</span>
                    </div>

                    <div className="uploaded-image">
                        {preview ? (
                            <img 
                            src={preview}
                            alt="Business logo preview"/>
                        ) : (
                            <div className="empty-preview">
                            <LuImagePlus />
                            <p>Your logo will appear here</p>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}