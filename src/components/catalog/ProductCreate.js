import './ProductCreate.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../services/winesServices";

function ProductCreate() {
    let history = useHistory();

    function createProductHandler(e) {
        e.preventDefault();

        let title = e.target.title.value;
        let description = e.target.description.value;
        let price = e.target.price.value;
        let type = e.target.type.value;
        let image = e.target.image.value;
        let createdAt = Date.now();

        createProduct(title, description, price, type, image, createdAt)
            .then(() => {
                e.target.reset();
                history.push('/wine-catalog');
            })
    }

    return (
        <>
            <h3>New Wine</h3>
            <div className="form-wrapper create-product">
                <section className="form-section create-product-section">
                    <form className="create-product-form" onSubmit={(e) => createProductHandler(e)}>
                        <label htmlFor="wine-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-title" name="title" required />
                        <label htmlFor="wine-description">Description<span className="required">*</span></label>
                        <textarea rows="4" cols="50" rows="5" id="wine-description" name="description"></textarea>
                        <label htmlFor="wine-price">Price<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-price" name="price" required />
                        <label htmlFor="wine-type">Type<span className="required">*</span></label>
                        <select name="type">
                            <option value="red">Red</option>
                            <option value="white">White</option>
                            <option value="rose">Rose</option>
                        </select>
                        <label htmlFor="wine-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="wine-img" name="image" required />
                        <button type="submit" className="create-product-button" >Create</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default ProductCreate;