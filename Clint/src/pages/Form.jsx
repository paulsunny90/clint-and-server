import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    const [Student,setStudent]=useState([]);
    const [Edit,setEdit]=useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const getStudent=async()=>{
        const res=await fetch('http://localhost:5000/api/student')
        const data=await res.json();
        setStudent(data);
    }

    const register = async (e) => {
    e.preventDefault();

    try {
        const url = Edit
            ? `http://localhost:5000/api/student/${Edit}`
            : "http://localhost:5000/api/student";

        const method = Edit ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed");

        alert(Edit ? "Student updated!" : "Student registered!");

        setFormData({ name: "", email: "", rollno: "" });
        setEdit(null);
        getStudent();
    } catch (error) {
        alert(error.message);
    }
};

    
    const deleteStudent =async(id)=>{
        if (!window.confirm("Are you sure you want to delete?")) return;

        try{
            const res= await fetch(`http://localhost:5000/api/student/${id}`,{
                 method:"DELETE",
                 headers:{"Content-Type": "application/json" },

            })
            getStudent();

        }catch(error){
            alert("delete failed");
        }
    };
    
    const editStudent=(students)=>{
        setFormData({name: students.name, 
            email: students.email,
            rollno: students.rollno
         });
         setEdit(students._id);
    }
    

    


    useEffect(()=>{
          getStudent();
    },[]);

    return (
        <div>
            <form onSubmit={register}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Roll No</label>
                <input
                    type="text"
                    name="rollno"
                    value={formData.rollno}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                    </tr>
                </thead>

                <tbody>
                    {Student.map((s)=>(
                        
                        <tr key={s._id}>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>{s.rollno}</td>
                        <td>
                            <button onClick={() => editStudent(s)}>Edit</button>{" "}
                            <button onClick={() => deleteStudent(s._id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
       </div >
  );
};

export default Form; 