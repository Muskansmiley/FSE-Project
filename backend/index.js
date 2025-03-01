// const express = require('express');
// const dbConnection = require('./config/dbConnect');
// const productRoutes = require('./routes/products');

// const app = express();

// //middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // add routes
// app.use('/products', productRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products"); // Import routes

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
