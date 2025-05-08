import "../CSS/input-container.css";

interface PersonalInputsProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

function PersonalInputs({
  type,
  name,
  placeholder,
  required,
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
        />
      </div>
    </>
  );
}

function PersonalInputsWithLabel() {
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
    <div className="input-container">
      <h2 className="input-container-header">Personal Information</h2>
      {personalInputsArray.map(({ type, name, required }) => (
        <PersonalInputs
          key={name}
          type={type}
          name={name}
          placeholder={`Enter your ${name}`}
          required={required}
        />
      ))}
    </div>
  );
}

export { PersonalInputsWithLabel };
