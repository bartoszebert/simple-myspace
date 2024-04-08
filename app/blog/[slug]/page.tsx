interface Post {
  title: string;
  content: string;
  slug: string;
}

interface PageProps {
  params: Post;
}

export default async function BlogPostPage({ params }: PageProps) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
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
