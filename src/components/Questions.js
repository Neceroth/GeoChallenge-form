function Questions(props) {
    var question = props.question.title;
    const handleInput = (e) => {
        const id = document.getElementById(props.question[question][0].id)
        const elements = document.getElementsByClassName("question");
        for(var i = 0; i < elements.length; i++) {
            if(elements[i].classList[0] > id.classList[0]) {
                elements[i].classList.add("d-none");
            }
        }
        document.getElementById(e.target.name).classList.remove("d-none");
    }
  return (
      <>
          <div className={props.question[question][0].class} id={props.question[question][0].id}>
            <h3>{props.question[question][0].label}</h3>
            {props.question[question][0].answer ?
              <div>
                  {props.question[question][0].answer.map((answer, index) => {
                      return (
                          <button key={index} className="btn btn-primary w-25" value={answer.label} name={answer.to}
                      onClick={e => handleInput(e, "value")}>{answer.label}</button>
                      )
                  })}
              </div>
              :
              null
            }
          </div>
      </>
  );
}
export default Questions;
