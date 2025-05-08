import Dropdown from "../components/dropdown.tsx";
import "./viewingPage.tsx";
import { useState } from "react";
import ViewingPage from "./viewingPage.tsx";

function ParentOfState() {
  const [formData, setFormData] = useState<Record<string, string>>({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    Number: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
    Website: "",
    GitHub: "",
    LinkedIn: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Dropdown formData={formData} onchange={handleChange} />
      <div className="vertical-line"></div>
      <ViewingPage formData={formData} />
    </div>
  );
}

export default ParentOfState;
