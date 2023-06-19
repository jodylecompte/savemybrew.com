import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";

import type { GetServerSideProps, NextPage } from "next";

import { Container, Layout } from "@/components/global";

import { supabase } from "@/services/supabase";

import { getPagination } from "@/util/pagination";

const pageMeta = {
  title: "Latest Blog Posts",
  description: "TODO: Write meta descriptions",
};

type BlogPageProps = {
  blog: any;
};

const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  const content = marked.parse(blog.content);

  return (
    <Layout meta={pageMeta}>
      <Container>
        <div className="max-w-full prose bg-white">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {blog.title}
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {blog.excerpt}
              </p>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { [key: string]: string };

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug) // Filter by the slug parameter
      .single();

    if (error) {
      console.error("Error fetching blog post:", error);
      return {
        notFound: true, // Return a 404 status if the blog post is not found
      };
    }

    return {
      props: {
        blog: data,
      },
    };
  } catch (error) {
    // Handle errors gracefully
    console.error("Error fetching data:", error);
    return {
      notFound: true, // Return a 404 status if there's an error
    };
  }
};

export default BlogPage;
