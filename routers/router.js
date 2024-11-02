import express from 'express'; 
import { getCategories, addCategory, updateCategory, deleteCategory } from './../controllers/categoryController.js'
import { getItems, addItem, updateItem, deleteItem, getItemsBasedOnCategory } from './../controllers/itemController.js'


// category router 
const categoryRouter = express.Router();
categoryRouter.get('/', getCategories); 
categoryRouter.post('/', addCategory); 
categoryRouter.put('/:id', updateCategory); 
categoryRouter.delete('/:id', deleteCategory); 
const itemRouter = express.Router(); 
// item router 
itemRouter.get('/', getItems); 
itemRouter.get('/categories/:category_name', getItemsBasedOnCategory)

itemRouter.post('/', addItem); 
itemRouter.put('/:id', updateItem); 
itemRouter.delete('/:id', deleteItem); 

export {itemRouter, categoryRouter}