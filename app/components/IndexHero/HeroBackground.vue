<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import {IconEyeOff, IconEye} from "@tabler/icons-vue";
const GRID_COLOR = 'rgb(64 64 64 / 0.50)'
const IMG_ARRAY = [
  "/hero-images/unowhy.png",
  "/hero-images/win7.png",
  "/hero-images/acrelec.svg",
  "/hero-images/kis.png",
  "/hero-images/speedlab.png",
  "/hero-images/lady.png",
  "/hero-images/minecraft.svg",
  "/hero-images/dl380pg8.png",
  "/hero-images/tux.svg",
  "/hero-images/dc2s.svg",
  "/hero-images/a6000.png",
  "/hero-images/atten.png",
  "/hero-images/ricola.png",
  "/hero-images/ch341a.png",
]//.flatMap(item => Array(Math.floor(Math.random() * 2) + 1).fill(item));

type Particle = {
  img: HTMLImageElement
  x: number
  y: number
  vx: number
  vy: number
  angle: number
  vAngle: number
  width: number
  height: number
}

let particles: Particle[] = []
let rafId = 0

const animEnabled = ref(true);

function toggleAnim() {
  animEnabled.value = !animEnabled.value;
}

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

function getScaledDimensions(img: HTMLImageElement, maxSize = 70) {
  let w = img.width
  let h = img.height
  if (w > maxSize || h > maxSize) {
    if (w > h) {
      h = (h * maxSize) / w
      w = maxSize
    } else {
      w = (w * maxSize) / h
      h = maxSize
    }
  }
  return { width: w, height: h }
}

function spawnOffscreen(canvas: HTMLCanvasElement, img: HTMLImageElement): Particle {
  const side = Math.floor(Math.random() * 4)
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  const { width, height } = getScaledDimensions(img, 70)
  const margin = Math.max(width, height)
  let x = 0, y = 0
  if (side === 0) { x = Math.random() * w; y = -margin }
  if (side === 1) { x = w + margin; y = Math.random() * h }
  if (side === 2) { x = Math.random() * w; y = h + margin }
  if (side === 3) { x = -margin; y = Math.random() * h }
  const cx = w / 2, cy = h / 2
  const toCenter = Math.atan2(cy - y, cx - x)
  const spread = (Math.random() - 0.5) * (Math.PI / 2)
  const angle = toCenter + spread
  const speed = 0.1 + Math.random() * 0.4
  return {
    img,
    x, y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    angle: Math.random() * Math.PI * 2,
    vAngle: (Math.random() - 0.5) * 0.02,
    width,
    height
  }
}

function spawnOnscreen(canvas: HTMLCanvasElement, img: HTMLImageElement): Particle {
  const p = spawnOffscreen(canvas, img)
  p.x = Math.random() * canvas.clientWidth
  p.y = Math.random() * canvas.clientHeight
  return p
}

function isOffscreen(p: Particle, canvas: HTMLCanvasElement) {
  const margin = Math.max(p.width, p.height)
  return p.x < -margin || p.x > canvas.clientWidth + margin || p.y < -margin || p.y > canvas.clientHeight + margin
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

  for (const src of IMG_ARRAY) {
    const img = new Image();
    img.src = src;

    img.addEventListener("load", () => {
      particles.push(spawnOnscreen(canvas, img))
    });
  }

  function animate() {
    if (!animEnabled.value) return;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    drawGrid(ctx, canvas)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      p.angle += p.vAngle
      if (isOffscreen(p, canvas)) {
        Object.assign(p, spawnOffscreen(canvas, p.img))
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.drawImage(p.img, -p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
    }
    rafId = requestAnimationFrame(animate)
  }

  watch(animEnabled, (enabled, _, onCleanup) => {
    if (enabled) {
      animate()
    }
  })
  if (animEnabled.value) {
    animate()
  }
}

onMounted(() => {
  setupCanvas()
})
onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>
<template>
  <div class="overflow-hidden">
    <span class="absolute inset-x-0 w-dvw bottom-0 z-1 h-dvh bg-linear-to-t from-background from-0% to-transparent to-45%"></span>
    <div class="bg-radial-[at_50%_75%] from-indigo-200 via-indigo-100 bg-slate-100 dark:from-indigo-950 dark:via-slate-900 dark:bg-slate-950 to-90% h-dvh">
      <canvas id="hero-canvas" class="w-dvw h-dvh">Hero Background Canva</canvas>
    </div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button @click="toggleAnim()" variant="outline" size="icon" aria-label="Toggle animations" class="absolute z-40 bottom-5 right-5">
            <IconEyeOff v-if="animEnabled" />
            <IconEye v-else />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p v-if="animEnabled">Mettre en pause l'animation</p>
          <p v-else>Jouer l'animation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
<style scoped>
</style>