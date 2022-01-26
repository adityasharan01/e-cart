import { useContext } from "react";
import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem";
import ShopContext from "../../Contexts/CartContext/ShopContext";

const CartPage = () => {
  const { cart } = useContext(ShopContext);
  console.log(cart, "CONTTTT");

  const calcCartTotal = () => {
    let total = 0;

    cart.forEach(ele => {
      total += total + ele.price * ele.quantity;
    });

    console.log(total, "totaltotaltotaltotal");
    return total;
  };

  return (
    <ShopContext.Consumer>
      {context => (
        <>
          {context.cart.length > 0 ? (
            <Container>
              <div className="title">
                <h3> My Cart ({context.cart.length} item)</h3>
              </div>
              <CartItems>
                {context.cart.map((ele, index) => (
                  <CartItem ele={ele} index={index} />
                ))}
                <div className="promo">
                  <img src="/static/images/lowest-price.png" alt="" />
                  <span>You won't find it cheaper anywhere.</span>
                </div>
                <div className="checkout-btn">
                  <button>
                    <span>Process to checkout</span>
                    <span>Rs. {calcCartTotal()}</span>
                  </button>
                </div>
              </CartItems>
            </Container>
          ) : (
            <Container>
              <CartItems>
                <NoItem>
                  <h1>No items in your cart.</h1>
                  <h2>Your favourite items are just a click away.</h2>
                </NoItem>
              </CartItems>
            </Container>
          )}
        </>
      )}
    </ShopContext.Consumer>
  );
};

export default CartPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 75vh;
  max-width: 80vw;
  padding: 0.5rem 0;
  margin: 0 auto;

  background-color: #eee;

  .title {
    margin: 1rem 0;
    h3 {
      padding: 0.8rem 0.5rem;
      background-color: #fff;
    }
  }

  /* MEDIA QUERY - TABLET*/
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 100vw;
    margin: 0;
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    max-width: 100vw;
    margin: 0;
    gap: 0.5rem;
  }
`;

const CartItems = styled.section`
  background-color: #eee;
  min-height: 37rem;
  position: relative;
  padding: 0 0.5rem;

  .promo {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #fff;
  }

  .checkout-btn {
    position: absolute;
    bottom: 1%;
    height: 3rem;
    width: 100%;

    button {
      height: 100%;
      width: 100%;
      background-color: #de006f;
      border: none;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

const NoItem = styled.section`
  text-align: center;
  margin-top: 10rem;
`;