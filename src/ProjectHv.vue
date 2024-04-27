<template>
  <header>
    <section class="header_all">
      <div class="header_icon">
        <img src="../src/components/Group 14.png" alt="" />
      </div>
      <div class="ul_and_li">
        <ul>
          <li class="li_navbar">Home</li>
          <li class="li_navbar">Listing</li>
          <li class="li_navbar">Property</li>
          <li class="li_navbar">Agents</li>
          <li class="li_navbar">Blog</li>
          <button class="for_signin_button">Sign in</button>
        </ul>
      </div>
    </section>
  </header>
  <main>
    <section class="easy_to_find_home">
      <div class="for_h1">
        <h1>Easy way to find a home that’s perfect for you</h1>
      </div>
      <div class="for_p">
        The find and most trusted marketplace of design & build house in the
        world.
      </div>
    </section>
    <section class="for_half_card">
      <section class="rent_sell">
        <div class="sale">
          <ul>
            <li class="rent">Rent</li>
            <li>Buy</li>
            <li>Sell</li>
          </ul>
        </div>
        <section class="location">
          <div class="location_div">
            <div class="img_and_p">
              <img src="../src/components/Location.png" alt="" />
              <p>Location</p>
            </div>
            <div class="under_location_h1">
              <h1>Los Angels</h1>
            </div>
          </div>
          <div class="location_div">
            <div class="img_and_p">
              <img src="../src/components/Property.png" alt="" />
              <p>Property Type</p>
            </div>
            <div class="under_location_h1">
              <h1>Delux</h1>
            </div>
          </div>
          <div class="location_div">
            <div class="img_and_p">
              <img src="../src/components/Price.png" alt="" />
              <p>Average Price</p>
            </div>
            <div class="under_location_h1">
              <h1>$7000 - 8000</h1>
            </div>
          </div>
          <div class="near_cost_button">
            <button>Search</button>
          </div>
        </section>
      </section>
      <section class="home_img">
        <img src="../src/components/01-01 1.png" alt="" />
      </section>
    </section>
      
    
  </main>
</template>

<style>
.body{
  position: relative;
}
.header_all {
  display: flex;
  align-items: center;
}
.header_icon img {
  margin-right: 20px;
  width: 130.84px;
  height: 26.934px;
  flex-shrink: 0;
}

.ul_and_li ul {
  padding-left: 40px;
  gap: 80px;
  display: flex;
}
.li_navbar {
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  display: flex;
}
.for_signin_button {
  margin-left: 20px;
  color: white;
  background: var(--Primary, #13a6ba);
  border: none;
  border-radius: 8px;
  width: 107px;
  height: 40px;
  flex-shrink: 0;
}
* {
  margin: 0px;
  padding: 0px;
}
header section {
  padding-top: 20px;
  justify-content: space-around;
  display: flex;
  align-content: center;
  background: #fbedda;
  height: 150px;
}
.for_h1 {
  padding-left: 450px;
  font-family: Noto Serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 105px;
  color: var(--Black, #021112);
  text-align: center;
  width: 988px;
  height: 210px;
  flex-shrink: 0;
}
.for_p {
  color: var(--black-shade, #677071);
  text-align: center;
  font-family: Noto Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
.easy_to_find_home {
  background-color: #fbedda;
}

.for_half_card {
  padding-top: 50px;
}
.rent_sell {
  margin-left: 500px;
  width: 973.423px;
  height: 232.612px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 55px 0px rgba(0, 0, 0, 0.07);
}
.sale ul {
  padding: 30px 40px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px #e0e2e3;
  list-style: none;
  display: flex;
}
.sale ul li {
  padding-left: 40px;
  color: var(--black-shade-2, #cccfd0);
  text-align: center;
  font-family: Noto Serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}
.rent {
  margin-left: 40px;
  width: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 2px grey;
  color: var(--Black, #021112) !important;
  text-align: center;
  font-family: Noto Serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  list-style: none;
  padding-left: 80px;
}
.for_half_card {
  background-color: #fbedda;
}
.location {
  display: flex;
}
.location_div {
  border-left: none;
  border-bottom: none;
  border-top: none;
  border-right: 2px solid #cfcccc;

  margin-top: 30px;
  width: 230px;
  height: 70px;
}
.location img {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}
.location p {
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.under_location_h1 h1 {
  margin-left: 30px;
  display: flex;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
}
.img_and_p {
  display: flex;
}
.near_cost_button button:hover {
  color: #fff;
  background-color: #13a6ba;
}
.near_cost_button button {
  color: #25bfd3;
  text-align: center;
  font-family: Noto Serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 103.571% */
  width: 176.314px;
  height: 72.979px;
  flex-shrink: 0;
  border: 3px solid #13a6ba;
  border-radius: 20px;
  background: #fff;
  margin-top: 30px;
  margin-left: 50px;
  transition: all 2s;
}
.home_img img {
  height: 1200px;
}
.properties {
  margin-left: 250px;
  width: 1550px;
  height: 1550px;
}
.button_and_h1 {
  padding-top: 300px;
}
.see {
  display: flex;
}
.see h2 {
  color: var(--Black, #021112);

  font-family: Noto Serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 91px;
}
.p_with_button {
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.radio label {
  padding-right: 30px;
  color: var(--black-shade-2, #cccfd0);
  font-family: Noto Serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
}
.radio input:hover {
  color: var(--Accent-3, #772d8b);
}
.radio label:hover {
  color: var(--Accent-3, #772d8b);
}
.radio input {
  width: 15.481px;
  height: 15.481px;
  flex-shrink: 0;
  padding: 20px;
}
.cards {
  display: flex;
  padding-top: 150px;
}
.card:hover {
  box-shadow: 55px 55px 55px 36px rgba(0, 0, 0, 0.11);
}
.card {
  padding-top: 50px;
  width: 520px;
  height: 840.068px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #fff;
  transition: all 2s;
}
.icon_and_h1{
  margin-left: 30px;
}
.card img {
  width: 472.393px;
  height: 390.508px;
  flex-shrink: 0;
  border-radius: 5%;
}
.under_img_h1 {
  text-align: left;
  margin-left: 25px;
}
.under_img_h1 h2 {
  padding-top: 30px;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 49px;
}
.under_img_h1 p {
  padding-top: 5px;
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.under_img_h1 h1 {
  padding-top: 20px;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 91px;
}
.beds ul li {
  color: var(--black-shade-2, #cccfd0);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-right: 1.5px solid;
  padding-left: 20px;
  padding-right: 20px;
}
.beds ul {
  padding-left: 20px;
  display: flex;
  align-items: center;
  list-style: none;
}
.beds_under_button button {
  background-color: white;
  color: #13a6ba;
  border: solid 3px #13a6ba;
  text-align: center;
  font-family: Noto Serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 103.571% */
  margin-top: 50px;
  margin-left: 10px;
  width: 462.607px;
  height: 82.979px;
  flex-shrink: 0;
  border-radius: 20px;
  transition: all 1s;
}
.beds_under_button button:hover {
  color: #fff;
  background: var(--Primary, #13a6ba);
}
.next_and_back {
  display: flex;
  justify-content: end;
}
.next_and_back button:hover {
  color: #fff;
  background: var(--Accent-3, #772d8b);
}
.next_and_back button {
  margin-top: 100px;
  margin-left: 20px;
  font-size: 30px;
  color: #772d8b;
  width: 87.874px;
  height: 88.847px;
  flex-shrink: 0;
  border: none;
  border-radius: 9px;
  background: var(--Accent-3, #fff);
  transition: all 1s;
  /* cursor: pointer; */
}
.zashita_img {
  width: 849.399px;
  height: 1004.099px;
  flex-shrink: 0;
}

.for_near_h1 {
  padding-top: 100px;
  padding-bottom: 20px;
}
.for_near_h1 h1 {
  margin-left: 40px;
  text-align: left;
  width: 594.739px;
  height: 179.896px;
  flex-shrink: 0;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 91px;
}
.percent100 img {
  display: flex;
  width: 102px;
  height: 103px;
  padding: 18.559px 23.539px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.percent100 {
  margin-top: 50px;
  display: flex;
  height: 80px;
  text-align: center;
}

.pishka p {
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.pishka h1 {
  margin-top: 30px;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
}
.all_procents {
  position: relative;
  padding-top: 200px;
  margin-left: 150px;
  display: flex;
}
.circle {
  width: 573.553px;
  height: 573.553px;
  flex-shrink: 0;
  border-radius: 573.553px;
  background: var(--secondary-shade, #feeceb);
  margin-right: 200px;
  position: absolute;
  top: 334-0px;
  left: -250px;

  }
.zashita{
    height: 1100px ;
}
</style>