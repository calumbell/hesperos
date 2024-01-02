import React from "react";
import { Layout, SEO } from "../components";

export const Head = () => <SEO path="/thanks" />;

export default function ThankYou() {
  return (
    <Layout>
      <h1>Thank you for your support!</h1>
    </Layout>
  );
}
