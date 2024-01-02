import React from "react";
import { Layout, SEO } from "../components";

export const Head = () => <SEO path="/404" />;

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404</h1>
      <p>The page you are looking for cannot be found.</p>
    </Layout>
  );
}
