import BonsaiCanvas from "./components/BonsaiCanvas";

function App() {
  return (
    <div className="app">
      <BonsaiCanvas />

      <h1>Desk Bonsai</h1>

      <p>Your little coding companion.</p>

      <p className="status">
        Focus for a while and watch it grow.
      </p>
    </div>
  );
}

export default App;