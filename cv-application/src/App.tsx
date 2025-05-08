import { PersonalInputsWithLabel } from "./components-cvapplication/input";
import ViewingPage from "./components-cvapplication/viewingPage";

export default function App() {
  return (
    <div className="App">
      <PersonalInputsWithLabel />
      <div className="vertical-line"></div>
      <ViewingPage />
    </div>
  );
}
