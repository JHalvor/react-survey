// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import EditAnswer from "./Survey";

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
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem, editAnswer
}) {
  return (
    <li>
      <article className="answer">
        <button className="edit_answer_button" onClick={() => editAnswer(answerItem)}>Edit</button>
        <h3>{answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}
