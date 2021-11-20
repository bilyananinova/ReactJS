import './Home.css';

function Home() {
    return (
        <>
            <section className="home-wrapper">
                <div className="banner" />
                <section className="last-articles">

                    <a href="#">
                        <section className="home-article">
                            <section className="home-article-image">
                                <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            </section>
                            <header className="home-article-header">
                                <h6>Title</h6>
                            </header>
                            <section className="home-article-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt!</p>
                            </section>
                        </section>
                    </a>

                    <a href="#">
                        <section className="home-article">
                            <section className="home-article-image">
                                <img src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </section>
                            <header className="home-article-header">
                                <h6>Title</h6>
                            </header>
                            <section className="home-article-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt!</p>
                            </section>
                        </section>
                    </a>

                    <a href="#">
                        <section className="home-article">
                            <section className="home-article-image">
                                <img src="https://images.unsplash.com/photo-1566995541428-f2246c17cda1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                            </section>
                            <header className="home-article-header">
                                <h6>Title</h6>
                            </header>
                            <section className="home-article-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt!</p>
                            </section>
                        </section>
                    </a>

                </section>

            </section>
        </>
    );
}

export default Home;
