// ALL GLOBAL STYLINGS ARE DECLARED HERE

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* CSS RESET */
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Work Sans', sans-serif;
        /* background-color: var(--white-shade-2); */
        scroll-behavior: smooth;
        height: 100%;
        width: 100%;
        /* overflow-x: hidden; */
           /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    :root {
        --blue-shade-1 : #00B2FF;
        --blue-shade-2: #4DC9FF;
        --blue-shade-3 : #80D9FF;
        --blue-shade-4 : #B3E8FF;
        --blue-shade-5 : #BCE7F0;
        --blue-shade-6 : rgba(77, 201, 255, 1);
        --blue-shade-7 : #3B5998;
;
        
        --white-shade-1 : #ffffff;
        --white-shade-2 : #F7F8FA;
        --white-shade-3 : #E5E5E5;
        --white-shade-4 : rgba(247, 248, 250, 1);
        --white-shade-5 :rgba(245, 245, 245, 1);
        --black-shade-1 : rgb(0, 0, 0);
        --black-shade-2 : rgba(23, 58, 76, 1);
        --green-shade-1 : #37bdae;
        --red-shade-1 : #ff726f;
        --border : 1px solid red;
        --swiper-navigation-size: 30px;
    }
    a {
        text-decoration: none;
        color: var(---black-shade-1);
    }

     li {
        list-style-type: none;
    }
    .swiper-wrapper {
        padding-inline-start: 0;
    }
    
    .swiper-button-prev, .swiper-button-next {
        color: #000;
        /* margin:  0 4.2rem; */
    }
    .swiper-pagination-bullet {
        height: 0.8rem;
        width: 0.8rem;
        opacity: 0.6;
        /* background-color: rgba(250,250,250, 0.6); */
        background-color: #b4b4b4;
    }
    
    .swiper-pagination-bullet-active {
        /* background-color: rgb(250,250,250); */
        background-color: gray;
    }
    

   /* MEDIA QUERY - TABLET*/
  @media (min-width: 481px) and (max-width: 768px) {
      .swiper-container{
          width: 100vw;
      }

  } ;

   /* MEDIA QUERY - MOBILE*/
    @media screen and (max-width: 480px) {
    .swiper-container{
            width: 100vw;
        }
    }


`;
