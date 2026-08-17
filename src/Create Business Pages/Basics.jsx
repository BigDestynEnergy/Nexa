import { useState } from "react";
import "../Create Styles/Basics.css";

export default function BasicsStep({form, updateField, errors}){

    const categories = [
        "Restaurant & Cafe","Retail & Shop","Fashion & Apparel",
        "Beauty & Wellness", "Health & Medical", 
        "Professional Services","Education & Training","Technology",
        "Transport & Logistics","Agriculture","Other"
    ]

    const addCategory = (category) => {
        updateField("category", category);
    }

    const addBusinessType = (btype) => {
        updateField('businessType', btype);
    }

    const businessTypes = [
        {type: "Physical Business", slug:"Customers visit you"},
        {type: "Online Business", slug:"You operate online only"},
        {type: "Both", slug:"Storefront & Online"},
    ]
    return(
        <main className="basics">
            <h2>Business basics</h2>
            <p>The essentials customers see first on your NEXA Page.</p>

            <div className="form-group">
                <label>Business Name</label>
                
                <input 
                type="text"
                value={form.name}
                onChange={(e)=>updateField("name", e.target.value)}
                className={errors.name ? "input-error" : ""}
                placeholder="e.g Felie's Cafe"/>
                {errors.name && (
                    <span className="error-message">
                        {errors.name}
                    </span>
                )}
            </div>

        <div className="form-group">
                <label>Business Category</label>

                <div className="categories">
                    {categories.map((cat, index) => (
                        <button className={`category ${form.category === cat ? "selected" : ""}`}
                        onClick={()=>{addCategory(cat)}}
                        key={index}>{cat}</button>
                        ))}
                </div>

                 <span className="error-message">
                            {errors.category}
                        </span>
            </div>

                        <div className="form-group">
                <label>Business Description</label>

                <textarea
                    value={form.description}
                    onChange={(e) =>
                        updateField("description", e.target.value)
                    }
                    className={
                        errors.description ? "input-error" : ""
                    }
                    placeholder="Tell customers what your business does..."
                />

                {errors.description && (
                    <span className="error-message">
                        {errors.description}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label>Business type</label>

                <div className="business-types">
                    {businessTypes.map((bType, index) => (
                        <div 
                        onClick={()=>addBusinessType(bType.type)}
                        className={`business-type ${form.businessType === bType.type ? "selected" : ""}`}
                         key={index}>
                           <h4>{bType.type}</h4>
                           <span>{bType.slug}</span> 
                        </div>
                    ))}
                </div>

                  {errors.businessType && (
                    <span className="error-message">
                        {errors.businessType}
                    </span>
                )}
            </div>

        </main>
    )
}