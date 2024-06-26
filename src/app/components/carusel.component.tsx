/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
export default function Carusel() {
	return (
		<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
			<SwiperSlide>
				{' '}
				<Image src='' width={500} height={500} alt='Picture of the author' />
			</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
			<SwiperSlide>Slide 8</SwiperSlide>
			<SwiperSlide>Slide 9</SwiperSlide>
		</Swiper>
	);
}
