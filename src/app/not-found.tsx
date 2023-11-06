import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 >404 page not found</h2>
      <Link  href={'/'} aria-label='To start page'>To start page</Link>
    </div>
  )
}
