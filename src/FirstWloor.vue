<template>
  <section class="home">
    <div class="h1_home">
      <h1>Ready to find your next home?</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum
      </p>
    </div>
    <div class="home_input">
      <input type="text" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
  </section>
</template>

<script>
</script>

<style>
.home_input button {
  right: 120px;
  top: 115px;
  position: absolute;
  width: 190.501px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--Primary, #13a6ba);
  border: none;
}
.home_input input {
  position: relative;
  padding-left: 40px;
  width: 715.9px;
  height: 105.293px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--primary-shade, #c8f3f9);
  background: #fff;
}
.home_input{
  margin-left: 200px;
}

.home {
  
  display: flex;
  align-items: center;
  top: 1300px;
  position: relative;
}
.h1_home{
  margin-left: 100px;
}
.h1_home p {
  width: 567.811px;
  height: 119.037px;
  flex-shrink: 0;
  color: var(--black-shade, #677071);
  font-family: Noto Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
}
.h1_home h1 {
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
</style>