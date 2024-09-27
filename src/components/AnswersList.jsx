import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList } = props;
  console.log("AnswersList is: ", answersList);
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
