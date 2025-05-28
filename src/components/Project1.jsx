function Project1() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-6">
      <div className="max-w-4xl">
        <h2 className="heading-xl">Shepez-Na</h2>
        <h3 className="heading-md">Renovation Management System</h3>
        <p className="body-base mb-6 mt-4">
          Shepez-Na is an AI-powered platform that streamlines home and business
          renovations by providing personalized timelines, budget estimates, and
          access to reliable professionals—helping users plan with clarity and
          confidence.
        </p>
        <div className="space-x-4">
          <button
            className="btn-primary"
            onClick={() => navigate("/orelmarom-portfolio/work")}
          >
            Explore Project
          </button>
          {/* TODO: change to iframe inside the project page, or navigate to iframe page of the prototype */}
          <a
            href="https://www.figma.com/proto/R3RsDdGkKvfNudK3gJgdlv/Orel-Marom?page-id=433%3A7119&node-id=797-7044&node-type=frame&viewport=446%2C1018%2C0.05&t=cEN0kLYpYtLTwggc-1&scaling=contain&content-scaling=fixed&starting-point-node-id=797%3A7044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-secondary">Open Prototype</button>
          </a>
        </div>
      </div>
      <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
    </section>
  );
}

export default Project1;
