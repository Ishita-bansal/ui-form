import React,{useState} from "react";
import "./forms.css";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    password:'',
    confirmpass:'',
    age:'',
    gender:'',
    interests:[],
    birthdate:'',
}



// const validationSchema = yup.object().shape({
    
// })
function Formformik(){
    const [errors,setErrors] = useState();


    const isValidEmail = (email)=>{
        const emailregex =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      
        return emailregex.match(email)
    }

    const validateForm = () =>{
       let newerrors = {};

       if(!values.firstname){
        newerrors.firstname = "First Name is required"
       }
       if(!values.lastname){
        newerrors.lastname = "Last Name is required"
       }
       if(!values.email){
        newerrors.email = "Email is required"
       }
       else if(!isValidEmail(values.email)){
           
       }

    }
    

    const onSubmit = (values) =>{
        console.log(values);
     }
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        // validationSchema:validationSchema
    });
    const {values,handleSubmit,setFieldValue} = formik;
    
    
    const handlecheckbox = (e) =>{
        const {name , checked} = e.target;
        let updateInterests = [...values.interests];
        console.log("updateInterests=====>",updateInterests)
        if(checked){
         updateInterests.push(name);
        }
        else{
         updateInterests = updateInterests.filter(
             (interest) => interest !== name
         );
        }
        setFieldValue("interests", updateInterests)
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
            <div className="inputform">
               <label>First Name:</label>  
               <input 
                 type="text"
                 name="firstname"
                 value={values.firstname}
                 placeholder="Enter your first name"
                 onChange={(e)=>setFieldValue("firstname",e.target.value)}
               />  
            </div>
            <div className="inputform">
               <label>Last Name:</label>  
               <input 
                 type="text"
                 name="lastname"
                 value={values.lastname}
                 placeholder="Enter your last name"
                 onChange={(e)=>setFieldValue("lastname",e.target.value)}
               />  
            </div>
            <div className="inputform">
               <label>Email:</label>  
               <input 
                 type="email"
                 name="email"
                 value={values.email}
                 placeholder="Enter your email"
                 onChange={(e)=>setFieldValue("email",e.target.value)}
               />  
            </div >
            <div className="inputform">
               <label>Phone Number:</label>  
               <input 
                 type="text"
                 name="phonenumber"
                 value={values.phonenumber}
                placeholder="Enter your phone number"
                onChange={(e)=>setFieldValue("phonenumber",e.target.value)}
               />  
            </div>
            <div className="inputform">
               <label>Password:</label>  
               <input 
                 type="password"
                 name="password"
                 value={values.password}
                 placeholder="Enter your password"
                 onChange={(e)=>setFieldValue("password",e.target.value)}
               />  
            </div>
            <div className="inputform">
               <label>Confirm Password:</label>  
               <input 
                 type="password"
                 name="confirmpass"
                 value={values.confirmpass}
                 placeholder="Enter your confirm password"
                 onChange={(e)=>setFieldValue("confirmpass",e.target.value)}
               />  
            </div>
            <div className="inputform">
                <label>Gender</label>
                <select name="gender" value={values.gender} onChange={(e)=>setFieldValue("gender",e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="inputforms">
                <label>Interests</label>
                <label>
                    <input
                    type="checkbox"
                    name="coding"
                    checked={values.interests.includes("coding")} 
                    onChange={handlecheckbox}
                    />
                    Coding
                </label>
                <label>
                    <input
                    type="checkbox"
                    name="sports"
                    checked={values.interests.includes("sports")} 
                    onChange={handlecheckbox}
                    />
                    sports
                </label>
                <label>
                    <input
                    type="checkbox"
                    name="reading"
                    checked={values.interests.includes("reading")} 
                    onChange={handlecheckbox}
                    />
                    reading
                </label>
            </div>
            <div > 
                <label>Date of birth</label>
                <input type="date"
                 name="birthdate"
                 value={values.birthdate}
                 placeholder = "Enter your date of birth"
                 onChange={(e)=>setFieldValue("birthdate",e.target.value)}
                />
            </div>
           <div>
            <button type="submit">Submit</button>
            </div> 
           </form>
        </>
    )
}

export default Formformik;