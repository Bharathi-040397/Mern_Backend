const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')




const app = express();
app.use(express.json())
app.use(cors())

// Routes
app.use('/products', require('./src/Route/Product'))



// Connect to mongodb
const URI = "mongodb+srv://Bharathi:ra7W9neN7XaGkRal@cluster0.767sp.mongodb.net/food_product_foonza?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})