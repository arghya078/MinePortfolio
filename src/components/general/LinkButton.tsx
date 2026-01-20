import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface LinkButtonProps {
  href: string
  text: string
  label: string
  icon?: IconType
  iconPosition?: 'left' | 'right'
  rounded?: boolean
  download?: boolean
}

const LinkButton = ({
  href,
  text,
  label,
  icon: Icon,
  iconPosition = 'right',
  rounded = true,
  download = false,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      download={download}
      aria-label={label}
      className={`
        group inline-flex items-center gap-2
        px-6 py-3 font-semibold
        text-white
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        bg-size-200 bg-pos-0 hover:bg-pos-100
        transition-all duration-500 ease-out
        shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-purple-400
        ${rounded ? 'rounded-full' : 'rounded-lg'}
      `}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
      )}

      <span>{text}</span>

      {Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  )
}

export default LinkButton
