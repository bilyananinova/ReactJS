import './EditProduct.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { editWine, getOne } from "../../services/winesServices";

function EditProduct({ match }) {
    let [wine, setWine] = React.useState({});
    let history = useHistory();

    let id = match.params.wineId;
    
    React.useEffect(() => {

        getOne(id)
            .then(wine => {
                setWine(wine.data());
            })

    }, [id]);


    function editProductHandler(e) {
        e.preventDefault();

        let title = e.target.title.value;
        let description = e.target.description.value;
        let price = e.target.price.value;
        let type = e.target.type.value;
        let image = e.target.image.value;

        editWine(id, title, description, price, type, image)
        .then(() => {
            history.push(`/wine-catalog/${id}/details`);
        })
    }
    
    return (
        <>
            <h3>Edit Wine</h3>
            <div className="form-wrapper edit-product">
                <section className="form-section edit-product-section">
                    <form className="create-product-form" onSubmit={(e) => editProductHandler(e)}>
                        <label htmlFor="wine-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-title" name="title" defaultValue={wine.title} />
                        <label htmlFor="wine-description">Description<span className="required">*</span></label>
                        <textarea cols="50" rows="5" id="wine-description" name="description" defaultValue={wine.description} />
                        <label htmlFor="wine-price">Price<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-price" name="price" defaultValue={wine.price} />
                        <label htmlFor="wine-type">Type<span className="required">*</span></label>
                        <select name="type">
                            <option value="red">Red</option>
                            <option value="white">White</option>
                            <option value="rose">Rose</option>
                            <option value="sparkling">Sparkling</option>
                            <option value="dessert">Dessert</option>
                            <option value="fortified">Fortified</option>
                        </select>
                        <label htmlFor="wine-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-img" name="image" defaultValue={wine.image} />
                        <button type="submit" className="edit-product-button" >Edit</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default EditProduct;