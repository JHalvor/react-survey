import { useState } from "react";

import Form from "./Form";
import AnswersList from "./AnswersList";

export default function Survey() {
  const initialState = {
    id: 0,
    colour: "",
    timeSpent: [],
    review: "",
    username: ""
};
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [answerToEdit, setAnswerToEdit] = useState(initialState)
  

  const submitForm = (form) => {
    if (!editMode) {
      setAnswersList(() => [ ...answersList, { 
        id: answersList.length + 1,
        colour: form.color, 
        timeSpent: form["spend-time"], 
        review: form.review, 
        username: form.username}])
    } else {
      updateAnswer(form)
    }
    setAnswerToEdit(initialState)
  }

  const updateAnswer = (answer) => {
    console.log("updating answer: ", answer)
    setEditMode(false)
  }

  const editAnswer = (answerItem) => {
    setEditMode(true)
    setAnswerToEdit({ ...answerToEdit, id: answerItem.id, colour: answerItem.colour, timeSpent: answerItem.timeSpent, review: answerItem.review, username: answerItem.username})
    console.log("answerItem inside survey: ", answerItem)
    console.log("editAnswerItem is: ", answerToEdit)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList={answersList} editAnswer={editAnswer}/>}
      </section>
      <section className="survey__form">{editMode==true ? <Form submitForm={submitForm} mutableForm={answerToEdit}/> : <Form submitForm={submitForm}/>}</section>
    </main>
  );
}