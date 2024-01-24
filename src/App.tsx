import Navigation from "./routes/Navigation";
import Header from "./views/layout/header/Header";
import React from "react";
import Footer from "./views/layout/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <div className="App">

                <div className={'frame1000004350'}>
                    <Header/>
                    <div className={'hero form-container'}>
                    <Navigation/>
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    );
}

export default App;
