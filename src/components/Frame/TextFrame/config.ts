const useTextFrameConfig = () => {
  return {
    defaultHeight: 80,
    border: {
      SilpVat: 'blue-b100',
      Vichagarn: '[#AACAE9]',
      Gera: '[#FFCECB]',
      Pat: '[#98521E]',
      Other: '[#F3F3F3]',
    },
    placeholder: {
      SilpVat: 'blue-b100',
      Vichagarn: 'blue-b100',
      Gera: '[#FFCECB]',
      Pat: 'LightBrown',
      Other: 'grey-light+',
    },
    text: {
      SilpVat: 'grey-light',
      Vichagarn: 'grey-light',
      Gera: 'grey-light',
      Pat: 'Brown',
      Other: 'white',
    },
  }
}

export default useTextFrameConfig
