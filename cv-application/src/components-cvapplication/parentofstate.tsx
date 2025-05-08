import Dropdown from "../components/dropdown.tsx";
import "./viewingPage.tsx";
import { useState } from "react";
import ViewingPage from "./viewingPage.tsx";

function ParentOfState() {
  const [formData, setFormData] = useState<Record<string, string>>({
    FirstName: "John",
    MiddleName: "",
    LastName: "Doe",
    Email: "doe312@gmail.com",
    Number: "1234567890",
    City: "Kansas",
    State: "Uganda",
    Zip: "23453",
    Website: "johnbabu.com",
    GitHub: "jonbabu",
    LinkedIn: "jonbabu",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="container-left">
        <Dropdown
          name="Personal Information"
          formData={formData}
          onchange={handleChange}
        />
      </div>
      <div className="vertical-line"></div>
      <ViewingPage formData={formData} />
    </div>
  );
}

export default ParentOfState;
