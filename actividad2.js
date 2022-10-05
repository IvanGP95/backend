const fs = require("fs");
const { connect } = require("http2");

class Container {
    constructor(fileName){
        this.fileName = fileName;
    }

    save = async (product)=>{
        try {
            if(fs.existsSync(this.fileName)){
                const content = await fs.promises.readFile(this.fileName, "utf-8");
                if(content){
                    const products = JSON.parse(content);
                    //Verificar si el producto existe: const productExists = products.some(e => e.title === product.title);
                    const newProduct ={
                        id: products.length +1,
                        ...product
                }
                products.push(newProduct);
                await fs.promises.writeFile(this.fileName, JSON.stringify(products, null , 2))
            }        else {
                const newProduct ={
                    id:1,
                    ...product
                }
                await fs.promises.writeFile(this.fileName, JSON.stringify([newProduct],null,2));
            }
        }       else {
                const newProduct ={
                    id:1,
                    ...product
                }
                await fs.promises.writeFile(this.fileName, JSON.stringify([newProduct],null,2));
            }
        } catch (error) {
            console.log(error);
        }
    }

    getByID = async(id) => {
        try {
            if(fs.existsSync(this.fileName)){
                const content = await fs.promises.readFile(this.fileName, "utf-8");
                if(content){
                        const products = JSON.parse(content);
                        const product = products.find(i=> i.id === id);
                        return product;
                } else {
                    return "El archivo esta vacio"
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    getAll = async() =>{
        const content = await fs.promises.readFile(this.fileName, "utf-8");
        const products = JSON.parse(content);
        return products
    }
    deleteById = async(id) => {
        
    }
    deleteAll = async(id) => {
        await fs.promises.writeFile(this.fileName, JSON.stringify([],null,2));
    }
}

const productList = new Container ("actividad2.txt")
const product1 = {
    title :"T-Shirt",
    price : 300,
    thumbnail : "https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_FA22_Image_195_1024x1024.jpg?v=1663048222"
}
const product2 = {
    title :"Shoes",
    price : 100,
    thumbnail : "https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_FA22_Image_195_1024x1024.jpg?v=1663048222"
}

const createProduct = async ()=>{
    // await productList.save(product1);
    // await productList.save(product2);
    const idResult = await productList.getByID(1);
    console.log(idResult)
    const products = await productList.getAll();
    console.log(products)
}

createProduct();
module.exports = productList;