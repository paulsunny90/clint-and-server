import React from 'react'

 


    
      const AdminLogin = ()=>{
         const LoginAdmin = async()=>{
            try {
                const res= await fetch(`http://localhost:5000/api/admin`,{
                method:"POST",
                headers:{"Content-Type": "application/json"}

            });
             
            } catch (error) {
                console.log(error)
                
            }
         }
        
         return (
                <div>
                    <p>daminLogin</p>
                    <button onClick={LoginAdmin}></button>
                    
                </div>
                
    
                )
      }
    

    
 

export default AdminLogin
            
    
       