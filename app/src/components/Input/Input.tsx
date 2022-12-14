import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

function Input({ icon, ...props }: InputProps) {
  return (
    <div className="flex flex-row items-center rounded-lg bg-[#1d1e29] p-2 h-[72px] justify-between px-4">
      <input {...props} className="bg-transparent outline-none" />
      {icon}
    </div>
  )
}

export default Input
