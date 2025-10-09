export interface AppState {
  displayText?: string
  textSize?: number
  textWeight?: number
  subtitleText?: string
  subtitleFont?: string
  subtitleSize?: number
  shadowLayers?: number
  shadowAngle?: number
  shadowDistance?: number
  colorSectionExpanded?: boolean
  lightTextColor?: string
  lightShadowColor?: string
  lightShadowDepth?: number
  lightShadowDirection?: string
  darkTextColor?: string
  darkShadowColor?: string
  darkShadowDepth?: number
  darkShadowDirection?: string
  fonts?: string[]
}

const defaultFonts: string[] = ["Geist", "Montserrat", "Raleway", "Poppins", "Nunito", "MuseoModerno", "Texturina", "Dai Banna SIL", "Ancizar Sans"]

export function loadFromURL(allColors: string[]): AppState {
  const params = new URLSearchParams(window.location.search)
  const state: AppState = {}
  
  // Display Text
  if (params.has('text')) {
    const text = params.get('text')
    if (text) state.displayText = text
  }
  
  // Text Size (20-120)
  if (params.has('textSize')) {
    const sizeStr = params.get('textSize')
    if (sizeStr) {
      const size = parseInt(sizeStr)
      if (!isNaN(size) && size >= 20 && size <= 120) {
        state.textSize = size
      }
    }
  }
  
  // Text Weight (100-900)
  if (params.has('textWeight')) {
    const weightStr = params.get('textWeight')
    if (weightStr) {
      const weight = parseInt(weightStr)
      if (!isNaN(weight) && weight >= 100 && weight <= 900) {
        state.textWeight = weight
      }
    }
  }
  
  // Subtitle Text
  if (params.has('subtitle')) {
    const subtitle = params.get('subtitle')
    if (subtitle) state.subtitleText = subtitle
  }
  
  // Subtitle Font
  if (params.has('subtitleFont')) {
    const font = params.get('subtitleFont')
    if (font) state.subtitleFont = font
  }
  
  // Subtitle Size (8-24)
  if (params.has('subtitleSize')) {
    const sizeStr = params.get('subtitleSize')
    if (sizeStr) {
      const size = parseInt(sizeStr)
      if (!isNaN(size) && size >= 8 && size <= 24) {
        state.subtitleSize = size
      }
    }
  }
  
  // Shadow Layers (1-6)
  if (params.has('layers')) {
    const layersStr = params.get('layers')
    if (layersStr) {
      const layers = parseInt(layersStr)
      if (!isNaN(layers) && layers >= 1 && layers <= 6) {
        state.shadowLayers = layers
      }
    }
  }
  
  // Shadow Angle (0-360)
  if (params.has('angle')) {
    const angleStr = params.get('angle')
    if (angleStr) {
      const angle = parseInt(angleStr)
      if (!isNaN(angle) && angle >= 0 && angle <= 360) {
        state.shadowAngle = angle
      }
    }
  }
  
  // Shadow Distance (1-10)
  if (params.has('distance')) {
    const distanceStr = params.get('distance')
    if (distanceStr) {
      const distance = parseInt(distanceStr)
      if (!isNaN(distance) && distance >= 1 && distance <= 10) {
        state.shadowDistance = distance
      }
    }
  }
  
  // Color Section Expanded
  if (params.has('colorExpanded')) {
    state.colorSectionExpanded = params.get('colorExpanded') === 'true'
  }
  
  // Light Theme Colors
  if (params.has('lightText')) {
    const color = params.get('lightText')
    if (color && allColors.includes(color)) {
      state.lightTextColor = color
    }
  }
  if (params.has('lightShadow')) {
    const color = params.get('lightShadow')
    if (color && allColors.includes(color)) {
      state.lightShadowColor = color
    }
  }
  if (params.has('lightDepth')) {
    const depthStr = params.get('lightDepth')
    if (depthStr) {
      const depth = parseInt(depthStr)
      if (!isNaN(depth) && depth >= 0 && depth <= 3) {
        state.lightShadowDepth = depth
      }
    }
  }
  if (params.has('lightDirection')) {
    const direction = params.get('lightDirection')
    if (direction === 'darken' || direction === 'lighten') {
      state.lightShadowDirection = direction
    }
  }
  
  // Dark Theme Colors
  if (params.has('darkText')) {
    const color = params.get('darkText')
    if (color && allColors.includes(color)) {
      state.darkTextColor = color
    }
  }
  if (params.has('darkShadow')) {
    const color = params.get('darkShadow')
    if (color && allColors.includes(color)) {
      state.darkShadowColor = color
    }
  }
  if (params.has('darkDepth')) {
    const depthStr = params.get('darkDepth')
    if (depthStr) {
      const depth = parseInt(depthStr)
      if (!isNaN(depth) && depth >= 0 && depth <= 3) {
        state.darkShadowDepth = depth
      }
    }
  }
  if (params.has('darkDirection')) {
    const direction = params.get('darkDirection')
    if (direction === 'darken' || direction === 'lighten') {
      state.darkShadowDirection = direction
    }
  }
  
  // Fonts
  if (params.has('fonts')) {
    const fontsParam = params.get('fonts')
    if (fontsParam) {
      const fontsList = fontsParam.split(',').map(f => f.trim()).filter(f => f.length > 0)
      if (fontsList.length > 0) {
        state.fonts = fontsList
      }
    }
  }
  
  return state
}

export function updateURL(state: AppState): void {
  const params = new URLSearchParams()
  
  // Only add non-default values to keep URL clean
  if (state.displayText && state.displayText !== 'Alire') params.set('text', state.displayText)
  if (state.textSize !== undefined && state.textSize !== 60) params.set('textSize', state.textSize.toString())
  if (state.textWeight !== undefined && state.textWeight !== 700) params.set('textWeight', state.textWeight.toString())
  if (state.subtitleText && state.subtitleText !== 'Ada Package Manager') params.set('subtitle', state.subtitleText)
  if (state.subtitleFont && state.subtitleFont !== 'monospace') params.set('subtitleFont', state.subtitleFont)
  if (state.subtitleSize !== undefined && state.subtitleSize !== 12) params.set('subtitleSize', state.subtitleSize.toString())
  if (state.shadowLayers !== undefined && state.shadowLayers !== 3) params.set('layers', state.shadowLayers.toString())
  if (state.shadowAngle !== undefined && state.shadowAngle !== 45) params.set('angle', state.shadowAngle.toString())
  if (state.shadowDistance !== undefined && state.shadowDistance !== 3) params.set('distance', state.shadowDistance.toString())
  if (state.colorSectionExpanded === false) params.set('colorExpanded', 'false')
  
  if (state.lightTextColor && state.lightTextColor !== 'purple-600') params.set('lightText', state.lightTextColor)
  if (state.lightShadowColor && state.lightShadowColor !== 'yellow-300') params.set('lightShadow', state.lightShadowColor)
  if (state.lightShadowDepth !== undefined && state.lightShadowDepth !== 0) params.set('lightDepth', state.lightShadowDepth.toString())
  if (state.lightShadowDirection && state.lightShadowDirection !== 'darken') params.set('lightDirection', state.lightShadowDirection)
  
  if (state.darkTextColor && state.darkTextColor !== 'yellow-300') params.set('darkText', state.darkTextColor)
  if (state.darkShadowColor && state.darkShadowColor !== 'purple-500') params.set('darkShadow', state.darkShadowColor)
  if (state.darkShadowDepth !== undefined && state.darkShadowDepth !== 1) params.set('darkDepth', state.darkShadowDepth.toString())
  if (state.darkShadowDirection && state.darkShadowDirection !== 'darken') params.set('darkDirection', state.darkShadowDirection)
  
  // Fonts - only if different from defaults
  if (state.fonts && JSON.stringify(state.fonts) !== JSON.stringify(defaultFonts)) {
    params.set('fonts', state.fonts.join(','))
  }
  
  const queryString = params.toString()
  const newURL = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname
  window.history.replaceState({}, '', newURL)
}
