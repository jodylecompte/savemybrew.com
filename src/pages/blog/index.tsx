import Image from "next/image";
import Link from "next/link";

import { Container, Layout } from "@/components/global";

// TODO: Both are temporary
const imageUrl = "/images/mead-placeholder.jpeg";
const avatarImg = "/images/temp-avatar.jpg";

const posts = [
  {
    id: 1,
    title: "Bench Trialing Traditional Meads",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl,
    date: "May 12, 2023",
    datetime: "2020-03-16",
    category: { title: "Recipes", href: "#" },
    author: {
      name: "Jody LeCompte",
      role: "SaveMyBrew.com",
      href: "#",
      imageUrl: avatarImg,
    },
  },
  {
    id: 2,
    title: "Pellet Hops vs Leaf Hops",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl,
    date: "May 11, 2023",
    datetime: "2020-03-16",
    category: { title: "Beer", href: "#" },
    author: {
      name: "Jody LeCompte",
      role: "SaveMyBrew.com",
      href: "#",
      imageUrl: avatarImg,
    },
  },
  {
    id: 3,
    title: "Building Your First Brewhouse",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl,
    date: "Mar 10, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Jody LeCompte",
      role: "SaveMyBrew.com",
      href: "#",
      imageUrl: avatarImg,
    },
  },
  // More posts...
];

const BlogPage = () => {
  return (
    <Layout>
      <Container>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Latest Blog Posts
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to get into homebrewing, step up your game, or just
                learn more about the craft.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <Image
                      height="80"
                      width="80"
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <Link
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </Link>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image
                        src={post.author.imageUrl}
                        width="80"
                        height="80"
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <Link href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </Link>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPage;
