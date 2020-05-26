<template>
<div class="photo-button">
  <button class="photo" @click="$emit('takePicture')">
      <img src="@/assets/camera.png" alt="Camera" class="camera-icon">
  </button>
</div>
</template>

<script>
export default {
    name: "PhotoButton"

}
</script>

<style lang="scss">
.photo-button {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    .photo {
        display: flex;
        margin: auto auto 100px auto;
        padding: 0;
        position: relative;
        background-color: rgb(52, 173, 147);
        font-weight: 400;
        font-size: 1.1rem;
        width: 80px;
        height: 80px;
        border-radius: 50px;
        border: none;
        box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.50);
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
}
</style>