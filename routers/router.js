import express from 'express'; 
import { getCategories, addCategory, updateCategory, deleteCategory } from './../controllers/categoryController.js'
import {getItems, addItem, updateItem, deleteItem, getItemsWithCategories} from './../controllers/itemController.js'

// category router 
export const categoryRouter = express.Router();
categoryRouter.get('/', getCategories); 
categoryRouter.post('/', addCategory); 
categoryRouter.put('/:id', updateCategory); 
categoryRouter.delete('/:id', deleteCategory); 

// item router 
export const itemRouter = express.Router(); 
itemRouter.get('/', getItems); 
itemRouter.get('/categories', getItemsWithCategories)
itemRouter.post('/', addItem); 
itemRouter.put('/:id', updateItem); 
itemRouter.delete('/:id', deleteItem); 
