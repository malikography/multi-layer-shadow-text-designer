<template>
  <div class="bg-white rounded-xl p-6 mb-8 max-w-6xl mx-auto shadow-sm border border-slate-200">
    <h2 class="text-xl font-bold mb-4">Font Manager</h2>

    <div class="flex gap-3 mb-4">
      <input
        v-model="localNewFontName"
        @keypress.enter="addFont"
        type="text"
        placeholder="Enter Google Font name (e.g., Roboto)"
        class="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        @click="addFont"
        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
      >
        Add Font
      </button>
    </div>

    <div class="mb-2">
      <p class="text-sm text-slate-600 mb-2">Current fonts:</p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="font in fonts"
          :key="font"
          class="flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm"
        >
          <span>{{ font }}</span>
          <button
            @click="removeFont(font)"
            class="text-purple-700 hover:text-purple-900 font-bold text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  fonts: {
    type: Array,
    required: true
  },
  newFontName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:fonts', 'update:newFontName'])

const localNewFontName = ref(props.newFontName)

watch(() => props.newFontName, (val) => {
  localNewFontName.value = val
})

watch(localNewFontName, (val) => {
  emit('update:newFontName', val)
})

function addFont() {
  const fontName = localNewFontName.value.trim()
  if (!fontName) {
    alert("Please enter a font name")
    return
  }

  if (props.fonts.includes(fontName)) {
    alert("This font is already in the list")
    return
  }

  const newFonts = [...props.fonts, fontName]
  emit('update:fonts', newFonts)
  localNewFontName.value = ""
}

function removeFont(fontName) {
  const newFonts = props.fonts.filter((f) => f !== fontName)
  emit('update:fonts', newFonts)
}
</script>
