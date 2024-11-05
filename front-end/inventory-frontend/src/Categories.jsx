const Categories = (props) => { 
    const { categories } = props;
    
    return ( 
        <div>
            {
                categories.map(category => (
                <div key={category.category_id}>
                    <h1>{category.category_name}</h1>
                </div> ))
            }
        </div>
    )
}

export default Categories;