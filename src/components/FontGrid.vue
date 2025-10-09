<template>
  <div class="grid gap-8">
    <div v-for="fontName in fonts" :key="fontName" class="grid grid-cols-2 gap-6">
      <!-- Light version -->
      <div class="bg-slate-200 rounded-lg p-6">
        <div class="flex justify-between items-center mb-3">
          <p class="text-slate-600 text-xs font-semibold">{{ fontName }} - Light</p>
          <button
            @click="$emit('copy-style', fontName, 'light')"
            class="px-3 py-1 text-xs bg-slate-600 text-white rounded hover:bg-slate-700 transition-colors flex items-center gap-1"
            :title="'Copy CSS style for ' + fontName + ' Light'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy Style
          </button>
        </div>
        <div class="text-center bg-white rounded-xl py-12 border border-slate-200">
          <div
            :class="['text-6xl font-bold', 'text-' + lightTextColor]"
            :style="{
              fontFamily: `'${fontName}'`,
              textShadow: getShadowGradient(lightShadowColor, lightShadowDepth, lightShadowDirection)
            }"
          >
            {{ displayText }}
          </div>
          <div class="text-xs text-slate-500 mt-3 tracking-widest" style="font-family: monospace">
            Ada Package Manager
          </div>
        </div>
      </div>

      <!-- Dark version -->
      <div class="bg-slate-700 rounded-lg p-6">
        <div class="flex justify-between items-center mb-3">
          <p class="text-slate-300 text-xs font-semibold">{{ fontName }} - Dark</p>
          <button
            @click="$emit('copy-style', fontName, 'dark')"
            class="px-3 py-1 text-xs bg-slate-200 text-slate-700 rounded hover:bg-slate-100 transition-colors flex items-center gap-1"
            :title="'Copy CSS style for ' + fontName + ' Dark'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy Style
          </button>
        </div>
        <div class="text-center bg-slate-950 rounded-xl py-10 border border-slate-700">
          <div
            :class="['text-6xl font-bold', 'text-' + darkTextColor]"
            :style="{
              fontFamily: `'${fontName}'`,
              textShadow: getShadowGradient(darkShadowColor, darkShadowDepth, darkShadowDirection)
            }"
          >
            {{ displayText }}
          </div>
          <div class="text-xs text-slate-400 mt-3 tracking-widest" style="font-family: monospace">
            Ada Package Manager
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  fonts: {
    type: Array,
    required: true
  },
  displayText: {
    type: String,
    required: true
  },
  lightTextColor: String,
  lightShadowColor: String,
  lightShadowDepth: Number,
  lightShadowDirection: String,
  darkTextColor: String,
  darkShadowColor: String,
  darkShadowDepth: Number,
  darkShadowDirection: String,
  getShadowGradient: {
    type: Function,
    required: true
  }
})

defineEmits(['copy-style'])
</script>
