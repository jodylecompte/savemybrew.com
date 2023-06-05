import { BugAntIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import {
  FaAppleAlt,
  FaChevronCircleDown,
  FaQuestionCircle,
} from "react-icons/fa";
import { BsWindowPlus } from "react-icons/bs";
import { GiBeerStein, GiHoneypot, GiWineBottle } from "react-icons/gi";
import { useQueryState } from "next-usequerystate";

import { Container, Layout } from "@/components/global";
import { useQuery } from "@tanstack/react-query";
import ReactTimeAgo from "react-time-ago";
import slugify from "slugify";

const questionTypes = [
  {
    name: "Beer",
    icon: GiBeerStein,
  },
  {
    name: "Wine",
    icon: GiWineBottle,
  },
  {
    name: "Mead",
    icon: GiHoneypot,
  },
  {
    name: "Ciders",
    icon: FaAppleAlt,
  },
  {
    name: "Lacto",
    icon: BugAntIcon,
  },
  {
    name: "All Questions",
    icon: FaQuestionCircle,
  },
];

// TEMPORARY
const commenters = [
  {
    id: 12,
    name: "Emma Dorsey",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Tom Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 16,
    name: "Benjamin Russel",
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 23,
    name: "Hector Gibbons",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const pageMeta = {
  title: "Questions",
  description: "TODO: Write meta descriptions",
};

const QuestionsPage = () => {
  const [brewType, setBrewType] = useQueryState("brewType");

  const FiltersDisclosure = () => {
    return (
      <Disclosure>
        <Disclosure.Button className="flex items-center p-5 py-2 bg-slate-300 rounded-xl">
          Filters <FaChevronCircleDown className="ml-3" aria-hidden="true" />
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <SectionsFilter />
        </Disclosure.Panel>
      </Disclosure>
    );
  };

  const SectionsFilter = () => {
    return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {questionTypes.map((brewType, idx) => (
          <li
            key={idx}
            className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
          >
            <button
              className="flex items-center justify-between w-full p-6 space-x-6"
              onClick={() => setBrewType(brewType.name.toLowerCase())}
            >
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {brewType.name}
                  </h3>
                </div>
              </div>
              <brewType.icon
                height="26"
                width="26"
                size="25"
                aria-hidden="true"
              />
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const NoQuestions = () => {
    return (
      <button
        type="button"
        className="relative flex flex-col items-center block w-full p-12 mt-8 text-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <BsWindowPlus size="42" aria-hidden="true" />
        <span className="block mt-2 text-sm font-semibold text-gray-900">
          No questions match your current filter yet, got a question on your
          mind?
        </span>
      </button>
    );
  };

  const QuestionCard = ({ question }: any) => {
    return (
      <div>
        <li
          key={question.id}
          className="flex flex-wrap items-center justify-between py-5 gap-x-6 gap-y-4 sm:flex-nowrap"
        >
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <a
                href={`/question/${question.id}/${slugify(question.title)}`}
                className="hover:underline"
              >
                {question.title}
              </a>
            </p>
            <div className="flex items-center mt-1 text-xs leading-5 text-gray-500 gap-x-2">
              <p>
                <a href="" className="hover:underline">
                  Jody
                </a>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p>
                <time dateTime={question.dateTime}>
                  <ReactTimeAgo date={question.createdAt} locale="en-US" />
                </time>
              </p>
            </div>
          </div>
          <dl className="flex justify-between flex-none w-full gap-x-8 sm:w-auto">
            <div className="flex -space-x-0.5">
              <dt className="sr-only">Commenters</dt>
              {commenters.map((commenter) => (
                <dd key={commenter.id}>
                  <img
                    className="w-6 h-6 rounded-full bg-gray-50 ring-2 ring-white"
                    src={commenter.imageUrl}
                    alt={commenter.name}
                  />
                </dd>
              ))}
            </div>
            <div className="flex w-16 gap-x-2.5">
              <dt>
                <span className="sr-only">Total comments</span>
                <CheckCircleIcon
                  className="w-6 h-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-sm leading-6 text-gray-900">6</dd>
            </div>
          </dl>
        </li>
      </div>
    );
  };
  return (
    <Layout meta={pageMeta}>
      <Container>
        <h1 className="my-8 text-3xl font-bold">Questions</h1>
        <FiltersDisclosure />
        {/* {isLoading && <>Loading...</>}
        {!isLoading && questions.length === 0 && <NoQuestions />}
        {data?.questions.length > 0 && (
          <ul role="list" className="mt-4 divide-y divide-gray-100">
            {questions.map((question, idx) => (
              <QuestionCard key={idx} question={question} />
            ))}
          </ul>
        )} */}
      </Container>
    </Layout>
  );
};

export default QuestionsPage;
