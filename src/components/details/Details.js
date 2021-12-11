import './Details.css';
import React from 'react';

import { getOne } from '../../services/winesServices';
import UserContext from "../../contexts/UserContext";

import Comments from '../comments/Comments';
import CreateComment from '../createComment/CreateComment';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

function Details({ match }) {
    let [wine, setWine] = React.useState({});
    let [comments, setComments] = React.useState([]);
    let user = React.useContext(UserContext);
    let id = match.params.wineId;

    React.useEffect(() => {
        getOne(id)
            .then(wine => {
                setWine({ ...wine.data(), id: id });
                setComments(wine.data().comments)
            })
    }, [comments, id]);

    return (
        <>
            <section className="details-wrapper">
                <section className="details-img">
                    <img src={wine.image} alt={wine.title} />
                </section>
                <section>
                    <div className="details">
                        <header className="details-header">
                            <h5>{wine.title}</h5>
                            <p>Category: <span className="details-type">{wine.category}</span></p>
                        </header>

                        <span className="details-price">{wine.price}$</span>
                        <p>{wine.description}</p>

                        {user?.isLogged && !user.isAdmin
                            ? <div className="details-action">
                                <AddButton />
                            </div>
                            : ""}

                        {user?.isLogged && user.isAdmin
                            ? <div className="details-action">
                                <AddButton />
                                <EditButton id={id} />
                                <DeleteButton wine={wine} />
                            </div>
                            : ""}


                    </div>
                </section>
            </section>

            <Comments comments={comments} />

            {
                user?.isLogged
                    ? <CreateComment id={id} />
                    : ""
            }
        </>
    )
}

export default Details;