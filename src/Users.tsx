
import React, { useState, useEffect } from 'react'

interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: string;
}

const Users = () => {
  const apiUrl = "https://localhost:7161/ECommerce/GetUsers"
  const [apiData, setApiData] = useState<User | null>(null);
  
  useEffect(()=>
  {
    fetchDataApi()
  },[]
  )
  const fetchDataApi = async () =>
  {
    try{
      const response = await fetch (apiUrl);
      const data = await response.json();
      setApiData(data);
      console.log(data)
    }
    catch(error)
  {
    console.error("No data found", error)
  }
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Imie</th>
          </tr>
        </thead>
        <tbody>
          {apiData && apiData.map((user,id)=>(
            <tr key={id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Users