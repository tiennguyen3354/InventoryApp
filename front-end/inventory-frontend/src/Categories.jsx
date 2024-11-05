import { useEffect } from "react";

const categories = () => { 
    
    const firstWord = "Hello World"; 
     // Function to fetch data
     const fetchData = async (url, config) => {
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jsonData = await response.json();
            console.log(jsonData)
            
        } catch (err) {
           console.log(err.message)
        }
    };
    useEffect(() => { 
        const url = 'http://localhost:8282/category'; // Example API URL
        const config = {
            method: "get", //get request
            mode: "cors", //cross origin resource sharing
            headers: {
                "Content-Type": "application/json" //sending mime type
            }
        }   
        fetchData(url, config);
    }, [])
    return (
        <div>
           {firstWord}
        </div>
    )
}
export default categories