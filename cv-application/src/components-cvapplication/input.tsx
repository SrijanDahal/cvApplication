import "../CSS/input-container.css";
import "../CSS/viewingPage.css";
import {
  PersonalInputsArray,
  Education,
  Experience,
  Projects,
} from "../data/data";

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
  array: { type: string; name: string; required: boolean }[];
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
    <>
      <Input
        formData={formData}
        onchange={onchange}
        array={PersonalInputsArray}
      />
    </>
  );
}

function EducationInputs({ formData, onchange }: PersonalInputsWithLabelprops) {
  return (
    <>
      <Input formData={formData} onchange={onchange} array={Education} />
    </>
  );
}

function ExperienceInputs({
  formData,
  onchange,
}: PersonalInputsWithLabelprops) {
  return (
    <>
      <Input formData={formData} onchange={onchange} array={Experience} />
    </>
  );
}

function ProjectsInputs({ formData, onchange }: PersonalInputsWithLabelprops) {
  return (
    <>
      <Input formData={formData} onchange={onchange} array={Projects} />
    </>
  );
}

function Input({ formData, onchange, array }: PersonalInputsWithLabelprops) {
  return (
    <>
      <div className="input-container">
        {array.map(({ type, name, required }) => (
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
    </>
  );
}

export {
  PersonalInputsWithLabel,
  EducationInputs,
  ExperienceInputs,
  ProjectsInputs,
};
