import { request } from ".";
import { RandomQuote } from "../Models/Quote";

export const getRandomQuote = async () => {
	(await request.get<RandomQuote>("get")).data;
};
