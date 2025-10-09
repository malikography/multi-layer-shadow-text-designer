<template>
  <div class="bg-white rounded-xl p-8 mb-8 max-w-6xl mx-auto shadow-sm border border-slate-200">
    <div class="flex items-center justify-between mb-6 cursor-pointer" @click="toggleExpanded">
      <h2 class="text-2xl font-bold text-center flex-1">
        Color Settings
      </h2>
      <button class="text-slate-600 hover:text-slate-900 transition-transform duration-200" :class="{ 'rotate-180': !expanded }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>

    <div v-show="expanded" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Light Theme -->
      <ThemeColorPicker
        title="Light Theme"
        :all-colors="allColors"
        :text-color="lightTextColor"
        :shadow-color="lightShadowColor"
        :shadow-depth="lightShadowDepth"
        :shadow-direction="lightShadowDirection"
        @update:text-color="$emit('update:lightTextColor', $event)"
        @update:shadow-color="$emit('update:lightShadowColor', $event)"
        @update:shadow-depth="$emit('update:lightShadowDepth', $event)"
        @update:shadow-direction="$emit('update:lightShadowDirection', $event)"
      />

      <!-- Dark Theme -->
      <ThemeColorPicker
        title="Dark Theme"
        :all-colors="allColors"
        :text-color="darkTextColor"
        :shadow-color="darkShadowColor"
        :shadow-depth="darkShadowDepth"
        :shadow-direction="darkShadowDirection"
        @update:text-color="$emit('update:darkTextColor', $event)"
        @update:shadow-color="$emit('update:darkShadowColor', $event)"
        @update:shadow-depth="$emit('update:darkShadowDepth', $event)"
        @update:shadow-direction="$emit('update:darkShadowDirection', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeColorPicker from './ThemeColorPicker.vue'

const props = defineProps({
  expanded: {
    type: Boolean,
    required: true
  },
  allColors: {
    type: Array,
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
})

const emit = defineEmits([
  'update:expanded',
  'update:lightTextColor',
  'update:lightShadowColor',
  'update:lightShadowDepth',
  'update:lightShadowDirection',
  'update:darkTextColor',
  'update:darkShadowColor',
  'update:darkShadowDepth',
  'update:darkShadowDirection',
])

function toggleExpanded() {
  emit('update:expanded', !props.expanded)
}
</script>
