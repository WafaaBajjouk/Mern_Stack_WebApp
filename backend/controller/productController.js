const Product = require('../models/product');

const getAll = async(req, res) =>{
    try{
        const products= await Product.find({});
        res.json(products);
    }catch (error){
            console.error(error);
            res.status(500).json({message :"Server ironee"});
    }
};


const getProduct = async(req, res) =>{
    try{
        const product= await Product.findById(req.params.id);
        res.json(product);
    }catch (error){
            console.error(error);
            res.status(500).json({message :"Server ironee"});
    }

};

module.exports={
    getAll,
    getProduct,
};