interface ViewingPageProps {
  formData: Record<string, string>;
}

function ViewingPage({ formData }: ViewingPageProps) {
  const fullName =
    `${formData.FirstName || ""} ${formData.MiddleName || ""} ${formData.LastName || ""}`.trim();
  const address = `${formData.City || ""}, ${formData.State || ""} ${formData.zip || ""}`;

  return (
    <div className="viewing-page">
      <h2 className="viewing-page-header">Live Viewing Page</h2>
      <div className="viewing-page-content">
        <h1 style={{ textAlign: "center", fontSize: "2vw" }}>{fullName}</h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "0.7vw",
            fontWeight: "normal",
          }}
        >
          {address}
          {` | ${formData.Email || ""}`} {` | ${formData.Number || ""}`}{" "}
          {` | ${formData.GitHub || ""}`}
          {` | ${formData.LinkedIn || ""}`}
          {` | ${formData.Website || ""}`}
        </h2>
      </div>
    </div>
  );
}

export default ViewingPage;
