interface ViewingPageProps {
  formData: Record<string, string>;
}

function ViewingPage({ formData }: ViewingPageProps) {
  const fullName =
    `${formData.FirstName || ""} ${formData.MiddleName || ""} ${formData.LastName || ""}`.trim();

  return (
    <div className="viewing-page">
      <h2 className="viewing-page-header">Live Viewing Page</h2>
      <div className="viewing-page-content">
        <h1 style={{ textAlign: "center", fontSize: "2vw" }}>
          {fullName || "Your name will appear here"}
        </h1>
      </div>
    </div>
  );
}

export default ViewingPage;
