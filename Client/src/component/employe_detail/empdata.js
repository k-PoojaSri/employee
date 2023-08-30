import React from "react";
import { CSVLink } from "react-csv";
import { useState,useEffect } from "react";
export function Emp(){
    const [employe , setEmploye]=useState([])
    useEffect(()=>{ 
    fetch("http://localhost:2023/emp_details")
    .then(info=>info.json())
    .then(data=>setEmploye(data))
})
 const employedata = [
    { label: "Empno", key: "Empno" },
    { label: "Ename", key: "Ename" },
    { label: "Depname", key: "depname" },
    { label: "Location", key: "location" },
    { label: "Manager", key: "manager" },
    { label: "Phoneno", key: "phoneno" },
    { label: "Email", key: "email" },
    { label: "Salary", key: "salary" },
    { label: "Hiredate", key: "hiredate" },
    { label: "Password", key: "password" },
    { label: "Username", key: "username" },
    { label: "Userimg", key: "userimg" }


  ];
return(
    <>
    
   <div className="p-5">
        <table className="table border table-dark">
            <thead className="table ">
                <tr>
                <th>Empno</th>
                <th>Ename</th>
                <th>Depname</th>
                <th>Manager</th>
                <th>Phoneno</th>
                <th>Email</th>
              
                </tr>
            </thead>
          
    {employe.map((value,index)=>(
        <>
      
           <tbody className="table">
            <tr>
                <td>{value.Empno}</td>
                <td>{value.Ename}</td>
                <td>{value.depname}</td>
                <td>{value.manager}</td>
                <td>{value.phoneno}</td>
                <td>{value.email}</td>
                
              
                
              
            </tr>
           </tbody>
           </>
    ))}
        </table>
    </div>
<div className="text-center">
    <CSVLink data={employe} headers={employedata} filename={"empdetails.csv"}>
       <button className="register_btn btn text-white "> Download me</button> 
    </CSVLink>;
    </div>
    </>
);
}