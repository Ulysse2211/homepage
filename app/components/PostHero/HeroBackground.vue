<script setup lang="ts">
import { onMounted } from 'vue'

const GRID_COLOR = 'rgb(64 64 64 / 0.50)'

function drawGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= canvas.clientWidth; x += 50) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.clientHeight);
  }
  for (let y = 0; y <= canvas.clientHeight; y += 50) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.clientWidth, y);
  }
  ctx.stroke();
}

function setupCanvas() {
  const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
  if(!canvas || !canvas.getContext) return
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const dpr = window.devicePixelRatio || 1
  canvas.width = canvas.clientWidth * dpr
  canvas.height = canvas.clientHeight * dpr
  ctx.scale(dpr, dpr)
  drawGrid(ctx, canvas)
}

onMounted(() => {
  setupCanvas()
})
</script>

<template>
  <div class="bg-radial-[at_50%_75%] bg-center  bg-size-[100svh_100svh] md:bg-size-[100svw_100svw] from-indigo-200 via-indigo-100 bg-slate-100 dark:from-indigo-950 dark:via-slate-900 dark:bg-slate-950 to-90% h-[40dvh}">
    <canvas id="hero-canvas" class="w-dvw h-[40dvh]">Hero Background Canva</canvas>
  </div>
</template>

<style scoped>

</style>