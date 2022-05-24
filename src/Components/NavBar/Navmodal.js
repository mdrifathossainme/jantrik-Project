import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../Pages/firebase,init';

const Navmodal = ({ onpeMobal }) => {
   
    return (
        <div className='t-0 w-28'>

            <input type="checkbox" id="onpenModal" class="modal-toggle" />
            <label for="onpenModal" class="modal moda-endmodal-open sm:modal-middle">
            <label class="modal-box   w-[30px]" for="navModal">

                    <button onClick={() => signOut(auth)}>Log Out</button>
                    <p>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed neque consequatur ea. Nulla molestiae minus voluptatum eos quam non quas nam perferendis sunt officia. Cumque quisquam reiciendis quasi dolorem commodi.
                   </p>
            </label>
            </label>



        </div>
    );
};

export default Navmodal;