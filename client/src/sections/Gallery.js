import React, { useEffect } from 'react'
import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import Gallery from 'react-grid-gallery'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Container = styled.div`
	background-color: transparent;
	max-width: 1440px;
	margin: 0 auto;

	img {
		object-fit: cover;
		object-position: top;
	}
`

const IMAGES = [
	{
		src: '/images/gallery/2-min.jpg',
		thumbnail: '/images/gallery/thumbnails/2-min.jpg',
		thumbnailWidth: 226,
		thumbnailHeight: 320,
	},
	{
		src: '/images/gallery/3-min.jpg',
		thumbnail: '/images/gallery/thumbnails/3-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 179,
	},
	{
		src: '/images/gallery/4-min.jpg',
		thumbnail: '/images/gallery/thumbnails/4-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 213,
	},
	{
		src: '/images/gallery/9-min.jpg',
		thumbnail: '/images/gallery/thumbnails/9-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
	},
	// 2. row
	{
		src: '/images/gallery/8-min.jpg',
		thumbnail: '/images/gallery/thumbnails/8-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 213,
	},
	{
		src: '/images/gallery/11-min.jpg',
		thumbnail: '/images/gallery/thumbnails/11-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 183,
	},
	{
		src: '/images/gallery/10-min.jpg',
		thumbnail: '/images/gallery/thumbnails/10-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 212,
	},
	{
		src: '/images/gallery/6-min.jpg',
		thumbnail: '/images/gallery/thumbnails/6-min.jpg',
		thumbnailWidth: 240,
		thumbnailHeight: 320,
	},
	// 3. row
	{
		src: '/images/gallery/16-min.jpg',
		thumbnail: '/images/gallery/thumbnails/16-min.jpg',
		thumbnailWidth: 257,
		thumbnailHeight: 320,
	},
	{
		src: '/images/gallery/5-min.jpg',
		thumbnail: '/images/gallery/thumbnails/5-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 148,
	},
	{
		src: '/images/gallery/13-min.jpg',
		thumbnail: '/images/gallery/thumbnails/13-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 213,
	},
	{
		src: '/images/gallery/17-min.jpg',
		thumbnail: '/images/gallery/thumbnails/17-min.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 190,
	},
	// 4. row
	{
		src: '/images/gallery/12-min.jpg',
		thumbnail: '/images/gallery/thumbnails/12-min.jpg',
		thumbnailWidth: 200,
		thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/1-min.jpg',
		thumbnail: '/images/gallery/thumbnails/1-min.jpg',
		thumbnailWidth: 200,
		thumbnailHeight: 116,
	},
	{
		src: '/images/gallery/14-min.jpg',
		thumbnail: '/images/gallery/thumbnails/14-min.jpg',
		thumbnailWidth: 200,
		thumbnailHeight: 174,
	},
	{
		src: '/images/gallery/7-min.jpg',
		thumbnail: '/images/gallery/thumbnails/7-min.jpg',
		thumbnailWidth: 200,
		thumbnailHeight: 116,
	},
	// 5. row
]

const GalleryContainer = styled.div`
	display: block;
	position: relative;
	width: 100%;
	overflow: hidden;

	img {
		object-position: top;
	}

	iframe {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	&::before {
		display: block;
		content: '';
		/* padding-top: 56.25%; */
	}
`

export default () => {
	useEffect(() => {
		AOS.init({ duration: 1000 })
	})
	return (
		<section className='topMargin' data-aos='zoom-in-right'>
			<Container className='topBottomPadding' style={{ paddingTop: 0 }}>
				<div className='sideMargin'>
					<SubHeading style={{ backgroundColor: '#95200D' }}>
						Galerija
					</SubHeading>
					<GalleryContainer>
						<Gallery images={IMAGES} rowHeight={264} />
					</GalleryContainer>
				</div>
			</Container>
		</section>
	)
}
