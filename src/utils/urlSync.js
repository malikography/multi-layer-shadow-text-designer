const defaultFonts = ["Geist", "Montserrat", "Raleway", "Poppins", "Nunito", "MuseoModerno", "Texturina", "Dai Banna SIL", "Ancizar Sans"]

export function loadFromURL(allColors) {
  const params = new URLSearchParams(window.location.search)
  const state = {}
  
  // Display Text
  if (params.has('text')) {
    state.displayText = params.get('text')
  }
  
  // Text Size (20-120)
  if (params.has('textSize')) {
    const size = parseInt(params.get('textSize'))
    if (!isNaN(size) && size >= 20 && size <= 120) {
      state.textSize = size
    }
  }
  
  // Text Weight (100-900)
  if (params.has('textWeight')) {
    const weight = parseInt(params.get('textWeight'))
    if (!isNaN(weight) && weight >= 100 && weight <= 900) {
      state.textWeight = weight
    }
  }
  
  // Subtitle Text
  if (params.has('subtitle')) {
    state.subtitleText = params.get('subtitle')
  }
  
  // Subtitle Font
  if (params.has('subtitleFont')) {
    state.subtitleFont = params.get('subtitleFont')
  }
  
  // Subtitle Size (8-24)
  if (params.has('subtitleSize')) {
    const size = parseInt(params.get('subtitleSize'))
    if (!isNaN(size) && size >= 8 && size <= 24) {
      state.subtitleSize = size
    }
  }
  
  // Shadow Layers (1-6)
  if (params.has('layers')) {
    const layers = parseInt(params.get('layers'))
    if (!isNaN(layers) && layers >= 1 && layers <= 6) {
      state.shadowLayers = layers
    }
  }
  
  // Shadow Angle (0-360)
  if (params.has('angle')) {
    const angle = parseInt(params.get('angle'))
    if (!isNaN(angle) && angle >= 0 && angle <= 360) {
      state.shadowAngle = angle
    }
  }
  
  // Shadow Distance (1-10)
  if (params.has('distance')) {
    const distance = parseInt(params.get('distance'))
    if (!isNaN(distance) && distance >= 1 && distance <= 10) {
      state.shadowDistance = distance
    }
  }
  
  // Color Section Expanded
  if (params.has('colorExpanded')) {
    state.colorSectionExpanded = params.get('colorExpanded') === 'true'
  }
  
  // Light Theme Colors
  if (params.has('lightText') && allColors.includes(params.get('lightText'))) {
    state.lightTextColor = params.get('lightText')
  }
  if (params.has('lightShadow') && allColors.includes(params.get('lightShadow'))) {
    state.lightShadowColor = params.get('lightShadow')
  }
  if (params.has('lightDepth')) {
    const depth = parseInt(params.get('lightDepth'))
    if (!isNaN(depth) && depth >= 0 && depth <= 3) {
      state.lightShadowDepth = depth
    }
  }
  if (params.has('lightDirection')) {
    const direction = params.get('lightDirection')
    if (direction === 'darken' || direction === 'lighten') {
      state.lightShadowDirection = direction
    }
  }
  
  // Dark Theme Colors
  if (params.has('darkText') && allColors.includes(params.get('darkText'))) {
    state.darkTextColor = params.get('darkText')
  }
  if (params.has('darkShadow') && allColors.includes(params.get('darkShadow'))) {
    state.darkShadowColor = params.get('darkShadow')
  }
  if (params.has('darkDepth')) {
    const depth = parseInt(params.get('darkDepth'))
    if (!isNaN(depth) && depth >= 0 && depth <= 3) {
      state.darkShadowDepth = depth
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
    const fontsList = fontsParam.split(',').map(f => f.trim()).filter(f => f.length > 0)
    if (fontsList.length > 0) {
      state.fonts = fontsList
    }
  }
  
  return state
}

export function updateURL(state) {
  const params = new URLSearchParams()
  
  // Only add non-default values to keep URL clean
  if (state.displayText !== 'Alire') params.set('text', state.displayText)
  if (state.textSize !== 60) params.set('textSize', state.textSize)
  if (state.textWeight !== 700) params.set('textWeight', state.textWeight)
  if (state.subtitleText !== 'Ada Package Manager') params.set('subtitle', state.subtitleText)
  if (state.subtitleFont !== 'monospace') params.set('subtitleFont', state.subtitleFont)
  if (state.subtitleSize !== 12) params.set('subtitleSize', state.subtitleSize)
  if (state.shadowLayers !== 3) params.set('layers', state.shadowLayers)
  if (state.shadowAngle !== 45) params.set('angle', state.shadowAngle)
  if (state.shadowDistance !== 3) params.set('distance', state.shadowDistance)
  if (!state.colorSectionExpanded) params.set('colorExpanded', 'false')
  
  if (state.lightTextColor !== 'purple-600') params.set('lightText', state.lightTextColor)
  if (state.lightShadowColor !== 'yellow-300') params.set('lightShadow', state.lightShadowColor)
  if (state.lightShadowDepth !== 0) params.set('lightDepth', state.lightShadowDepth)
  if (state.lightShadowDirection !== 'darken') params.set('lightDirection', state.lightShadowDirection)
  
  if (state.darkTextColor !== 'yellow-300') params.set('darkText', state.darkTextColor)
  if (state.darkShadowColor !== 'purple-500') params.set('darkShadow', state.darkShadowColor)
  if (state.darkShadowDepth !== 1) params.set('darkDepth', state.darkShadowDepth)
  if (state.darkShadowDirection !== 'darken') params.set('darkDirection', state.darkShadowDirection)
  
  // Fonts - only if different from defaults
  if (JSON.stringify(state.fonts) !== JSON.stringify(defaultFonts)) {
    params.set('fonts', state.fonts.join(','))
  }
  
  const queryString = params.toString()
  const newURL = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname
  window.history.replaceState({}, '', newURL)
}
