import { useState } from "react";
import "../CSS/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  PersonalInputsWithLabel,
  EducationInputs,
  ExperienceInputs,
  ProjectsInputs,
} from "../components-cvapplication/input.tsx";

interface PersonalInputsWithLabelprops {
  name: string;
  formData: Record<string, string>;
  onchange: (name: string, value: string) => void;
}

function Dropdown({ name, formData, onchange }: PersonalInputsWithLabelprops) {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="dropdown">
      <div className="personal-information">
        <button className="dropdown-button" onClick={() => setIsOpen(1)}>
          {name}
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpen === 1 && (
          <PersonalInputsWithLabel
            formData={formData}
            onchange={onchange}
            array={[]}
          />
        )}
      </div>
      <div className="education-information">
        <button className="dropdown-button" onClick={() => setIsOpen(2)}>
          Education
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpen === 2 && (
          <EducationInputs formData={formData} onchange={onchange} array={[]} />
        )}
      </div>
      <div className="experience-information">
        <button className="dropdown-button" onClick={() => setIsOpen(3)}>
          Experience
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpen === 3 && (
          <ExperienceInputs
            formData={formData}
            onchange={onchange}
            array={[]}
          />
        )}
      </div>
      <div className="projects-information">
        <button className="dropdown-button" onClick={() => setIsOpen(4)}>
          Projects
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpen === 4 && (
          <ProjectsInputs formData={formData} onchange={onchange} array={[]} />
        )}
      </div>
    </div>
  );
}

export default Dropdown;
