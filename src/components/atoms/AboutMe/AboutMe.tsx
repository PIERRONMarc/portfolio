import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

interface AboutMeProps {
    className?: string
}

function AboutMe(props: AboutMeProps) {
    const {className} = props;

    return (
        <div className={`flex flex-row justify-items-start ${className}`}>
            <div className="font-montserrat text-3xl sm:text-4xl inline text-accent p-0">I</div>
            <Swiper
                className="!mr-0 !ml-1.5"
                autoHeight={true}
                slidesPerView={1}
                direction={"vertical"}
                height={40}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
            >
                <SwiperSlide className="font-montserrat !text-3xl sm:!text-4xl">never stop learning</SwiperSlide>
                <SwiperSlide className="font-montserrat !text-3xl sm:!text-4xl">like new challenges</SwiperSlide>
                <SwiperSlide className="font-montserrat !text-3xl sm:!text-4xl">am looking for a job</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AboutMe;