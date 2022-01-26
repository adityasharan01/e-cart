import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h4>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</h4>
    </Container>
  );
};

export default Footer;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.footer`
  min-height: 10vh;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;