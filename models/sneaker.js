const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path')

class Sneaker  {
    constructor(brand, model, img, price) {
        this.brand = brand
        this.model = model
        this.img = img
        this.price = price
        this.id = uuidv4()
    }

    createDataObj() {
        return {
            brand: this.brand,
            model: this.model,
            img: this.img,
            price: this.price,
            id: this.id
        }
    }

    async save() {
        const sneakers = await Sneaker.getAllData()
        sneakers.push(this.createDataObj())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'sneakers.json'),
                JSON.stringify(sneakers),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static getAllData() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'sneakers.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Sneaker