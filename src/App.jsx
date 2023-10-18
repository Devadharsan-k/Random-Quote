import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-2xl mx-6 card w-[550px] min-h-[200px]">
          <Quotes />
        </div>
      </div>
    </>
  );
}

export default App;
