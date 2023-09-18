
import PropTypes from 'prop-types';
import './User.css'

const User = ({ user }) => {
    return (
        <div className="user-container">

            <h2 >{user.name}</h2>
            <div className='username'>
                <p >Username: {user.username}</p>
                <p >Email: {user.email}</p>
            </div>

            <h2 >Address</h2>
            <div className='address'>
                <p >Street: {user.address.street}</p>
                <p >Suite: {user.address.suite}</p>
                <p >City: {user.address.city}</p></div>
            <h2 >Company</h2>
            <div className='company'>
                <p >Company Name: {user.company.name}</p>
                <p >Catchphrase: {user.company.catchPhrase}</p>
                <p >BS: {user.company.bs}</p>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            suite: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired,
            geo: PropTypes.shape({
                lat: PropTypes.string.isRequired,
                lng: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
            catchPhrase: PropTypes.string.isRequired,
            bs: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
export default User;

