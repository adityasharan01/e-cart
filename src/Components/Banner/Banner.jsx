import styled from "styled-components";

// SWIPER 3RD PARTY PACKAGE
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    axios.get(`/server/banners/index.get.json`).then(data => {
      setBannerData(data.data);
    });
  }, []);

  return (
    <Container>
      <Swiper
        navigation={true}
        pagination={true}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {bannerData?.map((item, index) => (
          <div className="single-slide" key={index}>
            <SwiperSlide key={index}>
              <img src={item.bannerImageUrl} alt={"banner"} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.section`
  min-height: 20rem;

  .single-slide {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  /* MEDIA QUERY - TABLET*/
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    width: 100%;
  }
`;