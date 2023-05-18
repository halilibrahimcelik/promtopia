import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
        dolor debitis quis explicabo aut architecto aspernatur odit animi
        itaque?
      </p>

      <Feed />
    </section>
  );
}
