import Education from "./education";
import PersonalInputs from "./personalInputs";
import Experience from "./experience";
import Projects from "./projects";

interface ViewingPageProps {
  formData: Record<string, string>;
}

function ViewingPage({ formData }: ViewingPageProps) {
  return (
    <div className="viewing-page">
      <h2 className="viewing-page-header">Live Viewing Page</h2>
      <div className="viewing-page-content">
        <PersonalInputs formData={formData} />
        <Education formData={formData} />
        <Experience formData={formData} />
        <Projects formData={formData} />
      </div>
    </div>
  );
}

export default ViewingPage;
