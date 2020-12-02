import './home.css';




const Home = () => {
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
                    <img src="/images/heroImg3.jpg" alt="leftImg" />
                </div>
                <div className="rightContent">
                    <p>share,connect,chat,competitions and what more!. Get your exposure, join our <a href="/getStarted">stikboard</a> family now.</p>
                </div>
            </section>


            <section className="section1">

                <div className="rightContent">
                <p>share,connect,chat,competitions and what more!. Get your exposure, join our <a href="/getStarted">stikboard</a> family now.</p>

                </div>
                <div className="leftContent">
                    <img src="/images/heroImg2.jpg" alt="leftImg" />
                </div>
            </section>
        </main>
    )
}

export default Home;




