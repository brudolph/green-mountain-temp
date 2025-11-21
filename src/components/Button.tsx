import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-3 px-7 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    primary:
      'bg-primary text-white hover:bg-primary/70 hover:text-white/100 active:bg-primary/80 active:text-primary/30 focus-visible:outline-primary',
    blue: 'bg-primary text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-primary',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-300 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-primary focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'primary'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color ?? 'slate']
      : props.variant === 'solid'
        ? variantStyles.solid[props.color ?? 'primary']
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
