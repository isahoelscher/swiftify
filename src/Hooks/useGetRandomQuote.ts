import { useQuery } from "react-query";
import { request } from "../Api";

export function usePosts() {
	return useQuery({
		queryKey: ["random-quote"],
		queryFn: async () => {
			const { data } = await request.get("get");
			return data;
		},
		enabled: true,
	});
}
