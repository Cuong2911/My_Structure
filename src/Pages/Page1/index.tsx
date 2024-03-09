import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <button>
                <NavLink to="/Page2">Page 2</NavLink>
            </button>
            <button>
                <NavLink to="/Page3">Page 3</NavLink>
            </button>
        </div>
    );
};

export default index;
