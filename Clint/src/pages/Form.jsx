import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
  };

  return (
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
  );
};

export default Form;
