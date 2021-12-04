import './ProductCreate.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { createWine } from "../../services/winesServices";
import ErrorMsg from "../error/ErrorMsg";

function ProductCreate() {
    let [error, setError] = React.useState('');
    let history = useHistory();

    function createProductHandler(e) {
        e.preventDefault();

        let title = e.target.title.value;
        let description = e.target.description.value;
        let price = Number(e.target.price.value);
        let category = e.target.category.value;
        let image = e.target.image.value;
        let createdAt = Date.now();

        if (!title || !description || !price || !image) {
            return setError('All fields are required!');
        }

        if (title.length < 10) {
            return setError('Title must be at least 10 characters long!');
        }

        if (description.length < 50) {
            return setError('Description must be at least 0 characters long!');
        }

        createWine(title, description, price, category, image, createdAt)
            .then(() => {
                e.target.reset();
                history.push('/wine-catalog');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <>
            <h3>Create New Wine</h3>
            {error ? <ErrorMsg error={error} /> : ""}
            <div className="form-wrapper create-product">
                <section className="form-section create-product-section">
                    <form className="create-product-form" onSubmit={(e) => createProductHandler(e)}>
                        <label htmlFor="wine-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-title" name="title" />
                        <label htmlFor="wine-description">Description<span className="required">*</span></label>
                        <textarea cols="50" rows="5" id="wine-description" name="description"></textarea>
                        <label htmlFor="wine-price">Price<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-price" name="price" />
                        <label htmlFor="wine-type">Category<span className="required">*</span></label>
                        <select name="category">
                            <option value={'Red'}>Red</option>
                            <option value={'White'}>White</option>
                            <option value={'Rosé'}>Rosé</option>
                            <option value={'Sparkling'}>Sparkling</option>
                            <option value={'Dessert'}>Dessert</option>
                            <option value={'Fortified'}>Fortified</option>
                        </select>
                        <label htmlFor="wine-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-img" name="image" />
                        <button type="submit" className="create-product-button" >Create</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default ProductCreate;