interface GlowBlobProps {
  color: string
  position: string
  size?: string
  blur?: string
  opacity?: string
}

export default function GlowBlob({
  color,
  position,
  size = 'h-[450px] w-[450px]',
  blur = 'blur-[120px]',
  opacity = '0.3',
}: GlowBlobProps) {
  return (
    <div
      className={`absolute rounded-full filter pointer-events-none z-0 ${color} ${position} ${size} ${blur} opacity-${opacity}`}
    />
  )
}
