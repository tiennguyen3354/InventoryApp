# Inventory Tracker

## Overview

The **Inventory Tracker** is a web application designed to manage categories, items, and drinks. It allows users to categorize items, track inventory levels, and associate drinks with items, making it suitable for restaurants, cafes, or any business that manages inventory.

## Features

- **Category Management**: Create, read, update, and delete categories for better organization.
- **Item Management**: Add items to the inventory, specifying their category, description, price, and stock quantity.
- **Drink Management**: Create and manage drinks, with the option to associate multiple drinks with individual items.
- **Item-Drink Association**: Easily link drinks to items to manage pairings effectively.

## Database Schema

The database schema consists of the following tables:

1. **Category**
    - `category_id` (INT, PRIMARY KEY, AUTO_INCREMENT)
    - `name` (VARCHAR(100), NOT NULL)
    - `description` (TEXT)
    - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

2. **Item**
    - `item_id` (INT, PRIMARY KEY, AUTO_INCREMENT)
    - `category_id` (INT, FOREIGN KEY REFERENCES Category(category_id))
    - `name` (VARCHAR(100), NOT NULL)
    - `description` (TEXT)
    - `price` (DECIMAL(10, 2))
    - `stock_quantity` (INT, DEFAULT 0)
    - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

3. **Drink**
    - `drink_id` (INT, PRIMARY KEY, AUTO_INCREMENT)
    - `name` (VARCHAR(100), NOT NULL)
    - `description` (TEXT)
    - `price` (DECIMAL(10, 2))
    - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

4. **ItemDrink**
    - `item_id` (INT, FOREIGN KEY REFERENCES Item(item_id))
    - `drink_id` (INT, FOREIGN KEY REFERENCES Drink(drink_id))
    - PRIMARY KEY (`item_id`, `drink_id`)

Here’s an overview of your **Inventory Tracker** project, summarizing its purpose, functionality, and technology stack:

---


- **Category Management**: Users can create, update, and delete categories to effectively classify their inventory items. Categories can include types such as "Appetizers," "Main Courses," "Beverages," and more.

- **Item Management**: The application allows users to add new items to their inventory, complete with details such as name, description, price, and stock quantity. Users can view and modify existing items to keep their inventory up-to-date.

- **Drink Management**: Users can create and manage various drinks available in the establishment. Each drink can have its own details, including name, description, and price.

- **Item-Drink Association**: The application provides functionality to associate multiple drinks with individual items. This feature enables businesses to offer specific drink pairings with menu items, improving customer experience and sales.

- **User-Friendly Interface**: The web application is built with a responsive and intuitive interface, making it easy for users to navigate and manage their inventory effectively.

### Technology Stack

- **Frontend**: Built with **React**, the frontend provides a dynamic and interactive user experience, allowing for smooth navigation and efficient data handling.

- **Backend**: The application uses **Node.js** and **JavaScript** for server-side development, ensuring a fast and scalable backend that can handle multiple requests and manage business logic.

- **Database**: **MySQL** is employed as the database management system to store and manage data related to categories, items, and drinks. The relational structure allows for efficient querying and data integrity.

### Benefits

- **Enhanced Inventory Control**: Businesses can maintain accurate stock levels, reducing waste and ensuring that popular items are always available.

- **Improved Decision-Making**: With insights into inventory trends and sales, businesses can make informed decisions about purchasing and menu adjustments.

- **Streamlined Operations**: The integration of item and drink management simplifies the workflow for staff, allowing for quicker service and better customer satisfaction.



