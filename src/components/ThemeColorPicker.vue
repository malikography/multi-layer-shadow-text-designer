<template>
  <div class="bg-white rounded-lg p-6">
    <h3 class="text-xl font-bold mb-4 text-center border-b border-slate-300 pb-2">
      {{ title }}
    </h3>

    <div class="mb-6">
      <label class="block text-sm font-semibold mb-3">Text Color:</label>
      <div class="grid grid-cols-11 gap-1.5 max-w-full overflow-x-auto">
        <button
          v-for="color in allColors"
          :key="color"
          @click="$emit('update:textColor', color)"
          :class="[
            'w-10 h-10 rounded-md transition-all duration-200 hover:cursor-pointer hover:scale-110 border-2',
            textColor === color ? 'border-white ring-2 ring-' + color + '/90' : color === 'white' ? 'ring-black ring-1' : 'border-transparent',
            'bg-' + color
          ]"
          :title="color"
        ></button>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-sm font-semibold mb-3">Shadow Color:</label>
      <div class="grid grid-cols-11 gap-1.5 max-w-full overflow-x-auto">
        <button
          v-for="color in allColors"
          :key="color"
          @click="$emit('update:shadowColor', color)"
          :class="[
            'w-10 h-10 rounded-md transition-all duration-200 hover:cursor-pointer hover:scale-110 border-2',
            shadowColor === color ? 'border-white ring-2 ring-' + color + '/90' : color === 'white' ? 'ring-black ring-1' : 'border-transparent',
            'bg-' + color
          ]"
          :title="color"
        ></button>
      </div>
    </div>

    <div class="mb-6">
      <label class="block text-sm font-semibold mb-2">
        Shadow Depth: {{ shadowDepth }}
      </label>
      <input
        :value="shadowDepth"
        @input="$emit('update:shadowDepth', Number($event.target.value))"
        type="range"
        min="0"
        max="3"
        step="1"
        class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
      />
      <div class="flex justify-between text-xs text-slate-500 mt-1">
        <span>Subtle</span>
        <span>Deep</span>
      </div>
    </div>
    
    <div>
      <label class="block text-sm font-semibold mb-2">Shadow Direction:</label>
      <div class="flex gap-3">
        <button
          @click="$emit('update:shadowDirection', 'darken')"
          :class="[
            'flex-1 px-4 py-2 rounded-lg font-medium transition-all',
            shadowDirection === 'darken' 
              ? 'bg-purple-600 text-white shadow-md' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          ]"
        >
          Darken
        </button>
        <button
          @click="$emit('update:shadowDirection', 'lighten')"
          :class="[
            'flex-1 px-4 py-2 rounded-lg font-medium transition-all',
            shadowDirection === 'lighten' 
              ? 'bg-purple-600 text-white shadow-md' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          ]"
        >
          Lighten
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  allColors: {
    type: Array,
    required: true
  },
  textColor: String,
  shadowColor: String,
  shadowDepth: Number,
  shadowDirection: String,
})

defineEmits(['update:textColor', 'update:shadowColor', 'update:shadowDepth', 'update:shadowDirection'])
</script>
