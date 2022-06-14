import express from "express"
import http from 'http'
import cors from "cors"
import dotenv from 'dotenv';
import authRoute from './routes/authRoute'
import userRoute from './routes/userRoute'
import connectMongoDB from "./services/dbconnect";
dotenv.config();

connectMongoDB();

const port = 5000;
const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};


app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);


app.get('/api/test', (req, res) => {
    res.send("Hello from Curie-server");
})

server.listen(port, () => {
    console.log("CURIE SERVER LISTENING ON PORT 5000...");
});
