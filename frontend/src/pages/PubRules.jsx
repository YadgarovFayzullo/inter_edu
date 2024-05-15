import React from "react";
import Layout from "../components/Layout";
import RulesPublication from "../components/RulesPublication";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function PubRules() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("conditions")}</title>
      </Helmet>
      <Layout>
        <RulesPublication />
      </Layout>
    </div>
  );
}
