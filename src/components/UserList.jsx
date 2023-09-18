import { useEffect, useState } from "react";
import User from "../components/User";
import LoadingPage from "./LoadingPage";
import PropTypes from "prop-types";
import axios from "axios";

import './UserList.css'


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");

                if (response.status === 200) {
                    setUsers(response.data);
                } else {
                    throw new Error(`Failed to fetch data with status: ${response.status}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="user-list">
            <h1>User List</h1>
            {loading && <LoadingPage />}
            {error && <p className="error">{error}</p>}
            <div>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array,
};

export default UserList;
