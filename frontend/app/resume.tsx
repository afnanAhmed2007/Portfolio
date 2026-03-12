"use client"

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col items-center mt-[200px] gap-8">

      <h2 className="text-3xl font-semibold">Resume</h2>

      <iframe
        src="/resume.pdf"
        className="w-[800px] h-[1000px] rounded-lg shadow-lg"
      />

      <a
        href="/resume.pdf"
        download
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Download Resume
      </a>

    </section>
  )
}