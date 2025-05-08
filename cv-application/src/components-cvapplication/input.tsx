import "../CSS/input-container.css";
import "../CSS/viewingPage.css";

const personalInputsArray = [
  {
    type: "text",
    name: "FirstName",
    required: true,
  },
  {
    type: "text",
    name: "MiddleName",
    required: false,
  },
  {
    type: "text",
    name: "LastName",
    required: true,
  },
  { type: "email", name: "Email", required: true },
  { type: "number", name: "Number", required: true },
  { type: "text", name: "City", required: true },
  { type: "text", name: "State", required: true },
  { type: "text", name: "Zip", required: true },
  { type: "url", name: "Website", required: false },
  { type: "url", name: "GitHub", required: false },
  { type: "url", name: "LinkedIn", required: false },
];

interface PersonalInputsProps {
  onchange: (name: string, value: string) => void;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  value: string;
}

interface PersonalInputsWithLabelprops {
  formData: Record<string, string>;
  onchange: (name: string, value: string) => void;
}

function PersonalInputs({
  type,
  name,
  placeholder,
  required,
  value,
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
          value={value}
          onChange={(e) => onchange(name, e.target.value)}
        />
      </div>
    </>
  );
}

function PersonalInputsWithLabel({
  formData,
  onchange,
}: PersonalInputsWithLabelprops) {
  return (
    <div className="input-container">
      {personalInputsArray.map(({ type, name, required }) => (
        <PersonalInputs
          key={name}
          type={type}
          name={name}
          placeholder={`Enter your ${name}`}
          required={required}
          value={formData[name]}
          onchange={onchange}
        />
      ))}
    </div>
  );
}

export default PersonalInputsWithLabel;
