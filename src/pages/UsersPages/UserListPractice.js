import React, { useState, useEffect } from 'react';

export default function UserListPractice() {
    const [userData, setUserData] = useState([])//State for saving the user data from API 
    /*
    *Fetch the data from API when the UserListPractice.js is rendering
    *
    */
    useEffect(() => {
        function fetchData() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => {
                    console.log("Fetch Data Success: ", data)
                    setUserData(data)
                })
                .catch((error) => console.error("Error: fetchData function, userListPractice,", error))

        }
        fetchData()//Call fetchData function when useEffect is working.

    }, [])
    return (
        <div>
            <h6>UserListPractice</h6>
            <ul>
                {userData.map((userData) => (
                    <li key={userData.id} style={{ marginBottom: "20px" }}>
                        <strong>Name: </strong>{userData.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}