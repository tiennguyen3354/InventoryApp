import express from 'express'; 
import chalk from 'chalk' 
import {itemRouter, categoryRouter} from './routers/router.js'

const PORT = 8282; 
const app = express(); 


// use middle ware 
app.use(express.json()); 

// Mount the router
app.use("/category", categoryRouter); 
app.use("/item", itemRouter)

app.listen(PORT, () => { 
    console.log(`Server is running on port: ${PORT}`)
})