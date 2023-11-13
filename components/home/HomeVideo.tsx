import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import YouTube from 'react-youtube';
import { useEffect, useRef, useState } from 'react';

const HomeVideoStyles = styled.div``;

const FirstRow = styled.div`
	display: flex;
	gap: 64px;
	font-size: 22px;
	font-style: normal;
	font-weight: 400;
	line-height: 31px;
	margin-bottom: 100px;

	@media (max-width: 1280px) {
		flex-direction: column;
		text-align: center;
		margin-bottom: 64px;
	}

	> img {
		align-self: center;
		max-width: 100%;
	}
`;

const Video = styled.div`
	position: relative;
	border-radius: 24px;
	overflow: hidden;

	width: 100%;
	height: 100%;

	video {
		border-radius: 24px;
	}
`;

const Thumbnails = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
	padding: 0 5px;

	margin: 15px 0 125px;
`;

const Thumbnail = styled.a`
	border-radius: 24px;
	overflow: hidden;

	&:hover {
		cursor: pointer;
	}

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const HiddenAnchor = styled.div`
	position: absolute;
	top: -100px;
`;

export function HomeVideo() {
	const [videoId, setVideoId] = useState('oTfkCh_8j8Y');
	const [pageWidth, setPageWidth] = useState(0);
	const playerRef = useRef(null);

	const originalVideoWidth = 1200;
	const originalVideoHeigth = 676;

	function calculateVideoSize(width: number) {
		const aspectRatioVideo = originalVideoHeigth / originalVideoWidth;
		let videoWidth = originalVideoWidth;
		if (width < 1280) {
			videoWidth = width - 54;
		}

		const videoHeight = videoWidth * aspectRatioVideo;
		return {
			videoWidth,
			videoHeight,
		};
	}

	const startVideo = async () => {
		if (playerRef.current) {
			const videoElement = await playerRef.current.getInternalPlayer();
			if (videoElement) {
				await videoElement.mute();
				await videoElement.pauseVideo();
				await videoElement.playVideo();
			}
		}
	};

	useEffect(() => {
		setTimeout(() => {
			startVideo();
		}, 1000);
		function handleResize() {
			setPageWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [videoId]);

	if (!pageWidth) {
		return null;
	}

	const handleThumbnailClick = async (id: string) => {
		setVideoId(id);
		setTimeout(() => {
			startVideo();
		}, 1000);
	};

	const calculatedSizes = calculateVideoSize(pageWidth);

	return (
		<HomeVideoStyles>
			<FirstRow>
				<img src='/images/tip-em-tip.png' alt='De Tip em Tip' />
				<div>
					Conheça e acompanhe a trajetória de jogadores que já fizeram
					uma grana aqui na Tipspace, deixando suas partidas mais
					emocionantes!
				</div>
			</FirstRow>
			<Video>
				<HiddenAnchor id='video' />
				<YouTube
					ref={playerRef}
					className={Video}
					videoId={videoId}
					opts={{
						height: `${calculatedSizes.videoHeight}px`,
						width: `${calculatedSizes.videoWidth}px`,
						playerVars: {
							controls: 1,
							modestbranding: 1,
							showinfo: 1,
						},
					}}
				/>
			</Video>
			<Thumbnails>
				<Thumbnail onClick={() => handleThumbnailClick('oTfkCh_8j8Y')}>
					<img src='/images/thumb-neves.jpg' alt='Video Neves' />
				</Thumbnail>
				<Thumbnail onClick={() => handleThumbnailClick('Of5Rj68TK68')}>
					<img src='/images/thumb-absolut.jpg' alt='Video Absolut' />
				</Thumbnail>
				<Thumbnail onClick={() => handleThumbnailClick('g5WUvTxpelM')}>
					<img src='/images/thumb-cabun.jpg' alt='Video Cabun' />
				</Thumbnail>
			</Thumbnails>
		</HomeVideoStyles>
	);
}
