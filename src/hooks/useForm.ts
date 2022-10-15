import { useState } from 'react'
import { omit } from 'lodash'


const useForm = (callback: { (): void; (): void; }) => {

   const [values, setValues] = useState<any>({});
   const [errors, setErrors] = useState<any>({});

   const validate = (event: any, name: string, value: string | any) => {
      switch (name) {
         case 'username':
            if (value.length <= 4) {
               setErrors({
                  ...errors,
                  username: 'Username at least have 5 letters'
               })
            } else {
               let newObj = omit(errors, "username");
               setErrors(newObj);
            }
            break;

         case 'email':
            if (
               !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
            ) {
               setErrors({
                  ...errors,
                  email: 'Enter a valid email address'
               })
            } else {
               let newObj = omit(errors, "email");
               setErrors(newObj);
            }
            break;

         case 'password':
            if (
               !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
            ) {
               setErrors({
                  ...errors,
                  password: 'Password should least 8 characters and uppercase,lowercase and numbers'
               })
            } else {

               let newObj = omit(errors, "password");
               setErrors(newObj);

            }

            break; case 'confirmPassword':
            if (
               values.password !== value
            ) {
               setErrors({
                  ...errors,
                  confirmPassword: 'Password Does Not Match'
               })
            } else {

               let newObj = omit(errors, "confirmPassword");
               setErrors(newObj);

            }
            break;

         default:
            break;
      }
   }

   const handleChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
      event.persist();
      let name = event.target.name;
      let val = event.target.value;
      validate(event, name, val);
      setValues({
         ...values,
         [name]: val,
      })
   }

   const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
         callback();
      } else {
         alert("Please Fill All Fields");
      }
   }

   return {
      values,
      errors,
      handleChange,
      handleSubmit
   }
}

export default useForm