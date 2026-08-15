
export const validateStep = (step, data) => {
    const errors = {};

    switch(step){
        case 1:
            if(!data.name.trim()){
                errors.name = "Business is required."
            }

            if(!data.category.trim()){
                errors.name = "Business category is required."
            }

            if(!data.description.trim()){
                errors.name = "Business description is required."
            } 
            break;

        case 2:
            break;
        
        case 3:
            if(data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
                errors.name = "Phone number is required."
            }

            if(!data.phone.trim){
                errors.name = "Create a unique URL."
            }

            break;

        case 4:
            if(data.businessType !== 'online' && !data.address.trim()){
                errors.address = 'Business address is required.'
            }

            if(data.businessType !== "online" && !data.city.trim()){
                errors.city = 'City is required'
            }

            break;

        case 5:
            if(!data.slug.trim()){
                errors.slug = 'Choose a Nexa URL'
            } else if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)){
                errors.slug = "Use lowercase letters, numbers and hyphens only";
            }
            break;

        case 6:
            break;
        default:
            break;
    }
    
    return errors;
}