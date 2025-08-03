import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';

const ManageUser = () => {


  const axiosSecure = useAxiosSecure();
  const [roleFilter, setRoleFilter] = useState('');

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ['users', roleFilter],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?role=${roleFilter}`);
      return res.data;
    },
  });
  if(isLoading){
    return <Spinner></Spinner>
  }

  const handleRoleChange = async (id, newRole) => {
    try {
      await axiosSecure.patch(`/users/${id}/role`, { role: newRole });
      Swal.fire('Success', 'User role updated', 'success');
      refetch();
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to update role', 'error');
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'User will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete!',
    });

    if (confirm.isConfirmed) {
      try {
        await axiosSecure.delete(`/users/${id}`);
        Swal.fire('Deleted!', 'User has been removed.', 'success');
        refetch();
      } catch (err) {
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    }
  };


  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
          <h2 className="md:text-2xl text-md font-bold">Manage Users</h2>
          <select
            className="select select-bordered w-full md:w-auto"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <div className="dropdown dropdown-bottom">
                      <div tabIndex={0} role="button" className="btn btn-sm">
                        {u.role || 'user'}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                      >
                        {['user', 'moderator', 'admin'].map((role) => (
                          <li key={role}>
                            <button
                              onClick={() => handleRoleChange(u._id, role)}
                              
                            >
                              {role}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="text-right">
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleDelete(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-400">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;




