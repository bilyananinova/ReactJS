import './EditProduct.css';
import React from "react";
import { useHistory } from "react-router-dom";

import { editWine, getOne } from "../../services/winesServices";

import ErrorMsg from "../error/ErrorMsg";

function EditProduct({ match }) {
    let [wine, setWine] = React.useState({});
    let [error, setError] = React.useState('');
    let history = useHistory();
    let id = match.params.wineId;

    React.useEffect(() => {
        let abortController = new AbortController();

        getOne(id)
            .then(wine => {
                setWine({ ...wine.data(), id: id });
            })
            .catch(err => {
                console.error(err);
            });

        return () => {
            abortController.abort();
            console.log('aborting... edit product');
        }

    }, [id]);

    function editProductHandler(e) {
        e.preventDefault();

        setError('');
        let title = e.target.title.value;
        let description = e.target.description.value;
        let price = e.target.price.value;
        let image = e.target.image.value;

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

            editWine(id, title, description, price, image)
                .then(() => {
                    history.push(`/wine-catalog/${id}/details`);
                })
                .catch(err => {
                    console.error(err.message)
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
            <h3>Edit Wine</h3>
            {error ? <ErrorMsg error={error} /> : ""}
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
                        <select name="type" disabled>
                            <option value={wine.category} >{wine.category}</option>
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