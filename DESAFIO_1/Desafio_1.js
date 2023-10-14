class Product {
    
    constructor({id, category, object, title, description, thumbnail, stock, price}){
        this.id = id
        this.category = category
        this.object = object
        this.title = title
        this.description = description
        this.thumbnail = thumbnail 
        this.stock = stock 
        this.price = price
    }
}

class ProductManager {
    static #lastId = 0
    #products
   
    constructor(){
        this.#products =[]
    }
  
    static #generarNewId() {
        return ++ProductManager.#lastId
    }
    
    addProduct({category, object, title, description, thumbnail, stock, price}) {
        const id = ProductManager.#generarNewId()
        const product = new Product({id, category, object, title, description, thumbnail, stock, price})
        this.#products.push(product)
        return product
    }

    getProducts() {
        return this.#products
       
    }

    getProductById(id) {
        const buscada = this.#products.find(product => product.id === id)
        if (!buscada) throw new Error (`Not Found`)
        return buscada
    }

}

const ProdMan = new ProductManager()

const prod1 = ProdMan.addProduct({category: 'Linea Susan', object: 'Maceta', title: 'Face', description: 'Macetas con rostros pintados a mano', stock: 50, price: 1000})

const prod2 = ProdMan.addProduct({category: 'Linea Susan', object: 'Maceta', title: 'Lady', description: 'Macetas hecha con forma de cuerpo', stock: 40, price: 1500})

const prod3 = ProdMan.addProduct({category: 'Linea Susan', object: 'Maceta', title: 'Black&White', description: 'Macetas con diseños abstractos', stock: 30, price: 2000})

const prod4 = ProdMan.addProduct({category: 'Linea Angie', object: 'Colgante', title: 'Arcoiris', description: 'Adorno de alambre en forma de Arcoiris decorado con piedras transparentes', stock: 35, price: 1100})


console.log(prod1)
console.log(prod2)
console.log(prod3)
console.log(prod4)


console.log(ProdMan.getProductById(3))

try {
console.log(ProdMan.getProductById(10))
}catch (error) {
    console.log(error.message)
}