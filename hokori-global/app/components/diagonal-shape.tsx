interface DiagonalShapeProps {
  color: string
  className?: string
}

export function DiagonalShape({ color, className = '' }: DiagonalShapeProps) {
  return (
    <div 
      className={`absolute transform -skew-y-6 ${color} ${className}`}
      style={{ zIndex: -1 }}
    />
  )
}

