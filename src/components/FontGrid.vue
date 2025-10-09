<template>
  <div class="grid gap-8">
    <div v-for="fontName in fonts" :key="fontName" class="grid grid-cols-2 gap-6">
      <!-- Light version -->
      <div class="bg-slate-200 rounded-lg p-6">
        <div class="flex justify-between items-center mb-3">
          <p class="text-slate-600 text-xs font-semibold">{{ fontName }} - Light</p>
          <button
            @click="copyStyleWithFeedback(fontName, 'light')"
            :class="[
              'px-3 py-1 text-xs rounded transition-all flex items-center gap-1',
              copiedStyle === `${fontName}-light` 
                ? 'bg-green-600 text-white' 
                : 'bg-slate-600 text-white hover:bg-slate-700'
            ]"
            :title="'Copy CSS style for ' + fontName + ' Light'"
          >
            <svg v-if="copiedStyle !== `${fontName}-light`" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ copiedStyle === `${fontName}-light` ? 'Copied!' : 'Copy Style' }}
          </button>
        </div>
        <div class="text-center bg-white rounded-xl py-12 border border-slate-200">
          <div
            :class="['font-bold', 'text-' + lightTextColor]"
            :style="{
              fontFamily: `'${fontName}'`,
              fontSize: textSize + 'px',
              fontWeight: textWeight,
              textShadow: getShadowGradient(lightShadowColor, lightShadowDepth, lightShadowDirection)
            }"
          >
            {{ displayText }}
          </div>
          <div 
            class="text-slate-500 mt-3 tracking-widest"
            :style="{
              fontFamily: subtitleFont,
              fontSize: subtitleSize + 'px'
            }"
          >
            {{ subtitleText }}
          </div>
        </div>
      </div>

      <!-- Dark version -->
      <div class="bg-slate-700 rounded-lg p-6">
        <div class="flex justify-between items-center mb-3">
          <p class="text-slate-300 text-xs font-semibold">{{ fontName }} - Dark</p>
          <button
            @click="copyStyleWithFeedback(fontName, 'dark')"
            :class="[
              'px-3 py-1 text-xs rounded transition-all flex items-center gap-1',
              copiedStyle === `${fontName}-dark` 
                ? 'bg-green-600 text-white' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-100'
            ]"
            :title="'Copy CSS style for ' + fontName + ' Dark'"
          >
            <svg v-if="copiedStyle !== `${fontName}-dark`" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ copiedStyle === `${fontName}-dark` ? 'Copied!' : 'Copy Style' }}
          </button>
        </div>
        <div class="text-center bg-slate-950 rounded-xl py-10 border border-slate-700">
          <div
            :class="['font-bold', 'text-' + darkTextColor]"
            :style="{
              fontFamily: `'${fontName}'`,
              fontSize: textSize + 'px',
              fontWeight: textWeight,
              textShadow: getShadowGradient(darkShadowColor, darkShadowDepth, darkShadowDirection)
            }"
          >
            {{ displayText }}
          </div>
          <div 
            class="text-slate-400 mt-3 tracking-widest"
            :style="{
              fontFamily: subtitleFont,
              fontSize: subtitleSize + 'px'
            }"
          >
            {{ subtitleText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  fonts: {
    type: Array,
    required: true
  },
  displayText: {
    type: String,
    required: true
  },
  textSize: {
    type: Number,
    required: true
  },
  textWeight: {
    type: Number,
    required: true
  },
  subtitleText: {
    type: String,
    required: true
  },
  subtitleFont: {
    type: String,
    required: true
  },
  subtitleSize: {
    type: Number,
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

const emit = defineEmits(['copy-style'])

const copiedStyle = ref(null)

function copyStyleWithFeedback(fontName, theme) {
  emit('copy-style', fontName, theme)
  copiedStyle.value = `${fontName}-${theme}`
  
  setTimeout(() => {
    copiedStyle.value = null
  }, 2000)
}
</script>
