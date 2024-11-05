import { useEffect, useState } from "react";
import Categories from "./Categories";

const Home = () => { 
    const [data, setData ] = useState(null)
    const firstWord = "Hello World"; 
     // Function to fetch data
     const fetchData = async (url, config) => {
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const {result} = await response.json();
            console.log(result)
            setData(result)
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
        <div className="row">
            {data && <Categories categories={data}/>}
        </div>
    )
}
export default Home