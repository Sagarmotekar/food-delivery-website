import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import CartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000; // Use environment variable for Render

// CORS configuration - allow your frontend and admin URLs
const allowedOrigins = [
    'http://localhost:5173',  // Frontend local
    'http://localhost:5174',  // Admin local
    'https://food-delivery-website-pi-taupe.vercel.app/',
    'https://food-delivery-website-admin-eight.vercel.app/'
    // We'll add production URLs after deploying frontend/admin
    // 'https://food-delivery-frontend.vercel.app',
    // 'https://food-delivery-admin.vercel.app',
];

//middlewares
app.use(express.json());
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

// OR for simpler setup during deployment, just use:
// app.use(cors());

//db connection 
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", CartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API is running...");
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})  