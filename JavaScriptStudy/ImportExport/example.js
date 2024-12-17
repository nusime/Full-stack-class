function createProduct(name, category){
    let product = {
        name: name,
        category: category,
        price: Math.ceil(Math.random() * 500)
    };

    return product;
}

let product = createProduct('Face Wash', 'Dry skin');
console.log(product);