export const textStyles = (
  blackText: boolean = false,
  underline: boolean = false
) => `
    background-color: yellow;
    ${blackText ? 'color: black;' : ''} 
    ${underline ? 'text-decoration: underline;' : ''}
    font-weight: bold;
`
