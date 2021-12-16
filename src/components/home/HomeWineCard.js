import './HomeWineCard.css';
import { Link } from "react-router-dom";

function HomeWineCard({ wine }) {

    return (
        <>
            <Link to={`/wine-catalog/${wine.id}/details`}>
                <section className="home-wine">
                    <section className="home-wine-image">
                        <img src={wine.image} alt={wine.title} />
                    </section>
                    <header className="home-wine-header">
                        <h6>{wine.title}</h6>
                    </header>
                    <section className="home-wine-content">
                        <p>{wine.description.substring(0, 50)}...</p>
                    </section>
                </section>
            </Link>
        </>
    );
}

export default HomeWineCard;