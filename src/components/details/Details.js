import './Details.css';
import React from 'react';

import { getOne } from '../../services/winesServices';
import UserContext from "../../contexts/UserContext";

import Comments from '../comments/Comments';
import CreateComment from '../createComment/CreateComment';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';
import LikeButton from './LikeButton';

function Details({ match }) {
    let [wine, setWine] = React.useState({});
    let [comments, setComments] = React.useState([]);
    let user = React.useContext(UserContext);
    let id = match.params.wineId;

    React.useEffect(() => {
        let abortController = new AbortController();

        getOne(id)
            .then(wine => {
                if (wine.data().comments.length > 0) {
                    setComments(wine.data().comments);
                }
                setWine({ ...wine.data(), id: id });
            })
            .catch(err => {
                console.error(err);
            });

        return () => {
            abortController.abort();
            console.log('aborting... details');
        }

    }, [comments, id, wine]);

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
                                <LikeButton wine={wine} userId={user.id} />
                                <AddButton wine={wine} userId={user.id} />
                            </div>
                            : ""}

                        {user?.isLogged && user.isAdmin
                            ? <div className="details-action">
                                <LikeButton wine={wine} userId={user.id} />
                                <AddButton wine={wine} userId={user.id} />
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