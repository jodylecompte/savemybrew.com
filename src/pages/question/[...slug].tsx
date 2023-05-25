// import type { GetServerSideProps } from "next";

import { Container, Layout } from "@/components/global";

const QuestionPage = () => {
  return (
    <Layout>
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
  );
};

export default QuestionPage;
