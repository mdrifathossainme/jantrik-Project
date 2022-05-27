import React from "react";

const UpadeModal = ({ setIpn, user, refetch }) => {
  const hanupde = (e) => {
    e.preventDefault();

    const eompany = e.target.cname.value;
    const phone = e.target.phone.value;
    const adress = e.target.adress.value;
    const linkedin = e.target.linkedin.value;
    const github = e.target.github.value;
    const website = e.target.website.value;

    const updoc = {
      eompany,
      phone,
      adress,
      linkedin,
      github,
      website,
    };

    const url = `http://localhost:5000/user/upprofile/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
      body: JSON.stringify(updoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIpn(null);
        e.target.reset();
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="updatemoba" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="updatemoba"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form action onSubmit={hanupde}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Company Name</span>
              </label>
              <input
                name="cname"
                required
                type="text"
                placeholder="Company Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                name="phone"
                required
                type="number"
                placeholder="Phone Numbe"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                name="adress"
                required
                type="text"
                placeholder="Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Linkedin Link</span>
              </label>
              <input
                name="linkedin"
                type="text"
                placeholder="Linkedin Link"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">GitHub Link</span>
              </label>
              <input
                name="github"
                type="text"
                placeholder="GitHub Link"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Website Link</span>
              </label>
              <input
                name="website"
                type="text"
                placeholder="Website Link"
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpadeModal;
