import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../lib/apollo/apolloClient";
const GET_PRODUCT = gql`
  query getProduct($search: String!) {
    products(search: $search) {
      __typename
      total_count
      page_info {
        current_page
        page_size
        total_pages
      }
      items {
        __typename
        url_key
        name
      }
    }
  }
`;

const ApolloClientDemo = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { search: "sample" },
    useGETForQueries: true,
  });
  console.log(data);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return <p>ini page apollo client example</p>;
};

export default withApollo({ ssr: true })(ApolloClientDemo);
