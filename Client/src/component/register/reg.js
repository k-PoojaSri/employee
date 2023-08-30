import React from "react";
import axios from "axios";
import './reg.css'
import Uimg from './OIP.jpeg'
import { Link } from "react-router-dom";
export function Registration(){
    function handleregister(event){
        event.preventDefault();
        var Ename=document.getElementById("Ename").value
        var depname=document.getElementById("depname").value
        var location=document.getElementById("location").value
        var manager=document.getElementById("manager").value
        var phoneno=document.getElementById("phoneno").value
        var email=document.getElementById("email").value
        var salary=document.getElementById("salary").value
        var hiredate=document.getElementById("hiredate").value
        var userimg=document.getElementById("userimg").value
        var key={
            Ename:Ename,
            depname:depname,
            location:location,
            manager:manager,
            phoneno:phoneno,
            email:email,
            salary:salary,
            hiredate:hiredate,
            userimg:userimg
        }
        if(Ename===''){
            alert('Select the Ename')
        }
        
        else if(depname==''){
            alert('select the depname')
        }
        else if(location===''){
            alert("phone is empty")
        }
        else if(manager===''){
            alert("phone is empty")
        }
        else if(phoneno===''){
            alert("phone is empty")
        }
        else if(email===''){
            alert("email is empty")
        }
        else if(salary===''){
            alert("phone is empty")
        }
        else if(hiredate===''){
            alert("phone is empty")
        }
        else if(userimg===''){
            alert("insert the img")
        }

        else{
            axios.post("http://localhost:2023/regis",key)
            .then(function(res){
                if(res.data.status==="error"){
                    alert("your data is not inserted")
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/empdata'
                }
            })
        }
    }
      
    
    return(
        <>
        <div className="reg_bg">
            <h1 className="reg_h1 text-center pb-3 text-white">Registration form</h1>
            <div className="  container-fluid row bg-white p-5 reg_bg2">
                <div className="col-lg-4 text-center">
                     <img src={Uimg} className="col-9 col-lg-12 col-md-5  "/>
                </div>
                
               
                    
                        <form onSubmit={handleregister} className="row col-lg-7 reg_form " >
                            
                            <div className="col-lg-6 my-auto text-center p-1 ">
                                <select id="depname"  name="depname"  className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5">
                                    <option>Select the job title</option>
                                    <option value="Front End Developer"> Front End Developer</option>
                                    <option value="Back End Developer">Back End Developer</option>
                                    <option value="Tester">Tester</option>
                                    <option value="UI & UX Designer">UI & UX Designer</option>
                                   
                                </select> <br />
                                <input type="text" name="Ename" id="Ename" placeholder="enter the Ename" className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5" /> <br/>
                                <input type="text" name="location" className="mb-3  px-3 py-2 col-12 col-lg-7 col-md-5"  id="location" placeholder="enter the location" /> <br/>
                                <input type="text" name="manager" className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5"  id="manager" placeholder="enter the manager" /> <br/>
                                <input type="text" name="phoneno" className="mb-4 px-3 py-2 col-12 col-lg-7 col-md-5"  id="phoneno" placeholder="enter the phoneno" /> <br/>
                            
                            </div>
                            <div className="col-lg-6 my-auto text-center">
                                
                                <input type="email" name="email" id="email" className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5"  placeholder="enter the email" /><br/>
                                <input type="text" name="salary" className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5"  id="salary" placeholder="enter the salary" /> <br/>
                                <input type="date" name="hiredate" className="mb-3 px-3 py-2 col-12 col-lg-7 col-md-5"  id="hiredate" placeholder="enter the hiredate" /> <br/>
                                <input type="text" name="userimg" className="mb-4 px-3 py-2 col-12 col-lg-7 col-md-5"  id="userimg" placeholder="enter the Userimg" /> <br/>
                                <button type="submit" className="mb-3 col-12 col-lg-7 col-md-5 btn reg_btn text-white ">submit</button>
                                
                            </div>
                        </form>
                    <div className="text-center ">
                        <Link to="/empdata"><button className="btn btn-success">View Data</button></Link>
                    </div>
                
               
            </div>
        </div>
        </>
    );
}