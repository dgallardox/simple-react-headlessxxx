import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { LoadData } from "../GraphQL/LoadData";

export default function GetData() {
	const { error, loading, data } = useQuery(LoadData);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (data) {
			setPosts(data.posts.nodes);
			console.log(data);
		}
	}, [data]);

	return (
		<div>
			{posts.map((item) => {
				return (
					<>
						<div class='shadow p-3 mb-5 bg-white rounded'>
							<h4>{item.title}</h4>
							<p dangerouslySetInnerHTML={{ __html: item.content }}></p>
						</div>
					</>
				);
			})}
		</div>
	);
}
