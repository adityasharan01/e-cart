import styled from "styled-components";

const RegisterPage = ({
  registerInfo,
  setRegisterInfo,
  registerDataOnChange,
  isRegisterValid,
  handleAccountCreation,
}) => {
  return (
    <Container>
      <div className="inner__container">
        <div className="inner__container__left">
          <div className="left__container">
            <h2>Register</h2>
            <h4>We do not share your personal details with anyone.</h4>
          </div>
        </div>
        <div className="inner__container__right">
          <div className="right__container">
            <form onSubmit={handleAccountCreation}>
              <div className="inner__container__right__firstName">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="John" required onChange={registerDataOnChange} />
              </div>
              <div className="inner__container__right__lastName">
                <label for="lastName">First Name</label>
                <input id="lastName" type="text" placeholder="Doe" required onChange={registerDataOnChange} />
              </div>
              <div className="inner__container__right__email">
                <label for="email"> Email</label>
                <input id="email" type="email" placeholder="johndoe@xyz.com" required onChange={registerDataOnChange} />
              </div>
              <div className="inner__container__right__password">
                <label for="password"> Password </label>
                <input
                  id="password"
                  type="password"
                  placeholder="***********"
                  required
                  onChange={registerDataOnChange}
                />
              </div>
              <div className="inner__container__right__cnfpassword">
                <label for="cnfPassword">Confirm Password </label>
                <input
                  id="cnfPassword"
                  type="password"
                  placeholder="***********"
                  required
                  onChange={registerDataOnChange}
                />
              </div>
              <RegisterButton disabled={!isRegisterValid} type="submit">
                Register
              </RegisterButton>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 85vh;
  max-width: 80vw;
  padding: 2rem 0;
  margin: 0 auto;
  margin-bottom: 5rem;

  .inner__container {
    max-width: 60vw;
    margin: 0 auto;

    min-height: 30rem;
    display: flex;

    .inner__container__left {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
      .left__container {
        h2 {
          font-size: 3rem;
          padding-bottom: 1rem;
        }
      }
    }

    .inner__container__right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .right__container form {
        display: flex;
        gap: 1rem;
        height: 20rem;
        flex-direction: column;
        width: 25rem;
        .btn__login {
          font-size: 1rem;
          color: white;
          background-color: #de006f;
          padding: 1rem 1rem;
          border: 0;
          width: 100%;
          cursor: pointer;
          border-radius: 3px;
        }
        .inner__container__right__firstName,
        .inner__container__right__lastName,
        .inner__container__right__cnfpassword,
        .inner__container__right__email {
          display: flex;
          flex-direction: column;

          input {
            padding: 0.6rem 0;
            font-size: 1rem;
            border: none;

            &:focus {
              outline: none;
              border-bottom: 2px solid lightblue;
            }
          }
        }

        .inner__container__right__password {
          display: flex;
          flex-direction: column;
          input {
            padding: 0.6rem 0;
            font-size: 1rem;
            border: none;
            &:focus {
              outline: none;
              border-bottom: 2px solid lightblue;
            }
          }
        }
      }
    }
  }

  /* MEDIA QUERY - TABLET*/

  @media (min-width: 481px) and (max-width: 768px) {
    .inner__container {
      flex-direction: column;
      gap: 1rem;
      max-width: 100vw;
      margin: 0;
    }
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    .inner__container {
      max-width: 100vw;
      margin: 0;
      flex-direction: column;
      gap: 1rem;

      .inner__container__right {
        .right__container form {
          width: 100%;
          .inner__container__right__email,
          .inner__container__right__password {
            width: 100%;
            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

const RegisterButton = styled.button`
  font-size: 1rem;
  color: white;
  background-color: ${props => (props.disabled ? "#ccc" : "#de006f")};
  padding: 1rem 1rem;
  border: 0;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;
`;
