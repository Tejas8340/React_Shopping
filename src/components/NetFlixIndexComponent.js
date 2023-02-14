import './NetFlixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';
import NetflixRegiserComponent from './NetflixRegiserComponent';
import NetflixFooterComponent from './NetflixFooterComponent';

function NetFlixIndexComponent() {
    return (
        <div className="container-fluid">
            <div className='box'>
                <header>
                    <NetflixHeaderComponent />
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMainComponent />
                        <NetflixRegiserComponent />
                    </main>
                </section>
                <footer className='m-2 p-2'>
                        <NetflixFooterComponent />
                    </footer>
            </div>
        </div>
    )
}
export default NetFlixIndexComponent;