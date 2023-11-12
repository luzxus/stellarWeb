import React from 'react'

type ButtonProps = {
  text: string
  variant: string
  className?: string
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  className,
  onClick,
}) => {
  const blue2 = '#1690e1'
  const blue1 = '#78A2B0'
  const gray = '#475555ab'
  const yellow1 = '#E1D35B'
  const styleVariant =
    variant === 'primary' ? blue2 : variant === 'read' ? gray : 'transparent '
  const borderColor =
    variant === 'primary'
      ? blue2
      : variant === 'link'
      ? blue1
      : variant === 'read'
      ? '#FFFF'
      : 'white'
  const textColor =
    variant === 'primary' ? 'white' : variant === 'link' ? 'black' : 'white'
  const fontWeight = variant === 'primary' ? 'initial' : 'bold'
  return (
    <div
      onClick={onClick}
      style={{
        color: textColor,
        backgroundColor: styleVariant,
        padding: '5px 10px',
        border: '1px solid',
        borderRadius: '2rem',
        borderColor: borderColor,
        fontWeight,
        letterSpacing: '1px',
        textAlign: 'center',
      }}
      className={`rounded-3xl cursor-pointer hover:scale-110 duration-500 ${className}`}
    >
      {text}
    </div>
  )
}

export default Button
