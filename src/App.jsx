import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { GlobalProvider } from "./Library/globalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="mainContainer">
        <Homepage />
      </div>
    </GlobalProvider>
  );
}

export default App;
