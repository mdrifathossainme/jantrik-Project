import React from 'react';
import { toast } from 'react-toastify';

const SingleUse = ({ user, index, refetch }) => {
    const{email}=user
    const makeAdmin = () => {
        fetch(`https://immense-plains-72444.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
        "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only Admin Make A Admin')
                }
                return res.json()
            }
               )
            .then(data => {
                if (data.modifiedCount > 0) {
                 toast.success('Admin Done')
                refetch()  
               }
                
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