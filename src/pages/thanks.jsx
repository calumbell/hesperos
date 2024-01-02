import React from "react";
import { Layout, Seo } from "../components";

export const Head = () => <Seo path="/thanks" />;

export default function ThankYou() {
  return (
    <Layout>
      <h1>Thank you for your support!</h1>
    </Layout>
  );
}
