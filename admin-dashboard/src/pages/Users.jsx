import { useState, useEffect } from 'react';
import getUsers from '../services/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p>Loading...</p>;

    return(
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <p key={users.id}>{users.name}</p>
            ))}
        </div>
    );

};

export default Users;