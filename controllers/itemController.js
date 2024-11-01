import itemsDataBase from "./../database/itemsDb.js"
export const getItems = async (req, res) => { 
    const items = await itemsDataBase.getItems(); 
    if (items.length !== 0) { 
        res.status(200).json({ 
            message: "successfully retrieve the data ", 
            items 
        })
    } else { 
        res.status(404).json({ 
            message: "Items not found "
        })
    }
}

export const getItemsBasedOnCategory = async (req, res) => { 
    const itemsWithCategories = await itemsDataBase.getItemsBasedOnCategory(req.params.category_name); 
    if (itemsWithCategories.length !== 0) { 
        res.status(200).json({ 
            message: "Successfully retreived data with categories ", 
            itemsWithCategories
        })
    } else { 
        res.status(404).json({ 
            message: "Items not found. "
        })
    }
}

export const addItem = (req, res) => { 

}

export const updateItem = (req, res) => { 
    
}

export const deleteItem = (req, res ) => { 
    
}
