interface ViewingPageProps {
  formData: Record<string, string>;
}

export default function Projects({ formData }: ViewingPageProps) {
  return (
    <div className="viewing-page-projects-info" style={{ marginTop: "2vw" }}>
      <h2 style={{ fontSize: "1rem", fontWeight: "300" }}>Projects</h2>
      <hr />
      <div
        className="project"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2
          style={{
            margin: "5px 0 5px 5px",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        >
          {formData.ProjectName}
        </h2>
        <h3
          style={{
            margin: "5px 0 0 0",
            marginBottom: "0px",
            fontSize: "0.7rem",
            fontWeight: "100",
          }}
        >
          {formData.ProjectstartDate} - {formData.ProjectEndDate || "Present"}
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
          {formData.ProjectLink}
        </h3>
      </div>
      <div className="description">
        <ul>
          {formData.ProjectDescription && (
            <li
              style={{
                margin: "2px 0 0 0px",
                fontSize: "0.5rem",
                fontWeight: "100",
              }}
            >
              {formData.ProjectDescription}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
