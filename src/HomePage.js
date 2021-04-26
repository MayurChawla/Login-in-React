import React from 'react';

const HomePage = ({userLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={userLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default HomePage;