
module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {console.log(err)})
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, price, imgurl } = req.body
        
        
        db.create_product([name, price, imgurl]).then(newProduct => {
            res.status(200).send(newProduct)
        }).catch(err => console.log(err))
    },
}


