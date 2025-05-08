import { useState } from "react";
import PersonalInputsWithLabel from "../components-cvapplication/input.tsx";
import "../CSS/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import InputfieldsEducation from "../components-cvapplication/education.tsx";

interface PersonalInputsWithLabelprops {
  name: string;
  formData: Record<string, string>;
  onchange: (name: string, value: string) => void;
}

function Dropdown({ name, formData, onchange }: PersonalInputsWithLabelprops) {
  const [isOpen, setIsOpen] = useState(0);
  const [isOpenEducation, setIsOpenEducation] = useState(0);

  function toggleDropdown() {
    setIsOpen((isOpen) => (isOpen === 0 ? 1 : 0));
  }

  function toggleDropdowneducation() {
    setIsOpenEducation((isOpenEducation) => (isOpenEducation === 1 ? 0 : 1));
  }

  return (
    <div className="dropdown">
      <div className="personal-information">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {name}
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpen === 0 && (
          <PersonalInputsWithLabel formData={formData} onchange={onchange} />
        )}
      </div>
      <div className="education">
        <button className="dropdown-button" onClick={toggleDropdowneducation}>
          Education
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ alignContent: "right" }}
          />
        </button>
        {isOpenEducation === 1 && (
          <InputfieldsEducation formData={formData} onchange={onchange} />
        )}
      </div>
    </div>
  );
}

export default Dropdown;
