import { useUsers } from '../hooks/useUsers';
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const { users, isLoading, error } = useUsers();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!users) return <div>Error: No users</div>;
    
    return (
        <div className="user-list">
            {users.map((user) => (
                <div key={user.id} className="user-card">
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                    <button onClick={() => navigate(`/user/${user.id}`)}>See Posts</button>
                </div>
            ))}
        </div>
    );
};
