import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, editAnswer } = props;
  console.log("AnswersList is: ", answersList);
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editAnswer={editAnswer} key={i} />
      ))}
    </ul>
  );
}
