const Categories = (props) => { 
    const { categories } = props;
    
    return ( 
        <>
            {
                categories.map(({ category_id, category_name, category_description }) => (
                    <div key={category_id} className="col-md-6 my-3"> 
                        <div className="card">
                            <div className="card-header">
                                Category
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{category_name}</h5>
                                <p className="card-text">{category_description}.</p>
                                <a href={`http://localhost:8282/item/categories/${category_name}`} className="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div> 
                ))
            }
        </>
    )
}

export default Categories;