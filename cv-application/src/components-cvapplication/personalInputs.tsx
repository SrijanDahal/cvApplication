interface ViewingPageProps {
  formData: Record<string, string>;
}

export default function PersonalInputs({ formData }: ViewingPageProps) {
  const fullName =
    `${formData.FirstName || ""} ${formData.MiddleName || ""} ${formData.LastName || ""}`.trim();
  const address = `${formData.City || ""}, ${formData.State || ""} ${formData.zip || ""}`;

  return (
    <div className="viewing-page-personal-info">
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
  );
}
