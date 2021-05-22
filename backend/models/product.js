const mongoose = require("mongoose");
const productSchema=  mongoose.Schema({

    Id:{
        type :String,
        required:true,

    },
    
    Name:{
        type :String,
        required:true,

    },
    Description:{
        type:String,
        required:true,
        },

    Price:{
        Type:Number,
        
    },

    ImgUrl:{
        type:String,
        required:true,
    
    },

    InStock:{
        Type:Number,
    },
});

const product = mongoose.model("product", productSchema);
module.exports= product;
