export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-dark text-light">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-semilight"></div>
            <p className="ml-4 text-lg">Loading...</p>
        </div>
    );
  }