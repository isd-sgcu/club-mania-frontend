const useToggleConfig = () => {
  const height = 32
  const outerPadding = 4
  const innerCircleRadius = height - 2 * outerPadding
  const width = 60
  return {
    width,
    height,
    radius: height / 2,
    outerPadding,
    innerCircleRadius,
    innerTranslateXDistance: (width - 2 * outerPadding) - innerCircleRadius,
    // colors of the circular thingy based on theme
    innerBgColors: {
      SilpVat: 'rgba(31, 10, 65, 0.75)',
      Vichagarn: '#0C233F',
      Gera: '#690000',
      Pat: '#98521E',
      Other: 'white',
    },
    // background colors of the whole thing
    outerColors: {
      SilpVat: 'white',
      Vichagarn: 'white',
      Gera: 'white',
      Pat: '#F38C23',
      Other: '#2F4C7A',
    },
    // background colors of the whole thing when active
    outerActiveColors: {
      SilpVat: '#5C3A87',
      Vichagarn: '#0D3D78',
      Gera: '#9F140E',
      Pat: '#5B3112',
      Other: '#516E8E',
    },
  }
}

export default useToggleConfig
