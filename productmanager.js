
// Creacion de la clase
class ProductManager {

    constructor() {
        this.products = [];
    }
//Metodo addProduct
    addProduct(title,description, price, thumbnail, code, stock) {
        const repCode = this.products.find(rep => rep.code == code)
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.products.length+1 
        }
        if (title && description && price && thumbnail && code && stock != undefined && !repCode){
            this.products.push(product)
        }
        else {
            console.log('All fields are mandatory')
        }
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
};
