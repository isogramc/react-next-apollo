import '../styles/globals.css'
import {AppProps} from "next/app";
import initializeApollo, {useApollo} from "../lib/client";
import {ApolloProvider} from "@apollo/client";
import Layout from "../components/Layout";
import {TasksDocument, TasksQuery} from "../generated/graphql-frontend";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
      <ApolloProvider client={apolloClient}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  );
}

export default MyApp
