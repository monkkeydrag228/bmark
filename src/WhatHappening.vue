<template>
  <section class="google">
    <section class="diego">
      <div class="ca_and_over">
        <h1>What’s happening in San Diego, CA</h1>

        <p>
          Over 30,000+ people work for us and more than 70 total countries all
          over the world, 1,850 homes for sale 2 open house 3,700 home recently
          sold 150 price reduceed 2 for elsoures.
        </p>
      </div>
      <div class="years">
        <div class="homes">
          <h1>1,850</h1>
          <p>HOMES FOR SALE</p>
        </div>
        <div class="homes">
          <h1>3,700</h1>
          <p>RECENTLY SOLD</p>
        </div>
        <div class="homes">
          <h1>12</h1>
          <p>YEARS EXPERIENCE</p>
        </div>
      </div>
    </section>
    <section class="followers">
      <div class="home_img">
        <img
          src="../src/components/terrah-holly-pmhdkgRCbtE-unsplash 1.png"
          alt=""
        />
      </div>
      <div class="talented">
        <div class="followers_img">
          <img class="odin" src="../src/components/Ellipse 14.png" alt="" />
          <img class="dva" src="../src/components/Ellipse 15.png" alt="" />
          <img class="tri" src="../src/components/Ellipse 16.png" alt="" />
          <img class="chetiri" src="../src/components/Ellipse 17.png" alt="" />
        </div>
        <div class="follow_coment">
          <h2>10+ Talented People</h2>
        </div>
      </div>
      <div class="p_text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>
    </section>
    <section class="little_card">
      <div class="little_img">
        <img src="../src/components/terrah-holly-pmhdkgRCbtE-unsplash 1.png" alt="">
      </div>
      <div class="little_h1_and_p">
        <h1>San Diego, CA</h1>
        <p>Real Estate</p>
      </div>
    </section>
  </section>
</template>
<style>
.little_h1_and_p p {
  color: var(--black-shade-2, #CCCFD0);
text-align: center;
font-family: Noto Serif;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.little_h1_and_p h1{
  color: var(--Black, #021112);
text-align: center;
font-family: Noto Serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.little_img img{
  margin-left: 50px;
  width: 68.665px;
height: 68.665px;
flex-shrink: 0;
border-radius: 50%;
}
.little_card{
  position: relative;
  width: 307.841px;
height: 307.841px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 16px -16px 42px 0px rgba(0, 0, 0, 0.10);
}
.odin {
  position: absolute;
}
.dva {
  left: 35px;
  position: absolute;
  position: relative;
}
.tri {
  left: 15px;
  position: absolute;
  position: relative;
}
.chetiri {
  right: 10px;
  position: absolute;
  position: relative;
}
.talented {
  padding-top: 30px;
  display: flex;
}
.google {
  position: absolute;
  height: 1100px;
  width: 1100px;
  padding-top: 100px;
  display: flex;
  margin-left: 250px;
}
 .p_text p {
  padding-left: 80px;
  margin-top: 30px;
  text-align: center;
  width: 401.246px;
  height: 81.598px;
  flex-shrink: 0;
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 181.7%;
}
.followers_img {
  margin-left: 80px;
}
.follow_coment h2 {
  margin-left: 10px;
  margin-top: 15px;
  width: 154.414px;
  height: 21.573px;
  flex-shrink: 0;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.followers {
  
  width: 583.87px;
  height: 520.523px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 8px 27px 69px 0px rgba(0, 0, 0, 0.08);
}
.home_img img {
  margin-left: 70px;
  width: 461.134px;
  height: 274.135px;
  flex-shrink: 0;
}
.years {
  display: flex;
}
.homes {
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
  border-left: none;
  border-bottom: none;
  border-top: none;
  border-right: 1px solid rgb(156, 156, 156);
}
.homes p {
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.homes h1 {
  color: var(--Black, #021112);

  /* H3 - 42px - Bold */
  font-family: Noto Serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px; /* 140.476% */
}
.ca_and_over h1 {
  width: 694.739px;
  height: 179.896px;
  flex-shrink: 0;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 91px;
}
.ca_and_over p {
  width: 567.811px;
  height: 151.814px;
  flex-shrink: 0;
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
}
</style>