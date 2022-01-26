import styled from "styled-components";
import ShopContext from "../../Contexts/CartContext/ShopContext";

const CartItem = ({ ele, index }) => {
  return (
    <ShopContext.Consumer>
      {context => (
        <Container key={index}>
          <div className="left">
            <div className="img__container">
              <img src={ele.imageURL} alt="" />
            </div>
            <div className="desc">
              <div className="title">
                <h5>{ele.title}</h5>
              </div>
              <div className="fx">
                <button onClick={context.removeProductFromCart.bind(this, ele.id)}>-</button>
                <span>{ele.quantity}</span>
                <button onClick={context.addProductToCart.bind(this, ele)}>+</button>
                <span>X Rs. {ele.price}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span>Rs. {ele.quantity * ele.price}</span>
          </div>
        </Container>
      )}
    </ShopContext.Consumer>
  );
};

export default CartItem;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.footer`
  background-color: #fff;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #eee;

  display: flex;

  .left {
    flex: 3;

    display: flex;
    gap: 1rem;

    .img__container {
      height: 5rem;
      width: 5rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .desc {
    .fx {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        padding: 0.3rem 0.7rem;
        border: none;
        border-radius: 3px;
        background-color: #de006f;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;