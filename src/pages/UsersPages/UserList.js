import React, {useState,useEffect} from 'react';

export default function UserList(){
    const [userData,setUserData] = useState([]) //State for saving userData from API
    /**
     * Fetches user data from API and updates state. 
     * 
     */
    useEffect(()=>{
        function fetchUserInfo(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) //Convert response to json type 
            .then((data) =>{
                console.log(data)
                setUserData(data) //Update userData state
            })
            .catch((error)=>console.error("Error in fetchUserInfo-UserList:",error));//Error handling
        }
        fetchUserInfo();//Call fetchUserFunction 
    },[])

    return(
        <div>
            <h6>UserList component</h6>
            <ul>
                {userData.map((userData)=>(
                    <li key={userData.id} style={{marginBottom:"20px"}}>
                        <strong>Name: </strong>{userData.name}<br />
                        <strong>UserName: </strong>{userData.username}<br />
                        <strong>Email: </strong>{userData.email}<br />
                        <strong>Address: </strong>{userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}<br />
                        <strong>Address-Geo: </strong><br/>
                        - lat: {userData.address.geo.lat}<br />
                        - lng: {userData.address.geo.lng}<br />
                        <strong>Company: </strong>{userData.company.name}, {userData.company.catchPhrase}, {userData.company.bs}<br />
                        <strong>Website: </strong>{userData.website}<br />
                    </li>
                ))}
            </ul>
        </div>
    )
}