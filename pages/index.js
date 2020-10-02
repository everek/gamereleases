import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import Layout from "../src/components/Layout/Layout";
import ReleaseList from "../src/components/ReleaseList/ReleaseList";

export default function Home() {
  return (
    <Layout>
      <ReleaseList />
    </Layout>
  );
}
