import { bundleMDX } from "mdx-bundler";
import fs from "fs/promises";
import path from "path";

export async function getMarkdown(filePath: string) {
  const source = await fs.readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  const { frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return {
    frontmatter: frontmatter as { title: string;[key: string]: any },
  };
}