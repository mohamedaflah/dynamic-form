import { useState } from "react";
import "./App.css";
import { TextInput } from "oolib";
function App() {
  const [text, setText] = useState("");
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <div className="w-96 mx-auto" style={{ width: "50%", margin: "auto" }}>
        <TextInput onChange={(e) => setText(e.target.value)} value={text} />
      </div>
    </main>
  );
}

export default App;
