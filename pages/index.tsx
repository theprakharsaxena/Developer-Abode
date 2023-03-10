import Head from "next/head";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Developer Abode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          heading={"Developer Abode"}
          message={"Unleashing potential, driving success."}
          link={"internships"}
          page={"Internships"}
          image={"page1"}
        />
        <Main/>
      </main>
    </>
  );
}
