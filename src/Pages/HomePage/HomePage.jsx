import styled from "styled-components";
import Banner from "../../Components/Banner/Banner";
import HomePageCard from "../../Components/HomePageCard/HomePageCard";
// import { useState, useEffect } from "react";
// import axios from "axios";

const HomePage = ({ cardData }) => {
  // const [cardData, setCardData] = useState(null);

  // useEffect(() => {
  //   axios.get(`/server/categories/index.get.json`).then(data => {
  //     setCardData(data.data);
  //   });
  // }, []);

  return (
    <Container>
      <Banner />
      {cardData?.length > 0 &&
        cardData?.map((item, index) => (
          <HomePageCard
            index={index}
            image={item?.imageUrl}
            title={item?.name}
            subTitle={item?.description}
            key={item?.key}
            id={item?.id}
          />
        ))}
    </Container>
  );
};

export default HomePage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 70vh;
  max-width: 80vw;
  padding: 0.5rem 0;
  margin: 0 auto;

  /* MEDIA QUERY - TABLET*/
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0;
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    margin: 0;
  } ;
`;
