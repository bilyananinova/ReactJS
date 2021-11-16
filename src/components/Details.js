import './Details.css';

import React from 'react';

import { getOne } from '../services/winesServices';

function Details({ id }) {
    let [product, setProduct] = React.useState({});

    React.useEffect(() => {

        getOne(id)
        .then(wine => {
            setProduct(wine.data());
        })
        
    }, [])

    console.log(product);
    return (
        <>
            <section className="details-wrapper">
                <section className="details-img">
                    <img src={product.img} />
                </section>
                <section>
                    <div className="details">
                        <header>
                            <h5>{product.title}</h5>
                        </header>
                        <span className="details-price">{product.price}$</span>
                        <p>{product.description}</p>
                        <div className="details-action">
                            <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                        </div>
                    </div>
                </section>
            </section>

            <section className="commentSection">
                <h4>Comments</h4>
                <div className="comment">
                    <p><span className="author">Name</span> - <span className="date">10.10.2021</span></p>
                    <p><span className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span></p>
                </div>
            </section>

            <form className="commentForm">
                <h5>Add a review</h5>
                <label htmlFor="author">From:</label>
                <input type="text" name="author" id="author" defaultValue="" />
                <label htmlFor="content">Comment:</label>
                <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2"></textarea>
                <input type="submit" defaultValue="Create comment" />
            </form>
        </>
    )
}

export default Details;