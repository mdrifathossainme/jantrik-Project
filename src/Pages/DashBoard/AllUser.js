import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading'
import SingleUse from './SingleUse';
const AllUser = () => {
    const { data: users, isLoading,refetch } = useQuery('user', () => fetch('http://localhost:5000/alluser',{
      method: "GET",
      headers: {
        "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
    }).then(res => res.json()))
    if (isLoading) {
         return <Loading/>
     }
   
    return (
        <div class="overflow-x-auto">
  <table class="table table-zebra w-full">

    <thead>
      <tr>
        <th>No</th>
        <th>Email</th>
        <th>Role</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
    {users.map((user,index)=><SingleUse index={index} refetch={refetch} key={user._id} user={user}></SingleUse>)}
    </tbody>
  </table>
</div>
    );
};

export default AllUser;