function Project1() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-6">
      <div className="max-w-xl">
        <h2 className="heading-xl">Shepez-Na</h2>
        <h3 className="heading-md">Renovation Management System</h3>
        <p className="mb-6 text-gray-600">
          Shepez-Na is an AI-powered platform that streamlines home and business renovations by providing personalized
          timelines, budget estimates, and access to reliable professionals—helping users plan with clarity and confidence.
        </p>
        <div className="space-x-4">
          <button className="bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition">Explore Project</button>
          <button className="bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition">Open Prototype</button>
        </div>
      </div>
      <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
    </section>
  )
}

export default Project1