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

    static async update(sneaker) {
        const sneakers = await Sneaker.getAllData()
        const indx = sneakers.findIndex(s => s.id === sneaker.id)
        sneakers[indx] = sneaker

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

    static async getById(id) {
        try {
            const sneakers = await Sneaker.getAllData()
            return sneakers.find(s => s.id === id)
        } catch (e) {
            throw e
        }
    }
}

module.exports = Sneaker