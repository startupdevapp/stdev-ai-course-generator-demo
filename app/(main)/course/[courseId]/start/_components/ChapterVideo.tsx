import YouTube, { YouTubeProps } from 'react-youtube';

interface ChapterVideoProps {
	id?: string;
}

const ChapterVideo = (id: ChapterVideoProps) => {
	const opts: YouTubeProps['opts'] = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	};

	return <YouTube videoId={id?.id} opts={opts} />;
};

export default ChapterVideo;
