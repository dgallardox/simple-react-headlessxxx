import { gql } from "@apollo/client";

export const LoadData = gql`
query {
  posts {
    nodes {
      title
      content
    }
  }
}
`