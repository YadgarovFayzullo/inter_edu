import React from "react";
import Book from "../components/Book";
import Layout from "../components/Layout";
import Header from "../components/Header";
import News from "../components/News";
import Partners from "../components/Partners";
export default function Home() {
  return (
    <Layout>
      <Header />
      <Book />
      <Partners />
      <News />
    </Layout>
  );
}
