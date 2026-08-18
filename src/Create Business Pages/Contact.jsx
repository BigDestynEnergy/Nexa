import "../Styles/Create.css";
import "../Create Styles/Contact.css"

export default function ContactStep({errors, form, updateField}){
    return(
        <main className="contact step">
            <h1>Contact information</h1>
            <p>How customers get in touch from your NEXA page</p>

            <div className="form-group">
                <label>Phone number</label>
                <label>{form.phone.length}/12</label>
                <input type="number"
                 placeholder="+265 999 234 564"
                 maxLength={12}
                 max={12}
                 
                onChange={(e)=>updateField("phone", e.target.value)}
                value={form.phone} />

                {errors.phone && (
                    <span className="error-message">
                        {errors.phone}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label>Email <span>(optional)</span></label>
                <input type="email" value={form.email}
                className={errors.email ? "input-error" : ""}
                placeholder="johnbanda@gmail.com"
                onChange={(e)=>updateField("email", e.target.value)}/>
            </div>

            <div className="form-group">
                <label>whatsapp <span>(optional)</span></label>
                <input type="number" value={form.whatsapp}
                onChange={(e)=>updateField("whatsapp", e.target.value)} placeholder="+265999 99 88 122" />
            </div>

            <div className="form-group">
                <label>Website <span>(optional)</span></label>
                <input type="text" value={form.website}
                onChange={(e)=>updateField("website", e.target.value)} placeholder="www.feliescafe.com" />
            </div>
        </main>
    )
}