import React from "react";
import { Layout, Seo } from "../components";

export const Head = () => <Seo path="/404" />;

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404</h1>
      <p>The page you are looking for cannot be found.</p>
    </Layout>
  );
}
