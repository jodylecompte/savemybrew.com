import { Container, Layout } from "@/components/global";

const values = [
  {
    name: "Everyone Wants Good Homebrew",
    description:
      "When answering questions and providing feedback, we must remember that everyone has the goal of making good homebrew and is doing so to the extent their budget and experience allows for.",
  },
  {
    name: "Homebrew is for Everyone",
    description:
      "All efforts should be made to be as inclusive as possible so that everyone interested can become a member of the homebrewing community we all love",
  },
  {
    name: "Always be Learning",
    description:
      "The homebrew world is large and there is always something to be learned from other folks with vastly different experiences and viewpoints",
  },
  {
    name: "Avoid Assumptions",
    description:
      "Avoid making assumptions about the setup, quality of ingredients, equipment posession and availability of people asking questions.",
  },
  {
    name: "Prioritize Best Practice and Safety",
    description:
      "Homebrew is very individualized and people have strong opinions about best practice, but content suggesting strong deviations from established practice like removing mold from a brew or skipping sanitization is not welcome.",
  },
  {
    name: "Relax",
    description:
      "Above all else, we are here to learn, help, grow, and brew together. When stress knocks on the door, stop, relax, and have a homebrew.",
  },
];

export default function Example() {
  return (
    <Layout>
      <Container className="bg-white">
        <main className="isolate">
          {/* Hero section */}
          <div className="relative isolate -z-10">
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      It takes a village to brew some booze
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Brewing is as much an art as it is a science, and when
                      dealing with living things like yeast, anything can
                      happen.
                    </p>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      SaveMyBrew was created with the idea that everyone needs a
                      little help sometimes, and the more questions asked and
                      the more support given in public, the larger the cache of
                      information that can be referenced.
                    </p>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1564919071842-43e73948ba90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=800"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1635705143334-1b74e7c97b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="/images/mead-placeholder.jpeg"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1532635135-630750614081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1571767454098-246b94fbcf70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2313&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Inspiration
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    This site was created by{" "}
                    <a href="https://jodylecompte.com">Jody LeCompte</a>, a
                    professional sotware engineer and amateur homebrewer.
                  </p>
                  <p className="text-xl leading-8 text-gray-600 mt-6">
                    Software engineers utilize a website called StackOverflow
                    which is one of the largest, if not the largest, source of
                    questions and answers around programming and software
                    development knowledge. It's so prevelant that it's become a
                    running joke that software developers don't write code, they
                    just copy and paste everything from StackOverflow.
                  </p>
                  <p className="text-xl leading-8 text-gray-600 mt-6">
                    In that vein, the goal of this site is to become for
                    Homebrewing what Stack Overflow is for programming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Prime Directives
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Participating in the SaveMyBrew.com community both in asking and
                answering is based upon a few simple tenants.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-semibold text-gray-900">{value.name}</dt>
                  <dd className="mt-1 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </main>
      </Container>
    </Layout>
  );
}
