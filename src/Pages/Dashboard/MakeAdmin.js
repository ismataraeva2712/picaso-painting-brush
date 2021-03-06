import React from 'react';
import Loading from './../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';
import {

  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://safe-coast-58270.herokuapp.com/user', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }

  }).then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>All users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>

              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => <MakeAdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></MakeAdminRow>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;