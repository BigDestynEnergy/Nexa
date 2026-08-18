import "../Create Styles/group.css";

export default function LocationStep({form, errors, updateField}){
    return(
        <main className="Location step">
            <h1>Location</h1>
            <p>You're online only, so location is optional. Add if you want it shown</p>

            <div className="form-group">
                <div className="field-heading">
                     <label>Address <span>(optional)</span></label>
                </div>
                <input
                value={form.address}
                onChange={(e)=>updateField("address", e.target.value)}
                placeholder="512 Kanjedza Limbe" />

                {errors && (
                    <div className="error-message">
                        <span>{errors.address}</span>
                    </div>
                )}
            </div>

                   <div className="form-group">
                    <div className="field-heading">
                        <label>City</label>
                    </div>
                
                <input
                value={form.city}
                onChange={(e)=>updateField("city", e.target.value)}
                placeholder="Lilongwe" />

                {errors && (
                    <div className="error-message">
                        <span>{errors.city}</span>
                    </div>
                )}
            </div>

            <div className="form-group">
                <div className="field-heading">
                    <label>Google Maps <span>(optional)</span></label>
               <span className="paste">Paste a share link</span>
                </div>
                <input
                value={form.maps}
                onChange={(e)=>updateField("maps", e.target.value)}
                placeholder="https://maps.google.com/" />
            </div>

                <div className="form-group">
                    <div className="field-heading">
                        
                <label>Country <span>(optional)</span></label>
                    </div>
                <input
                value={form.country}
                onChange={(e)=>updateField("country", e.target.value)}
                placeholder={form.country} />
            </div>
        </main>
    )
}