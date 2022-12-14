interface NavItemProps {
  label: string
  isSelected: boolean
  onClick?: () => void
}

function NavItem({ label, isSelected, onClick }: NavItemProps) {
  return (
    <button
      className={`nav-item bg-transparent hover:shadow-md transition-all px-4 py-2 rounded-sm hover:bg-[#9e099e] active:bg-[#d345d3] ${
        isSelected ? 'bg-[#992a99]' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default NavItem
