<script>
export default {
    name: "AuthButton",
    props: {
        name: {
            type: String,
            required: true
        },

    }
}
</script>

<template>
    <button>
        <span>{{ name }}</span>
        <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
        </svg>
    </button>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  align-items: center;
  background: #252b32;
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: clamp(16px, 5vw, 32px);
  justify-content: center;
  margin: 0;
  min-height: 100%;
  padding: 1.5em;
}

button {
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  line-height: 1;
  padding: 1em 1.5em;
  position: relative;
  transition: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

button:hover {
  filter: brightness(1.1);
}

button:active {
  filter: brightness(0.9);
}

button > span {
  display: block;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  z-index: 1;
}

button:hover > span {
  transform: scale(1.05);
}

button:active > span {
  transform: scale(0.95);
}

button > svg {
  fill: #950cde;
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
}

button > svg > path {
    transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

button:hover > svg > path {
  d: path("M0,0 C0,-5 100,-5 100,0 C105,0 105,100 100,100 C100,105 0,105 0,100 C-5,100 -5,0 0,0");
}

button:active > svg > path {
  d: path("M0,0 C30,10 70,10 100,0 C95,30 95,70 100,100 C70,90 30,90 0,100 C5,70 5,30 0,0");
}
</style>