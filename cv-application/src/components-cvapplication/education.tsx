const arr = [
  { type: "text", name: "title" },
  { type: "text", name: "institution" },
  { type: "text", name: "location" },
  { type: "text", name: "startDate" },
  { type: "text", name: "endDate" },
  { type: "text", name: "description" },
];

function InputfieldsEducation() {
  return (
    <div className="educationn-inputs">
      {arr.map(({ type, name }) => (
        <div key={name} className="input-field">
          <label htmlFor={name} className="input-label">
            {name.charAt(0).toUpperCase() + name.slice(1)}:
          </label>
          <input type={type} name={name} placeholder={name} required />
        </div>
      ))}
    </div>
  );
}

export default InputfieldsEducation;
