import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <Button variant="primary">
                <NavLink to="/Page2" className="text-white">
                    Page 2
                </NavLink>
            </Button>{' '}
            <button>
                <NavLink to="/Page3">Page 3</NavLink>
            </button>
            <div>
                <DropdownButton variant="success" title="Explore" size="lg">
                    <Dropdown.Item> Courses </Dropdown.Item>
                    <Dropdown.Item> Practice </Dropdown.Item>
                    <Dropdown.Item> Offers </Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
};

export default index;
