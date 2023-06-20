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
        <form>
          <div className="space-y-12">
            <div className="pb-12 border-b border-gray-900/10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Before you Ask
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                When brewday goes south, don't fret. The majority of times a
                brew can be saved. To ensure the best chances of quality help,
                please include as much information about your brew, recipe,
                reading such as starting or current gravity, and any other
                details about the problem
              </p>
              <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Brew Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Choose a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Question
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="question"
                      name="question"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6 gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
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
