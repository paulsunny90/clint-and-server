import Student from "../models/models.js";

export const cratStudent = async (req, res) => {
  try {
    console.log(req.body, "body create ");
    const { name, email, rollno } = req.body

    const student = await Student.create({
      name,
      email,
      rollno: Number(rollno)
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const get = await Student.find(req.body);
    res.status(201).json(get);
  } catch (error) {
    res.status(500).json({ error: error.message })

  }
}

export const Putdata = async (req, res) => {
  try {
    const Put = await Student.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );

    res.status(201).json(Put);
  } catch (error) {
    res.status(500).json({ error: error.message })

  }
};

export const Deletedata = async (req, res) => {
  try {
    const Delete = await Student.findByIdAndDelete(
      req.params.id
    );

    res.status(201).json(Delete);
  } catch (error) {
    res.status(500).json({ error: error.message })

  }
};