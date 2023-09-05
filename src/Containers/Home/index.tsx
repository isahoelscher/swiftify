import { Card } from "../../Components/Card";
import { usePosts } from "../../Hooks/useGetRandomQuote";
import "@fontsource/roboto/300.css";
export const Home = () => {
	const { data: randomQuote, refetch: refetchQuote } = usePosts();
	return (
		<>
			<Card title="Taylor once said:" button="new quote" onClick={refetchQuote}>
				<p className="m-0">{randomQuote?.quote}</p>
			</Card>
		</>
	);
};
