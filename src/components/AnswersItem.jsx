// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import { useState } from "react";

import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({answerItem}) {
  const [answerData, setAnswerData] = useState(answerItem)
  const [editMode, setEditMode] = useState(false)

  function OnClickHandler() {
    setEditMode(!editMode)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    if (Array.isArray(answerData[name])) {
        const arr = answerData[name]
        if (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1)
        } else {
            arr.push(value)
        }
        setAnswerData({ ...answerData, [name]: arr })
    } else {
        setAnswerData({ ...answerData, [name]: value })
    }
  }

  function ViewAnswer() {
    return (
      <>
        <h3>{answerData.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{answerData.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerData.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerData.review}</span>
        </p>
      </>
    )
  }

  function EditAnswer() {
    return (
      <>
        <h3>{answerData.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <RadioButtons handleChange={handleChange} formData={answerData}/>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <Checkboxes handleChange={handleChange} formData={answerData}/>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <textarea name="review" cols="30" rows="10" onChange={handleChange} value={answerData.review}></textarea>
        </p>
      </>
    )
  }

  return (
    <li>
      <article className="answer">
        <button className="edit_answer_button" onClick={() => OnClickHandler({ answerData, editMode })}>{editMode ? "Save" : "Edit"}</button>
        {editMode ? EditAnswer() : ViewAnswer()}
      </article>
    </li>
  );
}
