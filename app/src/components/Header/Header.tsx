import Image from 'next/image'
import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import NavItem from './NavItem'
import WalletConnection from './WalletConnection'

const navItems = [
  {
    label: 'Swap',
    value: 'swap',
  },
  {
    label: 'Pool',
    value: 'pool',
  },
  {
    label: 'Vote',
    value: 'vote',
  },
]

function Header() {
  const [selectedNav, setSelectedNav] = useState('swap')

  const isSelected = (nav: string) => nav === selectedNav

  return (
    <header className="wrapper p-4 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
      <div className="pr-4 hidden md:inline-block ">
        <Image src="/images/uniswap.png" alt="logo" width={56} height={56} />
      </div>
      <nav className="flex flex-row gap-3 items-center md:mt-0 mt-4">
        {navItems.map(({ label, value }) => (
          <NavItem
            key={value}
            label={label}
            isSelected={isSelected(value)}
            onClick={() => setSelectedNav(value)}
          />
        ))}
        <a
          href="https://info.uniswap.org/#/"
          target="_blank"
          rel="noreferrer"
          className="pl-2 flex items-center flex-row gap-2"
        >
          Charts
          <FiArrowUpRight />
        </a>
      </nav>
      <WalletConnection />
    </header>
  )
}

export default Header
