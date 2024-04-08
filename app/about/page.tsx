import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "This is a copy of a popular social media platform .",
};

export default function About(): JSX.Element {
  return (
    <main>
      <h1>About</h1>
      <p>This is a copy of a popular social media platform .</p>
    </main>
  );
}
