import "../CSS/input-container.css";
import "../CSS/viewingPage.css";
import React, { useState } from "react";

interface PersonalInputsProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PersonalInputs({
  type,
  name,
  placeholder,
  required,
  onchange,
}: PersonalInputsProps) {
  return (
    <>
      <div
        className={name}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor={name} className="input-label">
          {name.charAt(0).toUpperCase() + name.slice(1)}:
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onchange}
        />
      </div>
    </>
  );
}

function PersonalInputsWithLabel() {
  const [firstname, setname] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setname(e.target.value);
  }

  const personalInputsArray = [
    { type: "text", name: "FirstName", required: true },
    { type: "text", name: "MiddleName", required: false },
    { type: "text", name: "LastName", required: true },
    { type: "email", name: "Email", required: true },
    { type: "number", name: "Number", required: true },
    { type: "text", name: "Address", required: true },
    { type: "text", name: "City", required: true },
    { type: "text", name: "State", required: true },
    { type: "text", name: "Zip", required: true },
    { type: "text", name: "Country", required: true },
    { type: "url", name: "Website", required: false },
    { type: "url", name: "GitHub", required: false },
    { type: "url", name: "LinkedIn", required: false },
  ];
  return (
    <div className="container">
      <div className="input-container">
        <h2 className="input-container-header">Personal Information</h2>
        {personalInputsArray.map(({ type, name, required }) => (
          <PersonalInputs
            key={name}
            type={type}
            name={name}
            placeholder={`Enter your ${name}`}
            required={required}
            onchange={handleChange}
          />
        ))}
      </div>
      <div className="vertical-line"></div>
      <div className="viewing-page">
        <h2 className="viewing-page-header">Live Viewing Page</h2>
        <div className="viewing-page-content">
          <h1>{firstname}</h1>
        </div>
      </div>
    </div>
  );
}

export default PersonalInputsWithLabel;
