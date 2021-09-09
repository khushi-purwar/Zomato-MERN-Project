import Joi from 'joi';

export const VaildateRestaurantCity = (restaurantObj)=>{
    const Schema = Joi.object({
        city : Joi.string().required(),
    });
        return Schema.validateAsync(restaurantObj);
};


export const VaildateRestaurantSearchString = (restaurantObj)=>{
    const Schema = Joi.object({  
        searchString : Joi.string().required(),
    });
        return Schema.validateAsync(restaurantObj);
};

