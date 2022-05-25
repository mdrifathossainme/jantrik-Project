import React, { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email

        const createUser = {
            email
        }
        console.log(user,createUser)
         if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(createUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)      
         })
        }
           
        
    }
            , [user])
    return[token]

};

export default UseToken;