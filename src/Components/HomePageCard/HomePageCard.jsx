import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePageCard = ({ image, title, subTitle, key, index, id }) => {
  return (
    <Container index={index}>
      <div className="left" key={key}>
        <div className="image__container">
          <img src={image} alt={key} />
        </div>
      </div>
      <div className="right">
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <Link to={`/products/category/${id}`}>
          {/* <button>Explore {title}</button> */}
          Explore {title}
        </Link>
      </div>
    </Container>
  );
};

export default HomePageCard;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.section`
  min-height: 20rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;

  .left,
  .right {
    flex: 1;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    order: ${props => (props.index % 2 === 0 ? "0" : "1")};
  }

  .right {
    order: ${props => (props.index % 2 === 0 ? "1" : "0")};
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    h2 {
      padding-bottom: 0.5rem;
    }

    h4 {
      padding-bottom: 0.8rem;
      font-weight: 300;
    }

    a {
      padding: 0.7rem;
      width: 40%;
      border: none;
      border-radius: 3px;
      color: #fff;
      background-color: #de006f;
      cursor: pointer;
    }
  }

  .left .image__container {
    height: 15rem;
    width: 25rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  /* MEDIA QUERY - TABLET*/
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100vw;

    font-size: 0.8rem;

    .right a {
      width: 70%;
    }
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    width: 100vw;
    font-size: 0.8rem;

    .left .image__container {
      height: 90%;
      width: 90%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .right {
      a {
        width: 69%;
      }
    }
  }
`;
