export const revalidate = 1200;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface PageProps {
  params: Post;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(`${process.env.API_URL}/content`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const posts: Post[] = await fetch(`${process.env.API_URL}/content`).then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
