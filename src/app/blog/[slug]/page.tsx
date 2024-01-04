import { fullBlogType } from "@/app/lib/interface";
import { client, urlfor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { url } from "inspector";
import Image from "next/image";
import React from "react";

export async function blogData(slug: any) {
  const query = `*[_type == "blog" && slug.current=='${slug}']
  {
    "currentslug":slug.current,
    title,
      content,
      titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

async function BlogAritcle({ params }: any) {
  const data: fullBlogType = await blogData(params.slug);
  return (
    <div>
      <h1 className="mt-8">
        <span className="block text-center text-primary font-semibold uppercase tracking-wide ">
          Awais Tahir - Blog
        </span>
        <span className="mt-2 block font-bold text-3xl sm:text-4xl text-center tracking-tight leading-8">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlfor(data.titleImage).url()}
        alt="Title Image"
        priority // Render fastly
        height={800}
        width={800}
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content}/>
      </div>
    </div>
  );
}

export default BlogAritcle;
