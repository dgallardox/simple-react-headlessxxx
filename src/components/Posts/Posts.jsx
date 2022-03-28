// import { useEffect, useState } from "react";
// import { gql, useQuery } from "@apollo/client";

// const URL = "https://simplereacthea.wpengine.com/graphql";
// const config = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//         {
//           posts {
//             nodes {
//               title
//             }
//           }
//         }
//     `,
//   }),
// }


// export default function Posts() {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetch(URL, config)
//       .then((res) => res.json())
//       .then((res) => setData(res.data.posts.nodes))
//   }, []);

//   console.log(data)
//   console.log(typeof data)

//   return (
//     <>
//       {/* {data.map((item) => {
//         return (
//           <h2>{ data }</h2>
//       )
//     })} */}

//     </>
// )
// }
