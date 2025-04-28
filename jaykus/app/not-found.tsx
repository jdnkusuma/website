import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-light">
      <h2 className="text-4xl font-bold mb-4">404 Not Found</h2>
      <p className="text-lg mb-6">stop doing this with my website</p>
      <Link href="/" className="px-4 py-2 bg-mid text-light rounded hover:semilight transition">  
          Return Home
      </Link>
    </div>
  )
}