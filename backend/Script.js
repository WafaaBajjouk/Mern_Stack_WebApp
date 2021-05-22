// seeder script using models and dotenv
// import data to database

require("dotenv").config();

const ProductResourse = require("./donee/products");

const connectDB = require("./config/Database");

const Product = require("./models/product");

connectDB();
const importD = async ()=>{
     try{
         await Product.deleteMany({});
         await Product.insertMany(ProductResourse);
         console.log("Data imported succefully");
         process.exit();
            }catch(error){
                        console.error("Data not imported");
                        process.exit(1);

            }
};

importD();

