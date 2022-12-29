import express from "express";
import groups from './src/routers/groups.js'
import meetings from './src/routers/meetings.js'
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());

app.use('/groups', groups)
app.use('/meetings', meetings)

app.listen(8008, () => {
    console.log("server is listening on port 8008");
})