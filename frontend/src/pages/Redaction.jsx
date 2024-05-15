import React from "react";
import Layout from "../components/Layout";
import Colleagues from "../components/Colleagues";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
export default function Redaction() {
 const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("redaction")}</title>
      </Helmet>
      <Layout>
        <Colleagues />
      </Layout>
    </div>
  );
}
