import React, { useState } from "react";
import { toast } from "react-toastify";
import ContactModal from "./ContactModal";

const ContactUs = () => {
  const [onpeModal, setOpenModal] = useState(false);

  const handleContacusSubmut = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thank You ,For your Message");
    setOpenModal(true);
  };

  return (
    <>
      <div
        style={{
          background: `url(https://i.ibb.co/F8bJvDG/istockphoto-1312566254-170667a.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center center",
        }}
        className="h-full w-full"
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.652)",
          }}
          className="w-full h-full"
        >
          <div className=" h-full  justify-center flex items-center ">
            <form onSubmit={handleContacusSubmut}>
              <div class="card  shadow-2xl bg-base-100">
                <div class="card-body">
                  <div className="flex gap-4 ">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        class="input input-bordered lg:w-[300px]"
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="email"
                        class="input input-bordered lg:w-[300px]"
                      />
                    </div>
                  </div>
                  <textarea
                    required
                    className="input input-bordered mt-4 h-28"
                    rows="100"
                    placeholder="Your Message"
                  ></textarea>

                  <div class="form-control mt-6">
                    <button class="btn btn-primary"> send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {onpeModal === true && <ContactModal />}
    </>
  );
};

export default ContactUs;
