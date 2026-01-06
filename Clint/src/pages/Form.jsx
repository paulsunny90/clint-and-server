import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    const [Student,setStudent]=useState([]);

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
            const res = await fetch("http://localhost:5000/api/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit");

            alert("Student registered successfully!");
            setFormData({ name: "", email: "", rollno: "" });
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
        getStudent();
    };
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
                    </tr>
                    ))}
                </tbody>
            </table>
       </div >
  );
};

export default Form;
