import { Card } from "../components/Card/Card"
import { Header } from "../components/Header/Header"
import { cardArray } from "../constants"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img src="/image/search.svg" alt="search" className="search-btn__icon" />
                                <span className="search-btn__text">Search</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Recommendations for you</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Services</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img src="/image/side-info1.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Delivery</h5>
                                            <p className="content-side__list-item--text">
                                                Checking upon receipt and the possibility of free returning goods.
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img src="/image/side-info2.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Vehicle catalog</h5>
                                            <p className="content-side__list-item--text">
                                                Vehicle history report: mileage, owners, incident and repair information.
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img src="/image/side-info3.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Online accommodation booking</h5>
                                            <p className="content-side__list-item--text">
                                                Daily rent of apartments and houses: a wide range of options for traveling
                                                around the world.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">© LLC «Abito», 2011–2021</p>
                                        <a href="#!" className="content-side__footer--item">Pryvacy Policy</a>
                                        <a href="#!" className="content-side__footer--item">Data processing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}