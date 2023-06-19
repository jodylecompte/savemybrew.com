import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import type { GetServerSideProps, NextPage } from "next";

import { Container, Layout } from "@/components/global";

import { supabase } from "@/services/supabase";

import { getPagination } from "@/util/pagination";

const pageMeta = {
  title: "Latest Blog Posts",
  description: "TODO: Write meta descriptions",
};

type BlogPageProps = {
  blogs: any[];
};

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  return (
    <Layout meta={pageMeta}>
      <Container>
        <div className="py-24 bg-white sm:py-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Latest Blog Posts
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to get into homebrewing, step up your game, or just
                learn more about the craft.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <Image
                      height="80"
                      width="80"
                      src={`/images/blog/${blog.image_file}`}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="flex items-center mt-8 text-xs gap-x-4">
                      <time
                        dateTime={blog.published_at}
                        className="text-gray-500"
                      >
                        {format(new Date(blog.published_at), "MMMM dd, yyyy")}
                      </time>
                    </div>
                    <div className="relative group">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={blog.slug}>
                          <span className="absolute inset-0" />
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                    <div className="relative flex items-center mt-8 gap-x-4">
                      <Image
                        src="/images/temp-avatar.jpg"
                        width="80"
                        height="80"
                        alt=""
                        className="w-10 h-10 bg-gray-100 rounded-full"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <Link href="">
                            <span className="absolute inset-0" />
                            Jody LeCompte
                          </Link>
                        </p>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { from, to } = getPagination(1, 6);
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .range(from, to);

    if (error) {
      console.error("Error fetching blog posts:", error);
      return;
    }

    return {
      props: {
        blogs: data,
      },
    };
  } catch (error) {
    // Handle errors gracefully
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
};

export default BlogPage;
