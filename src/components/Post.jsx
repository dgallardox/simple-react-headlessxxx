import { useEffect, useState } from "react";

export default function Post(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://simplereacthea.wpengine.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          posts {
            edges {
              node {
                id
                title
              }
            }
          }
        }
    `,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.posts.edges[0].node.title))
  });

  return (
    <>
      <h2>{data}</h2>
    </>
  )
}
