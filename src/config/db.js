const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Data Base connected :)')
  } catch (error) {
    console.log('Data base not working')
  }
}

module.exports = connectDB
