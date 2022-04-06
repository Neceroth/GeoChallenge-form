import testForm from "./testForm.json";
import Questions from "./components/Questions";
function App() {
  return (
      <div className="container text-center mt-5">
          {testForm.data.map((question, index) => {
              return <Questions key={index} question={question}/>
          })}
      </div>
  );
}

export default App;
