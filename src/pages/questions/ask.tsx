import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import type { GetServerSideProps, GetServerSidePropsResult } from "next";

import { Container, Layout } from "@/components/global";

import { supabase } from "@/services/supabase";

import type { QuestionCategory } from "@/types";

const pageMeta = {
  title: "Ask a Question",
  description: "TODO: Write meta descriptions",
};

type AskQuestionPageProps = {
  categories: QuestionCategory[];
};

const AskQuestionPage = ({ categories }: AskQuestionPageProps) => {
  console.log(categories);
  return (
    <Layout meta={pageMeta}>
      <Container className="max-w-3xl">
        <h1 className="my-8 text-3xl font-bold">Ask a Question</h1>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<
  AskQuestionPageProps
> = async (): Promise<GetServerSidePropsResult<AskQuestionPageProps>> => {
  try {
    const { data, error } = await supabase
      .from("question_categories")
      .select("id, label")
      .order("id", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    const categories: QuestionCategory[] = data || [];

    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error("Error retrieving question categories:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
};

export default AskQuestionPage;
