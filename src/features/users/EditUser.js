import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"


const EditUser = () => {
   const params = useParams();
   const dispatch = useDispatch();
   const users = useSelector(store => store.users)
   const navigate = useNavigate();
   const existingUser = users.filter(user => user.id === params.id);
   const { name, email } = existingUser[0]
   const [values, setValues] = useState({
      name,
      email
   });

   const handleChangeName = (e) => {
      setValues(
         { ...values, name: e.target.value }
      )
   }
   const handleChangeEmail = (e) => {
      setValues(
         { ...values, email: e.target.value }
      )
   }

   const handleEditUser = () => {
      setValues({ name: '', email: '' })
      dispatch(editUser({
         id: params.id,
         name: values.name,
         email: values.email
      }));
      navigate('/');
   }

   return (
      <div className="mt-10 max-w-xl mx-auto">
         <TextField
            label="Name"
            value={values.name}
            onChange={handleChangeName}
            inputProps={{ type: 'text', placeholder: 'Name Surname' }}
         />
         <br />
         <TextField
            label="Email"
            value={values.email}
            onChange={handleChangeEmail}
            inputProps={{ type: 'email', placeholder: 'example@mail.com' }}
         />
         <Button onClick={handleEditUser}>Edit</Button>
      </div>
   )
}

export default EditUser