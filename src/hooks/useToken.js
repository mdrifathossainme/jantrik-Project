import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email

        const createUser = {
            email
        }
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
                const token = data.token  
                localStorage.setItem('asscessToken', token)

                setToken(token)   
              
         })
        }
           
        
    }
            , [user])
    return[token]

};

export default useToken;