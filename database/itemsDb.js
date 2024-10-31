import connection from './connection.js'

const getItems = async () => {
    const [result] = await connection.query("SELECT * FROM Item")  
    return result; 
}
const getItemsWithCategories = async () => { 
    const [result] = await connection.query("SELECT Item.item_id, Item.item_name, Item.item_description, Item.item_price, Item.item_stock_quantity, Category.category_name, Category.category_description FROM Item JOIN Category ON Item.category_id = Category.category_id")
    return result; 
}
export default {getItems , getItemsWithCategories};