import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function TablePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Navigate to login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]); // Depend on user and navigate to ensure it runs when either changes

  if (!user) {
    return <div>Loading...</div>; // Optionally show a loading state while the user is being fetched
  }

  return (
    <div>
      <h1>Welcome to the User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
