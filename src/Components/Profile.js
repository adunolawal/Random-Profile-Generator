import { useEffect, useState } from "react";

const Profile = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [image, setImage]= useState("")
    const [gender, setGender] = useState("")

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () =>{
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then(data => {
                
                let profile = data.results[0].name.first
                let lastName = data.results[0].name.last
                let emaily = data.results[0].email 
                let age = data.results[0].dob.age
                let phone = data.results[0].phone
                let image = data.results[0].picture.large
                let gender = data.results[0].gender

                setFirstName(profile)
                setLastName(lastName)
                setEmail(emaily)
                setAge(age)
                setPhoneNo(phone)
                setImage(image)
                setGender(gender)
            })
    }
    const handleClick = ()=>{
        getProfile()
    }

    return ( 
        <div>
            <img src={image} alt="" />
            <p>FirstName: {firstName}  </p>
            <p>Last Name: {lastName} </p>
            <p>Gender: {gender} </p>
            <p>Email: {email}</p>
            <p>Age:  {age} </p>
            <p> PhoneNumber: {phoneNo} </p>
            <button onClick={handleClick}>Generate Profile</button>
        </div>
     );
}
 
export default Profile;