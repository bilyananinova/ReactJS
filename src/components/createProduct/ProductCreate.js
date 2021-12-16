import './ProductCreate.css';
import React from "react";
import { useHistory } from "react-router-dom";

import { createWine } from "../../services/winesServices";
import UserContext from "../../contexts/UserContext";

import ErrorMsg from "../error/ErrorMsg";

let categories = [
    { value: 'Red', text: 'Red' },
    { value: 'White', text: 'White' },
    { value: 'Rosé', text: 'Rosé' },
    { value: 'Sparkling', text: 'Sparkling' },
    { value: 'Dessert', text: 'Dessert' },
    { value: 'Fortified', text: 'Fortified' },
]

function ProductCreate() {
    let user = React.useContext(UserContext);
    let [error, setError] = React.useState('');
    let history = useHistory();

    function createProductHandler(e) {
        e.preventDefault();

        setError('');
        let title = e.target.title.value;
        let description = e.target.description.value;
        let price = Number(e.target.price.value);
        let category = e.target.category.value;
        let image = e.target.image.value;
        let createdAt = Date.now();
        let creator = user?.id;

        try {

            if (!title || !description || !price || !image) {
                throw new Error('All fields are required!');
            }

            if (title.length < 10) {
                throw new Error('Title should be at least 10 characters!');
            }

            if (description.length < 50) {
                throw new Error('Description must be at least 50 characters long!');
            }

            createWine(title, description, price, category, image, createdAt, creator)
                .then(() => {
                    // e.target.reset();
                    history.push('/wine-catalog');
                })
                .catch(err => {
                    setError(err.message);
                })
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 3000);
        }
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
                        <textarea cols="50" rows="5" id="wine-description" name="description" />
                        <label htmlFor="wine-price">Price<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-price" name="price" />
                        <label htmlFor="wine-type">Category<span className="required">*</span></label>
                        <select name="category"  >
                            {categories.map(c => {
                                return <option
                                    value={c.value}
                                    key={c.value}>
                                    {c.text}
                                </option>
                            })}
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