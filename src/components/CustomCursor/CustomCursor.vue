<template>
  <div>
    <!-- Circle cursor -->
    <div ref="circle" class="custom-circle"></div>
    <!-- Dot cursor -->
    <div ref="dot" class="custom-dot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

// Refs for the cursor elements
const circleRef = ref(null);
const dotRef = ref(null);

onMounted(() => {
  // Function to move the cursors with the mouse
  const moveCursor = (event) => {
    const { clientX, clientY } = event;

    // Animate the circle with a slight delay for a smooth trailing effect
    gsap.to(circleRef.value, {
      x: clientX - circleRef.value.offsetWidth / 2,
      y: clientY - circleRef.value.offsetHeight / 2,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Animate the dot to follow the mouse immediately
    gsap.to(dotRef.value, {
      x: clientX - dotRef.value.offsetWidth / 2,
      y: clientY - dotRef.value.offsetHeight / 2,
      duration: 0.1,
      ease: 'power2.out',
    });
  };

  // Add mousemove event listener
  window.addEventListener('mousemove', moveCursor);

  // Cleanup the event listener on unmount
  onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor);
  });
});
</script>

<style scoped>
/* Hides the default cursor globally */
* {
  cursor: none !important;
}

/* Custom cursor circle */
.custom-circle {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #FFC501;
  pointer-events: none; /* Ensure it doesn't interfere with clickable elements */
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  will-change: transform; /* Improve performance */
}

/* Custom cursor dot */
.custom-dot {
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FFC501;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  will-change: transform; /* Improve performance */
}
</style>
