import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>MCP Server in Browser</h1>
      <p>Create MCP servers with Service Workers in browser!</p>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
