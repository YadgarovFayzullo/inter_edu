import React from "react";
import Book from "../components/Book";
import Layout from "../components/Layout";
import Header from "../components/Header";
import News from "../components/News";
import Officials from "../components/Officials";
import Stats from "../components/Stats"
import {Helmet} from "react-helmet"
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>IE&GS</title>
      </Helmet>
      <Layout>
        <Header />
        <Book />
        <News />
        <Stats />
        <Officials />
      </Layout>
    </div>
  );
}
