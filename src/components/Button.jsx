// Button.jsx — reusable button with two variants: "primary" and "ghost"
// Usage:
//   <Button variant="primary" onClick={...}>Download for iOS</Button>
//   <Button variant="ghost" onClick={...}>Join the Community</Button>

export default function Button({
  children,
  onClick,
  variant = 'primary',   // 'primary' | 'ghost'
  className = '',
  icon = null,           // optional leading icon element
  trailingIcon = null,   // optional trailing icon element
}) {
  const base =
    'inline-flex items-center gap-2.5 font-body font-semibold text-[15px] ' +
    'rounded-full transition-all duration-200 cursor-pointer select-none ' +
    'active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-olive-900 text-white px-7 py-3.5 ' +
      'shadow-md shadow-olive-900/20 ' +
      'hover:bg-olive-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-olive-700/25',
    ghost:
      'bg-transparent text-olive-900 px-3 py-3.5 ' +
      'hover:text-olive-600 hover:gap-3.5',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {trailingIcon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">{trailingIcon}</span>}
    </button>
  )
}
