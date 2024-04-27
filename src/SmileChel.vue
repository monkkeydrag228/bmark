<template>
  <section class="chel_with_smile">
    <div class="chel_img">
      <img src="../src/components/02 1.png" alt="" />
    </div>
    <div class="client">
      <h3>CLIENT TESTIMONIALS</h3>
      <h1>See what says our customer</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h4 >Jon Smith</h4>
      <h6>Customer</h6>
    </div>
  </section>
</template>

<style>
.client{
  padding-top: 200px;
  margin-left: 250px;
  text-align: left;
}
.client h6 {
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
.client h4 {
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
}
.client p {
  width: 694.739px;
  height: 210.148px;
  flex-shrink: 0;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
}
.client h1 {
  width: 450.739px;
  height: 179.896px;
  flex-shrink: 0;
  color: var(--Black, #021112);
  font-family: Noto Serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 91px;
}
.client h3 {
  color: var(--Primary, #13a6ba);
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 233.333% */
  letter-spacing: 8.01px;
}

.chel_img img {
  bottom: 250px;
  position: relative;
  width: 810.742px;
  height: 1235.258px;
  flex-shrink: 0;
  padding-bottom: 100px;
}
.chel_with_smile {
  display: flex;
  top: 1000px;
  position: relative;
  width: 1920px;
  height: 992px;
  flex-shrink: 0;
  background: var(--accent-2-shade-2, #fdf6ed);
}
</style>