import Link from 'next/link'
 
export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-light">
      <h2 className="text-4xl font-bold mb-4">Forbidden</h2>
      <p className="text-lg mb-6">You are not authorized to access this resource.</p>
      <Link href="/">
        <a className="px-4 py-2 bg-mid text-semilight rounded hover:dark transition">
          Return Home
        </a>
      </Link>
    </div>
  )
}