import React from 'react';
import { toast } from 'react-toastify';

const SingleUse = ({ user, index, refetch }) => {
    const{email}=user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method:"PUT"
        })
        .then(res=>res.json())
            .then(data => {
                console.log(data)
            toast.success('Amdin Done')
                refetch()
        })
    }
    return (
         <tr>
            <th>{ index+1}</th>
            <td>{user.email}</td>
            <td>{ user.role? <> <button className='btn btn-success  btn-xs'> Admin</button></>:"User"}</td>
            <td>{user.role === "admin" ? ""    
                : <><button onClick={makeAdmin} className='btn btn-outline btn-success btn-xs'> Make Admin</button></>}</td>
      </tr>
    );
};

export default SingleUse;