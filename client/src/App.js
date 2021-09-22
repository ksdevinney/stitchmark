function App() {
  return (
    <div className="App">
      <h1>StitchMark</h1>
      <h4>Keep up with your crafting projects!</h4>

      <div className="todos">
        <div className="todo is-complete">
          <div className="checkbox"></div>

          <div className="text">Let's get this bread</div>

          <div className="delete-todo">x</div>
        </div>

        <div className="todo">
          <div className="checkbox"></div>

          <div className="text">Buy more thread</div>

          <div className="delete-todo">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;
