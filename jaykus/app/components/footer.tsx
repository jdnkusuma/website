import Link from "next/link"
export default function Footer() {
    return (
    <footer className="bottom-0 flex flex-col md:flex-row w-screen py-8 bg-dark justify-between">
        <div className="flex flex-col my-4 px-8 md:px-16 justify-end">
            <Link href="/pages/about" className="my-1 text-sm font-normal text-light hover:text-semilight transition-colors duration-500">About</Link>
            <Link href="/pages/privacy-policy" className="my-1 text-sm font-normal text-light hover:text-semilight transition-colors duration-500">Privacy Policy</Link>
            <Link href="/pages/terms-of-service" className="my-1 text-sm font-normal text-light hover:text-semilight transition-colors duration-500">Terms of Service</Link>
        </div>
        <div className="bottom-0">
            <div className="flex flex-row px-8 md:px-12 py-6">
              <Link href="https://www.linkedin.com/in/jayden-kusuma-81670b238/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H3.127v7.225h1.816zm-.91-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 0-1.358.538-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.91 8.212V9.359c0-.216.016-.432.08-.586.176-.432.576-.88 1.248-.88.88 0 1.232.664 1.232 1.635v3.866h1.816V9.25c0-2.223-1.184-3.256-2.764-3.256-1.28 0-1.856.703-2.176 1.2h.016v-1.03H6.254c.024.664 0 7.225 0 7.225h1.816z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/jayden.kusuma/" target="_blank" rel="noopener noreferrer" className="mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </Link>
              <Link href="https://youtube.com/@jayden-the-kus-kus" target="_blank" rel="noopener noreferrer" className="mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
              </Link>
            </div>
            <div className="bottom-0 flex flex-row px-8 md:px-12 py-4 items-center">
              <p className="text-sm font-normal">© 2025 Jayden Kusuma. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    );
}