import ProductManager from './ProductManager.js'

const manager = new ProductManager('./files/products.json')

const prod1 = {
    title: 'producto1',
    description: 'es el primer producto',
    price: 123,
    thumbnail: 'url img',
    code: 4132,
    stock: 20
}

const prod2 = {
    title: 'producto2',
    description: 'es el segundo producto',
    price: 456,
    thumbnail: 'url img',
    code: 4133,
    stock: 21
}

const prod3 = {
    title: 'producto3',
    description: 'es el tercer producto',
    price: 789,
    thumbnail: 'url img',
    code: 4134,
    stock: 22
}

const nuevosProductos = async() => {
    await manager.addProduct.apply(prod1);
    await manager.addProduct.apply(prod2);
    await manager.addProduct.apply(prod3);

    console.log(await manager.getProducts());
    console.log(await manager.getProductById(1));
    console.log(await manager.updateProduct({id: 1, stock: 200}));
    console.log(await manager.deleteProduct(1))
    await manager.addProduct(prod1)
}

nuevosProductos()
