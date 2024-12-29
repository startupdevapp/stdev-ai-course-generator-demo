import axios from 'axios';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getVideos = async (searchQuery: string) => {
	const params = {
		part: 'snippet',
		q: searchQuery,
		maxResults: 1,
		type: 'video',
		key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
	};

	const res = await axios.get(YOUTUBE_BASE_URL + '/search', {
		params,
	});

	return res.data.items;
};
