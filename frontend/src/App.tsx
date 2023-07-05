import "./App.css";
import Task from "./components/molecules/Task/Task";

const tasks: any[] = ['ewe', 'sdd'];
function App() {
  const gem = () =>
    tasks?.map((task, id) => {
      return (
        <Task key={id} id={id.toString()}>
          {task}
        </Task>
      );
    });

  return (
    <>
      <div className="board">
        <header>
          <h1>TODO IT</h1>
        </header>
        <section className="task-area">
          {gem()}
          <div className="new-task">
            <input
              type="text"
              placeholder="Escreva uma nova tarefa"
              name=""
              id=""
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
