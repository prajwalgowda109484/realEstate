import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homepage'>

            <div className="textContainer">
                <div className="wrapper"> <h1 className='title'>
                    Discover Your Perfect Stay: Unique Homes and Experiences Await</h1>
                    <p>Find Your Home Away from Home. Unforgettable
                        Stays and Unique Experiences Await You.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h2>20+</h2>
                            <h3>Years of creating memorable stays</h3>
                        </div>




                        <div className="box">
                            <h2>2M+</h2>
                            <h3>User & Owners</h3>
                        </div>



                        <div className="box">
                            <h2>2000+</h2>
                            <h3>Listings</h3>
                        </div>

                    </div>
                </div>

            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>

    )
}

export default HomePage 