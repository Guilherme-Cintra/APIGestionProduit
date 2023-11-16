import express from "express"
import { config } from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import productRouter from "./routes/product.route.js"

//Utiliser config pour pouvoir utiliser les variables d'environement
config()


const app = express(); // utiliser une instance de express 




app.use(cors());

app.use(bodyParser.json());//Lire dans les objets json

app.use('/api/products/', productRouter);
app.use(errorHandler);

// PORT définit dans .env
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {

    res.send("Bonjour tout le monde<br/>Utilisation du serveur express!!!")
})

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
  });