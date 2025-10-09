<template>
  <div class="bg-white rounded-xl p-6 mb-8 max-w-6xl mx-auto shadow-sm border border-slate-200">
    <h2 class="text-xl font-bold mb-4">Text & Shadow Settings</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
</template>

<script setup>
defineProps({
  displayText: {
    type: String,
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
  }
})

defineEmits(['update:displayText', 'update:shadowLayers', 'update:shadowAngle', 'update:shadowDistance'])
</script>
