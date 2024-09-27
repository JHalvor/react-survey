import { useState } from "react";

import Form from "./Form";
import AnswersList from "./AnswersList";

export default function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  const submitForm = (form) => {
    setAnswersList(() => [ ...answersList, { 
      color: form.color, 
      timeSpent: form.timeSpent, 
      review: form.review, 
      username: form.username }])
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList={answersList}/>}
      </section>
      <section className="survey__form">{<Form submitForm={submitForm}/>}</section>
    </main>
  );
}