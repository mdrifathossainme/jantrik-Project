import React, { useState } from 'react';

const DeletedModal = ({ deleteModald, setDetedModal,refetch}) => {
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [reset,setReset]=useState(false)

    const handleDeleted = (id) => {
        console.log(id)
        const url=`http://localhost:5000/orderdeleted/${id}`
        fetch(url, {
           method:"DELETE" 
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) { 
            setDetedModal(null)
                
            }
            })
     
 
    }
    const handleDeletedConfirm = (e) => {
        const value = e.target.value
        if (value ===deleteModald.productname) {
            setDeleteConfirm(true)
            e.target.reset()
           
        }
        else {
            setDeleteConfirm(false) 
            e.target.reset()
        }
          
         refetch()
     }

    return (
     <>   
    

    <input type="checkbox" id="deletedModal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h2>Are You Sure you Deleted <span className='text-red-500'>{deleteModald.productname}</span></h2>
        <h6>Place type <span className='font-semibold'>{deleteModald.productname}</span></h6>
        <input onChange={handleDeletedConfirm} type="text" className='border-2 lg:w-full lg:h-12 px-2 border-gray-300 mt-4' />
        <div class="modal-action">
        <label  disabled={deleteConfirm===false} onClick={()=>handleDeleted(deleteModald._id)}  class="btn bg-red-500 hover:bg-red-500 text-white ">Deleted</label>
        <label  onClick={()=>setReset(!reset)} for="deletedModal" class="btn bg-slate-400">Cancel</label>
        </div>
    </div>
    </div>
        </>
    );
};

export default DeletedModal;