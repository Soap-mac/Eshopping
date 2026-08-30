const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');

app.use(morgan());
app.use(cookieParser());

app.use(helmet({
    crossOriginResourcePolicy: false
}));


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use((req, res, next) => {
    if (req.is('application/json')) {
        express.json()(req, res, next);
    } else {
        next();
    }
});
require('./databases/connection');
const PORT = process.env.PORT || 8000;

app.use('', require('./routes/AuthRoutes'));
app.use('', require('./routes/userRoutes'));
app.use('', require('./routes/products'));
app.use('', require('./routes/categoryRoutes'));
app.use('', require('./routes/subCategoryRoutes'));
app.use('', require('./routes/innerCategoryRoutes'));
app.use('', require('./routes/cart'));
app.use('', require('./routes/wishlist'));
app.use('', require('./routes/sliderRoutes'));
app.use('', require('./routes/reviewRoutes'));
app.use('', require('./routes/PaymentRoutes'));
app.use('', require('./routes/AddressRoutes'));
app.use('', require("./routes/searchingRoutes"));

app.listen(PORT, () => {
    console.log(`server is listining to port ${PORT}`);
});
