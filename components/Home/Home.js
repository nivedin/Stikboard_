import { useEffect } from 'react';
import { isAuth } from '../../actions/auth'
import Router from "next/router";

import './home.css';




const Home = () => {


    useEffect(() => {
        if (isAuth()) {
            isAuth().role === "admin" ? Router.push(`/admin`) : Router.push(`/user`)
        }
    }, [])

    return (
        <main>
            <div className="mainContent">
                <div className="heroText">
                    <h1 className="heroHead">
                        Not your usual
                        social network!
                        </h1>
                    <p className="heroPara">
                        Share your creation to the world,connect with similar talents and participate in exciting competitions.
                        </p>
                    <a href="/getStarted" className="ctaBtn">Get Started</a>
                </div>
                <div className="heroBg">
                    <img src="/images/heroImg.png" alt="heroImg" />
                </div>
            </div>

            <section className="section1">


                <div className="leftContent">
                    <img src="/images/heroImg2.jpg" alt="leftImg" />
                </div>
                <div className="rightContent">
                    <p>Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay.</p>

                </div>
            </section>

            <section className="section1">
                <div className="rightContent">
                    <p>share, connect, chat, competitions and what more!.Get your exposure, join our <a href="/getStarted">Stikboard</a> family now.</p>
                </div>
                <div className="leftContent">
                    <img src="/images/heroImg3.jpg" alt="leftImg" />
                </div>

            </section>



        </main>


    )
}

export default Home;




