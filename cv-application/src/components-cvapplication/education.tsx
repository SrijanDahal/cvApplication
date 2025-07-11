interface ViewingPageProps {
  formData: Record<string, string>;
}

function Education({ formData }: ViewingPageProps) {
  return (
    <div className="viewing-page-education-info" style={{ marginTop: "2vw" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: "300" }}>Education</h2>
      <hr />
      <div
        className="degree"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2
          style={{
            margin: "5px 0 5px 5px",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        >
          {formData.Degree}
        </h2>
        <h3
          style={{
            margin: "5px 0 0 0",
            marginBottom: "0px",
            fontSize: "0.7rem",
            fontWeight: "100",
          }}
        >
          {formData.Year}
        </h3>
      </div>
      <div
        className="universtiy"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3
          style={{
            marginLeft: "5px",
            fontSize: "0.5rem",
            fontWeight: "100",
          }}
        >
          {formData.University}, GPA: {formData.CGPA}
        </h3>
        <h3
          style={{
            marginLeft: "0",
            fontSize: "0.5rem",
            fontWeight: "100",
          }}
        >
          {formData.EducationLocation}
        </h3>
      </div>
      <div className="description">
        <ul>
          {formData.EducationDescription && (
            <li
              style={{
                margin: "2px 0 0 0px",
                fontSize: "0.5rem",
                fontWeight: "100",
              }}
            >
              {formData.EducationDescription}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Education;
