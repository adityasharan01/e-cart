import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartPage from "./Pages/CartPage/CartPage";
import { UserContext } from "./Contexts/UserContext/UserContext";
import { useHistory } from "react-router";
import { PrivateRoute } from "./Utility/PrivateRouter";

function App() {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [cardData, setCardData] = useState(null);

  const [allProductsData, setAllProductsData] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const [isRegisterValid, setIsRegisterValid] = useState(false);

  const [signinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });

  const [isSignInfoValid, setIsSignInfoValid] = useState(false);

  const registerDataOnChange = e => {
    setRegisterInfo(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const loginDataOnChange = e => {
    setSigninInfo(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleAccountCreation = e => {
    e.preventDefault();

    localStorage.setItem("userInfo", JSON.stringify({ info: registerInfo, userCart: [] }));

    setIsLoggedIn(true);
    setRegisterInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cnfPassword: "",
    });
    history.push("/");
  };

  const handleLogin = e => {
    e.preventDefault();

    const localStorageData = JSON.parse(localStorage.getItem("userInfo"));

    if (localStorageData.info.password === signinInfo.password) {
      setIsLoggedIn(true);
      setSigninInfo({
        email: "",
        password: "",
      });
      history.push("/");
    } else {
      alert("wrong credentials.");
    }
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    axios.get(`/server/categories/index.get.json`).then(data => {
      setCardData(data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/server/products/index.get.json`).then(data => {
      setAllProductsData(data.data);
    });
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsRegisterValid(
        registerInfo.firstName.length > 0 &&
          registerInfo.lastName.length > 0 &&
          registerInfo.email.includes("@") &&
          registerInfo.password.length >= 5 &&
          registerInfo.cnfPassword.length >= 5 &&
          registerInfo.password === registerInfo.cnfPassword
      );
    }, 500);

    return () => clearTimeout(identifier);
  }, [registerInfo]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <HomePage cardData={cardData} />
        </Route>
        <Route path="/products/category/:id" exact>
          <ProductsPage cardData={cardData} allProductsData={allProductsData} />
        </Route>
        <Route path="/signin" exact>
          <SigninPage
            handleLogin={handleLogin}
            loginDataOnChange={loginDataOnChange}
            setIsSignInfoValid={setIsSignInfoValid}
            signinInfo={signinInfo}
            isSignInfoValid={isSignInfoValid}
          />
        </Route>
        <Route path="/register" exact>
          <RegisterPage
            registerInfo={registerInfo}
            setRegisterInfo={setRegisterInfo}
            registerDataOnChange={registerDataOnChange}
            isRegisterValid={isRegisterValid}
            handleAccountCreation={handleAccountCreation}
          />
        </Route>
        {/* <Route path="/cart" exact>
          <CartPage />
        </Route> */}
        <PrivateRoute exact="exact" path="/cart" component={CartPage} />

        <Route path="*">{/* <RegisterPage /> */}</Route>
      </Switch>

      
      <Footer />
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div``;
