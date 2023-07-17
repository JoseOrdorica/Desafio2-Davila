import fs from 'fs'

// Creacion de la clase
export default class ProductManager {

    constructor(path) {
        this.path = path;
    };

//Metodo addProduct
    addProduct = async(product) => {
        try {

            const products = await this.getProducts();
            const codeRep = products.find(p => p.code == product.code);

            if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
                return console.log('Complete all fields');
            };
            
            if(codeRep) {
                return console.log('That code already exist')
            };

            let id;

            if(products.length == 0){
                id = 1
            } else {
                id = products[products.length - 1].id + 1
            }

            products.push({
                ...product, 
                id
            });

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
            return products
        } catch (err){
            console.log(err);
        };
    };

//Metodo getProducts
    getProducts(){
        return this.products
    };

    //Metodo getProductsById
    getProductById(id){
        let productId = this.products.find(prod => prod.id === id)
        if(productId) {
            return productId
        }
        else {
            return console.error('Not found')
        };
    };

    //Metodo updateProduct
    updateProduct = async(product) => {
        try {
                        const products = await this.getProducts();
            const productToUpdate = product.find(p => p.id == product.id);

            if(!productToUpdate) {
                return console.log(`Can't find the product with this id: ${product.id}`);
            };
            const indexOfProduct = products.findIndex(p => p.id == product.id);            products [indexOfProduct] = {
                ...productToUpdate,
                ...product
            };

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return products[indexOfProduct];
        } catch(err){
            console.log(err);
        };
    };

    //Metodo deleteProduct
    deleteProduct = async(id) => {
        try {

            const products = await this.getProducts();
            const indice = products.findIndex( p=> p.id === id );

            if(indice < 0){
                return console.log(`Can't find the product with this id: ${product.id}`);
            };

            products.splice(indice, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return products;
        } catch (err){
            console.log(err)
        };
    };
};
