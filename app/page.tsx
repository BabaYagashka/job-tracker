import Image from "next/image";

export default function Home() {
  return(
    <div className="flex min-h-screen flex-col bg-white">
      <main className = "flex-1">
        {/* Hero Section */}
        <section className = "container mx-auto px-4 py-32 ">
          <div>
            <h1 className="text-black">A Better Way To Track Your Job Applications.</h1>
            <p className="text-gray-700">
              Capture, organize, and track your job applications with ease.
              Our platform provides a seamless experience to help you stay 
              on top of your job search journey.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
