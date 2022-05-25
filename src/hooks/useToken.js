import React, { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const name = user?.user?.displayName
        const img = user?.user?.photoURL

        const createUser = {
            email,
            name,
            img
        }
        console.log(email)
         if(email){
            fetch(`http://localhost:5000//user/${email}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(createUser)
            })
            .then(res=>res.json())
            .then(data=>{
                const token = data.token;
                console.log(data)
                localStorage.setItem('accessToken', token)
                 setToken(token)           
         })
        }
           
        
    }
            , [user])
    return[token]

};

export default UseToken;