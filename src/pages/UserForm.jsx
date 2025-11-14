import React from 'react'
import { toast } from 'react-toastify';



const UserForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name?.value;
    const email = form.email?.value;

    if (name) {
      toast.error('Please enter your name!')
      return
    }

    if (email) {
      toast.error('Please enter your email!')
      return
    }

    toast.success("App booked successfully!");

  }
  return (
    <div className="hero bg-base-200 py-5">

      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body"  >
            <h3 className='font-bold text-center'>Book your service now</h3>
            <fieldset className="fieldset">

              <label className="label">Name</label>
              <input name='name' type="name" className="input" placeholder="Name" required />

              <label className="label">Email</label>
              <input name='name' type="email" className="input" placeholder="Email" required />

              <button onClick={handleClick} className="btn btn-neutral mt-4">Book Now</button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UserForm