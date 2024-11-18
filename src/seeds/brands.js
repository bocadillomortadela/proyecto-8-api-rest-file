const mongoose = require('mongoose')
const brandData = require('./data/brands')
const { Brand } = require('../api/models/brands')

const runSeed = async () => {
  try {
    await mongoose.connect('mongodb+srv://jiashunbbv:DLMmJ8FeNjgXSBIY@cluster0.ocjwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    await Brand.collection.drop()
    console.log('products deleted')

    await Brand.insertMany(brandData)
    console.log('products inserted')
    await mongoose.disconnect()
    console.log('disconnect from database')
  } catch (error) {
    console.log('error')
  }
}

runSeed()
