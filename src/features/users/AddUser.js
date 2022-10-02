import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [values, setValues] = useState({
      name: '',
      email: ''
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

   const handleAddUser = () => {
      setValues({ name: '', email: '' })
      dispatch(addUser({
         id: uuidv4(),
         name: values.name,
         email: values.email
      }))
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
         <Button onClick={handleAddUser}>Submit</Button>
      </div>
   )
}

export default AddUser