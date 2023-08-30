const express =require ('express')
const cors =require ('cors')
const bodyparser =require ('body-parser')
const mysql =require ('mysql')
const allow =express()
allow.use(cors())
allow.use(bodyparser.json())
allow.use (express())
allow.use(bodyparser.urlencoded({extended:true}))
allow.use(express.static('public'))
let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"pooja@9225",
    database:"employee"
})
con.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
    })

allow.post('/regis',(request,response)=>{
    let {Ename,depname,location,manager,phoneno,email,salary,hiredate,userimg}=request.body
    let sql='insert into register (Ename,depname,location,manager,phoneno,email,salary,hiredate,password,username,userimg) values (?,?,?,?,?,?,?,?,?,?,?)'
    con.query(sql,[Ename,depname,location,manager,phoneno,email,salary,hiredate,phoneno,email,userimg],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            }
            else{
                response.send({"status":"success"})
            }
        }
        )  
    })

    allow.get('/emp_details',(request,response)=>
    {
    let sql='select * from register'
    con.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})   


allow.listen(2023,()=>{
        console.log("port is running is 2023")
        })
