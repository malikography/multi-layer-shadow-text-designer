<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-center">
          Multi-Layer Shadow Text Designer
        </h1>
        <h2 class="text-xl font-bold mb-4 text-center">Using Tailwind CSS colors</h2>
        
        <!-- Action Buttons -->
        <ActionButtons 
          :copy-link-text="copyLinkText"
          @reset="resetToDefaults"
          @copy-url="copyURL"
        />
      </header>

      <!-- Font Manager -->
      <FontManager
        v-model:fonts="fonts"
        v-model:new-font-name="newFontName"
        @update:fonts="updateGoogleFontsLink"
      />

      <!-- Text and Shadow Settings -->
      <ShadowSettings
        v-model:display-text="displayText"
        v-model:text-size="textSize"
        v-model:text-weight="textWeight"
        v-model:subtitle-text="subtitleText"
        v-model:subtitle-font="subtitleFont"
        v-model:subtitle-size="subtitleSize"
        v-model:shadow-layers="shadowLayers"
        v-model:shadow-angle="shadowAngle"
        v-model:shadow-distance="shadowDistance"
        :all-fonts="fonts"
      />

      <!-- Color Controls -->
      <ColorControls
        v-model:expanded="colorSectionExpanded"
        v-model:light-text-color="lightTextColor"
        v-model:light-shadow-color="lightShadowColor"
        v-model:light-shadow-depth="lightShadowDepth"
        v-model:light-shadow-direction="lightShadowDirection"
        v-model:dark-text-color="darkTextColor"
        v-model:dark-shadow-color="darkShadowColor"
        v-model:dark-shadow-depth="darkShadowDepth"
        v-model:dark-shadow-direction="darkShadowDirection"
        :all-colors="allColors"
      />

      <!-- Font Grid -->
      <FontGrid
        :fonts="fonts"
        :display-text="displayText"
        :text-size="textSize"
        :text-weight="textWeight"
        :subtitle-text="subtitleText"
        :subtitle-font="subtitleFont"
        :subtitle-size="subtitleSize"
        :light-text-color="lightTextColor"
        :light-shadow-color="lightShadowColor"
        :light-shadow-depth="lightShadowDepth"
        :light-shadow-direction="lightShadowDirection"
        :dark-text-color="darkTextColor"
        :dark-shadow-color="darkShadowColor"
        :dark-shadow-depth="darkShadowDepth"
        :dark-shadow-direction="darkShadowDirection"
        :get-shadow-gradient="getShadowGradient"
        @copy-style="copyStyle"
      />
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import ActionButtons from './components/ActionButtons.vue'
import FontManager from './components/FontManager.vue'
import ShadowSettings from './components/ShadowSettings.vue'
import ColorControls from './components/ColorControls.vue'
import FontGrid from './components/FontGrid.vue'
import Footer from './components/Footer.vue'
import { colorPalette } from './utils/colors'
import { loadFromURL, updateURL, type AppState } from './utils/urlSync'

// State
const fonts = ref([
  "Geist",
  "Montserrat",
  "Raleway",
  "Poppins",
  "Nunito",
  "MuseoModerno",
  "Texturina",
  "Dai Banna SIL",
  "Ancizar Sans",
])
const newFontName = ref("")
const displayText = ref("Alire")
const textSize = ref(60)
const textWeight = ref(700)
const subtitleText = ref("Ada Package Manager")
const subtitleFont = ref("monospace")
const subtitleSize = ref(12)
const shadowLayers = ref(3)
const shadowAngle = ref(45)
const shadowDistance = ref(3)
const colorSectionExpanded = ref(true)
const lightTextColor = ref("purple-600")
const lightShadowColor = ref("yellow-300")
const lightShadowDepth = ref(0)
const lightShadowDirection = ref("darken")
const darkTextColor = ref("yellow-300")
const darkShadowColor = ref("purple-500")
const darkShadowDepth = ref(1)
const darkShadowDirection = ref("darken")
const copyLinkText = ref("Copy Share Link")

// Computed
const allColors = computed(() => {
  const colors = []
  Object.entries(colorPalette).forEach(([colorName, shades]) => {
    if (colorName === 'black' || colorName === 'white') {
      colors.push(colorName)
    } else {
      shades.forEach((shade) => {
        colors.push(`${colorName}-${shade}`)
      })
    }
  })
  return colors
})

// Watchers for URL sync
watch(displayText, () => updateURL(getState()))
watch(textSize, () => updateURL(getState()))
watch(textWeight, () => updateURL(getState()))
watch(subtitleText, () => updateURL(getState()))
watch(subtitleFont, () => updateURL(getState()))
watch(subtitleSize, () => updateURL(getState()))
watch(shadowLayers, () => updateURL(getState()))
watch(shadowAngle, () => updateURL(getState()))
watch(shadowDistance, () => updateURL(getState()))
watch(colorSectionExpanded, () => updateURL(getState()))
watch(lightTextColor, () => updateURL(getState()))
watch(lightShadowColor, () => updateURL(getState()))
watch(lightShadowDepth, () => updateURL(getState()))
watch(lightShadowDirection, () => updateURL(getState()))
watch(darkTextColor, () => updateURL(getState()))
watch(darkShadowColor, () => updateURL(getState()))
watch(darkShadowDepth, () => updateURL(getState()))
watch(darkShadowDirection, () => updateURL(getState()))
watch(fonts, () => updateURL(getState()), { deep: true })

// Methods
function getState(): AppState {
  return {
    displayText: displayText.value,
    textSize: textSize.value,
    textWeight: textWeight.value,
    subtitleText: subtitleText.value,
    subtitleFont: subtitleFont.value,
    subtitleSize: subtitleSize.value,
    shadowLayers: shadowLayers.value,
    shadowAngle: shadowAngle.value,
    shadowDistance: shadowDistance.value,
    colorSectionExpanded: colorSectionExpanded.value,
    lightTextColor: lightTextColor.value,
    lightShadowColor: lightShadowColor.value,
    lightShadowDepth: lightShadowDepth.value,
    lightShadowDirection: lightShadowDirection.value,
    darkTextColor: darkTextColor.value,
    darkShadowColor: darkShadowColor.value,
    darkShadowDepth: darkShadowDepth.value,
    darkShadowDirection: darkShadowDirection.value,
    fonts: fonts.value,
  }
}

function setState(state: AppState): void {
  if (state.displayText !== undefined) displayText.value = state.displayText
  if (state.textSize !== undefined) textSize.value = state.textSize
  if (state.textWeight !== undefined) textWeight.value = state.textWeight
  if (state.subtitleText !== undefined) subtitleText.value = state.subtitleText
  if (state.subtitleFont !== undefined) subtitleFont.value = state.subtitleFont
  if (state.subtitleSize !== undefined) subtitleSize.value = state.subtitleSize
  if (state.shadowLayers !== undefined) shadowLayers.value = state.shadowLayers
  if (state.shadowAngle !== undefined) shadowAngle.value = state.shadowAngle
  if (state.shadowDistance !== undefined) shadowDistance.value = state.shadowDistance
  if (state.colorSectionExpanded !== undefined) colorSectionExpanded.value = state.colorSectionExpanded
  if (state.lightTextColor !== undefined) lightTextColor.value = state.lightTextColor
  if (state.lightShadowColor !== undefined) lightShadowColor.value = state.lightShadowColor
  if (state.lightShadowDepth !== undefined) lightShadowDepth.value = state.lightShadowDepth
  if (state.lightShadowDirection !== undefined) lightShadowDirection.value = state.lightShadowDirection
  if (state.darkTextColor !== undefined) darkTextColor.value = state.darkTextColor
  if (state.darkShadowColor !== undefined) darkShadowColor.value = state.darkShadowColor
  if (state.darkShadowDepth !== undefined) darkShadowDepth.value = state.darkShadowDepth
  if (state.darkShadowDirection !== undefined) darkShadowDirection.value = state.darkShadowDirection
  if (state.fonts !== undefined) {
    fonts.value = state.fonts
    updateGoogleFontsLink()
  }
}

function updateGoogleFontsLink(): void {
  const existingLink = document.getElementById('googleFontsLink')
  if (existingLink) {
    existingLink.remove()
  }
  
  const fontParams = fonts.value
    .map((font) => {
      const urlFont = font.replace(/\s+/g, '+')
      return `family=${urlFont}:wght@400;500;600;700;800;900`
    })
    .join('&')

  const link = document.createElement('link')
  link.id = 'googleFontsLink'
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?${fontParams}&display=swap`
  document.head.appendChild(link)
}

function getShadowGradient(baseColorClass: string, shadeStrength = 0, direction: 'darken' | 'lighten' = 'darken'): string {
  // Handle black and white (no shades)
  if (baseColorClass === 'black' || baseColorClass === 'white') {
    const angleRad = (shadowAngle.value * Math.PI) / 180
    const layers = []
    
    for (let i = 0; i < shadowLayers.value; i++) {
      const distance = (i + 1) * shadowDistance.value
      const offsetX = Math.round(Math.cos(angleRad) * distance)
      const offsetY = Math.round(Math.sin(angleRad) * distance)
      layers.push(`${offsetX}px ${offsetY}px 0 var(--color-${baseColorClass})`)
    }
    
    return layers.join(', ')
  }
  
  const [colorName, shade] = baseColorClass.split('-')
  const shadeNum = parseInt(shade)
  const shades = colorPalette[colorName]

  // Find index of current shade
  const currentIndex = shades.indexOf(shadeNum)

  // Convert angle to radians
  const angleRad = (shadowAngle.value * Math.PI) / 180
  
  // Generate shadow layers based on shadowLayers setting
  const layers = []
  for (let i = 0; i < shadowLayers.value; i++) {
    let shadeIndex
    if (direction === 'lighten') {
      // Go towards lighter shades (lower index)
      shadeIndex = Math.max(currentIndex - i - shadeStrength, 0)
    } else {
      // Go towards darker shades (higher index)
      shadeIndex = Math.min(currentIndex + i + shadeStrength, shades.length - 1)
    }
    
    const currentShade = shades[shadeIndex]
    const distance = (i + 1) * shadowDistance.value
    
    // Calculate x and y offsets based on angle
    const offsetX = Math.round(Math.cos(angleRad) * distance)
    const offsetY = Math.round(Math.sin(angleRad) * distance)
    
    layers.push(`${offsetX}px ${offsetY}px 0 var(--color-${colorName}-${currentShade})`)
  }
  return layers.join(', ')
}

function resetToDefaults(): void {
  // Reset all values to defaults
  displayText.value = "Alire"
  textSize.value = 60
  textWeight.value = 700
  subtitleText.value = "Ada Package Manager"
  subtitleFont.value = "monospace"
  subtitleSize.value = 12
  shadowLayers.value = 3
  shadowAngle.value = 45
  shadowDistance.value = 3
  colorSectionExpanded.value = true
  lightTextColor.value = "purple-600"
  lightShadowColor.value = "yellow-300"
  lightShadowDepth.value = 0
  lightShadowDirection.value = "darken"
  darkTextColor.value = "yellow-300"
  darkShadowColor.value = "purple-500"
  darkShadowDepth.value = 1
  darkShadowDirection.value = "darken"
  
  fonts.value = [
    "Geist",
    "Montserrat",
    "Raleway",
    "Poppins",
    "Nunito",
    "MuseoModerno",
    "Texturina",
    "Dai Banna SIL",
    "Ancizar Sans",
  ]
  updateGoogleFontsLink()
  
  window.history.replaceState({}, '', window.location.pathname)
}

async function copyURL(): Promise<void> {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    copyLinkText.value = "✓ Link Copied!"
    setTimeout(() => {
      copyLinkText.value = "Copy Share Link"
    }, 2000)
  } catch (err) {
    alert('Failed to copy URL: ' + err)
  }
}

async function copyStyle(fontName: string, theme: string): Promise<void> {
  const isLight = theme === 'light'
  const textColor = isLight ? lightTextColor.value : darkTextColor.value
  const shadowColor = isLight ? lightShadowColor.value : darkShadowColor.value
  const shadowDepth = isLight ? lightShadowDepth.value : darkShadowDepth.value
  const shadowDirection = isLight ? lightShadowDirection.value : darkShadowDirection.value
  
  const textShadow = getShadowGradient(shadowColor, shadowDepth, shadowDirection)
  
  const cssStyle = `font-family: '${fontName}', sans-serif;
color: var(--color-${textColor});
text-shadow: ${textShadow};`
  
  try {
    await navigator.clipboard.writeText(cssStyle)
  } catch (err) {
    alert('Failed to copy style: ' + err)
  }
}

// Lifecycle
onMounted(() => {
  updateGoogleFontsLink()
  const state = loadFromURL(allColors.value)
  setState(state)
})
</script>
