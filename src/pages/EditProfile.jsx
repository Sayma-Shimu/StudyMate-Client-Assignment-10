import { use } from "react"
import { AuthContext } from "../components/provider/AuthProvider"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"


const EditProfile = () => {

    const { user, updateUser, setUser } = use(AuthContext)
    const Navigate = useNavigate()

    const handleUpdate = (e) => {

        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;

        const updatedName = name || user?.displayName;
        const updatedPhoto = photo || user?.photoURL;


        updateUser({ displayName: updatedName, photoURL: updatedPhoto }).then(() => {
            setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
           Navigate('/profile');
            toast.success('Profile Updated!')
        })
        .catch(err=>{
            alert(err.message)
        })

     }


    return (

        <div className='flex justify-center items-center min-h-screen'>
          <title>Edit Profile</title>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">



                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className='font-semibold text-2xl text-center '>Edit Your Profile</h1>
                        <form onSubmit={handleUpdate} className="card-body">

                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />

                                <label className="label">Photo URL</label>
                                <input name='photo' type="text" className="input" placeholder="Photo URL" />


                                <button type='submit' className="btn bg-blue-800 hover:bg-blue-500 mt-4 text-white">Update Information</button>


                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default EditProfile