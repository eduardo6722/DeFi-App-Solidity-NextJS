import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, fullWidth, ...props }, ref) => (
    <div className="flex flex-row items-center rounded-lg bg-[#1d1e29] p-2 h-[72px] justify-between px-4">
      <input
        {...props}
        ref={ref}
        className={`bg-transparent outline-none ${fullWidth ? 'w-full' : ''}`}
      />
      {icon}
    </div>
  )
)

export default Input
