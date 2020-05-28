<template>
<div class="photo-buttons">
  <button class="standardBtn" @click="$emit('takePicture')">
      <img src="@/assets/camera.png" alt="Camera" class="camera-icon">
  </button>
  <button v-show="sd" class="standardBtn" @click="$emit('addFilter')">
      Filter
  </button>
</div>
</template>

<script>
export default {
    name: "PhotoButton"

}
</script>

<style lang="scss">
.photo-buttons {
    position: fixed;
    display: flex;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
    align-items: flex-end;
}
.standardBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    background-color: rgb(52, 173, 157);
    font-weight: 400;
    font-size: 1.1rem;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: none;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.50);
    margin-bottom: 14vh;
    &:hover {
        background-color: rgb(91, 189, 168);
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
    &:active {
        top: 2px;
    }
    .camera-icon {
        position: relative;
        margin: auto;
        height: 36px;
    }
}
</style>