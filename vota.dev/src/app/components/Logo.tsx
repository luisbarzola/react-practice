import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="hover:opacity-90 font-bold text-2xl relative after:content-['dev'] after:text-yellow-js after:bg-black after:px-1">
      Vota
    </Link>
  )
}