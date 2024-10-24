import express from "express";
import cors from "cors";
import { getItemCardInfo } from './handledb.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000; 

app.get('/iteminfo', async (req, res) => {
    const itemCardInfo = await getItemCardInfo();
    res.json(itemCardInfo);
});


app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
