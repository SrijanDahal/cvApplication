import { useState } from "react";
import PersonalInputsWithLabel from "../components-cvapplication/input.tsx";
import "../CSS/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface PersonalInputsWithLabelprops {
  formData: Record<string, string>;
  onchange: (name: string, value: string) => void;
}

function Dropdown({ formData, onchange }: PersonalInputsWithLabelprops) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Personal Information
        <FontAwesomeIcon icon={faCaretDown} style={{ alignContent: "right" }} />
      </button>
      {isOpen && (
        <PersonalInputsWithLabel formData={formData} onchange={onchange} />
      )}
    </div>
  );
}

export default Dropdown;
