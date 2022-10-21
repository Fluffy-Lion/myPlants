import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>myPlants</h1>
                </Link>
                <Link to='/add-plant'>
                    <h1>add plant</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar