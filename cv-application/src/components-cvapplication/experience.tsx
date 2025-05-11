interface ViewingPageProps {
  formData: Record<string, string>;
}

export default function Experience({ formData }: ViewingPageProps) {
  return (
    <div className="viewing-page-experience-info" style={{ marginTop: "2vw" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: "300" }}>Experience</h2>
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
          {formData.Position}
        </h2>
        <h3
          style={{
            margin: "5px 0 0 0",
            marginBottom: "0px",
            fontSize: "0.7rem",
            fontWeight: "100",
          }}
        >
          {formData.ExperienceStartDate} -{" "}
          {formData.ExperienceEndDate || "Present"}
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
          {formData.Company}
        </h3>
        <h3
          style={{
            marginLeft: "0",
            fontSize: "0.5rem",
            fontWeight: "100",
          }}
        >
          {formData.ExperienceLocation}
        </h3>
      </div>
      <div className="description">
        <ul>
          {formData.ExperienceDescription && (
            <li
              style={{
                margin: "2px 0 0 0px",
                fontSize: "0.5rem",
                fontWeight: "100",
              }}
            >
              {formData.ExperienceDescription}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
