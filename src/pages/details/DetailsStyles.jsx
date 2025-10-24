import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start; /* keeps top-aligned cards */
  gap: 2rem; /* space between image & text */
  margin: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: pink;
  border: 1px solid white;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color: #fff;
  border: 2px solid #00adb5;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  /* background-color: darkgray; */

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
  /* background-color: gray; */
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  background-color: lightgray;

  background-color: lightgray;
  border-radius: 10px;
  padding: 1.5rem;
  width: 400px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;
