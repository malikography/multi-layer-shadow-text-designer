<template>
  <div class="bg-white rounded-xl p-6 mb-8 max-w-6xl mx-auto shadow-sm border border-slate-200">
    <h2 class="text-xl font-bold mb-4">Text & Shadow Settings</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Main Text -->
      <div class="lg:col-span-3">
        <h3 class="text-lg font-semibold mb-3 text-purple-600">Main Text</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Display Text:</label>
            <input
              :value="displayText"
              @input="$emit('update:displayText', $event.target.value)"
              type="text"
              placeholder="Enter text to display"
              class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">
              Text Size: {{ textSize }}px
            </label>
            <input
              :value="textSize"
              @input="$emit('update:textSize', Number($event.target.value))"
              type="range"
              min="20"
              max="120"
              step="2"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>20px</span>
              <span>120px</span>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">
              Font Weight: {{ textWeight }}
            </label>
            <input
              :value="textWeight"
              @input="$emit('update:textWeight', Number($event.target.value))"
              type="range"
              min="100"
              max="900"
              step="100"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>Thin</span>
              <span>Bold</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Subtitle -->
      <div class="lg:col-span-3 border-t border-slate-200 pt-4">
        <h3 class="text-lg font-semibold mb-3 text-purple-600">Subtitle</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Subtitle Text:</label>
            <input
              :value="subtitleText"
              @input="$emit('update:subtitleText', $event.target.value)"
              type="text"
              placeholder="Enter subtitle text"
              class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">Subtitle Font:</label>
            <select
              :value="subtitleFont"
              @change="$emit('update:subtitleFont', $event.target.value)"
              class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="monospace">Monospace</option>
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option v-for="font in allFonts" :key="font" :value="`'${font}', sans-serif`">{{ font }}</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">
              Subtitle Size: {{ subtitleSize }}px
            </label>
            <input
              :value="subtitleSize"
              @input="$emit('update:subtitleSize', Number($event.target.value))"
              type="range"
              min="8"
              max="24"
              step="1"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>8px</span>
              <span>24px</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Shadow Settings -->
      <div class="lg:col-span-3 border-t border-slate-200 pt-4">
        <h3 class="text-lg font-semibold mb-3 text-purple-600">Shadow Settings</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-semibold mb-2">
              Shadow Layers: {{ shadowLayers }}
            </label>
            <input
              :value="shadowLayers"
              @input="$emit('update:shadowLayers', Number($event.target.value))"
              type="range"
              min="1"
              max="6"
              step="1"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>1 layer</span>
              <span>6 layers</span>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">
              Shadow Angle: {{ shadowAngle }}°
            </label>
            <input
              :value="shadowAngle"
              @input="$emit('update:shadowAngle', Number($event.target.value))"
              type="range"
              min="0"
              max="360"
              step="15"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>0° (→)</span>
              <span>180° (←)</span>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold mb-2">
              Shadow Distance: {{ shadowDistance }}px
            </label>
            <input
              :value="shadowDistance"
              @input="$emit('update:shadowDistance', Number($event.target.value))"
              type="range"
              min="1"
              max="10"
              step="1"
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>Close</span>
              <span>Far</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
  shadowLayers: {
    type: Number,
    required: true
  },
  shadowAngle: {
    type: Number,
    required: true
  },
  shadowDistance: {
    type: Number,
    required: true
  },
  allFonts: {
    type: Array,
    required: true
  }
})

defineEmits(['update:displayText', 'update:textSize', 'update:textWeight', 'update:subtitleText', 'update:subtitleFont', 'update:subtitleSize', 'update:shadowLayers', 'update:shadowAngle', 'update:shadowDistance'])
</script>
