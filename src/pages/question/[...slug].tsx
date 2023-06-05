import { Container, Layout } from "@/components/global";

const pageMeta = {
  title: "Questions",
  description: "TODO: Write meta descriptions",
};

const QuestionPage = () => {
  return (
    <>
      <Layout meta={pageMeta}>
        <Container className="prose">
          {/* <h1>{question.title}</h1>
        <p>{question.content}</p>
        <div className="border-t border-gray-100">
          {question.answers.map((answer, index) => (
            <div key={index}>{answer.content}</div>
          ))}
        </div> */}
        </Container>
      </Layout>
    </>
  );
};

export default QuestionPage;
