import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = (type: 'blog' | 'case-studies') => path.join(process.cwd(), `_posts/${type}`);

export function getSortedPostsData(type: 'blog' | 'case-studies') {
  const fileNames = fs.readdirSync(postsDirectory(type));
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory(type), fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { [key: string]: any }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs(type: 'blog' | 'case-studies') {
  const fileNames = fs.readdirSync(postsDirectory(type));
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(type: 'blog' | 'case-studies', slug: string) {
  const fullPath = path.join(postsDirectory(type), `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    slug,
    frontmatter: data,
    source: mdxSource,
  };
}
