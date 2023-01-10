//import express, { application } from 'express'
const express = require('express')
const productManager = require('./src/components/productManager/productManager')

const app = express()
const port = 8080

const path = './src/products.json'
const manager = new productManager(path)

// ServerConfig URL complex data
app.use(express.urlencoded({ extended: true }))


app.get('/products', async(req, res) => {
    const products = await manager.getProducts()
    res.json(products.slice(0, req.query.limit))
})

app.get('/products/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    res.json(await manager.getProductsId(id))
})

app.listen(port, () => {
  console.log('Conexion en puerto 8080')
})
