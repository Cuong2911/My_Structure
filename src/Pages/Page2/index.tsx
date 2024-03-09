import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <button>
                <NavLink to="/">Page 1</NavLink>
            </button>
            <button>
                <NavLink to="/page3">Page 3</NavLink>
            </button>
        </div>
    );
};

export default index;
