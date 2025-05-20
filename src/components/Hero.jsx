function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 pt-0">
      <h1 className="heading-name mb-4">OREL</h1>
      <p
        className="heading-lg text-xl text-white w-full flex justify-center items-center"
        style={{
          background: '#bdbdbd',
          letterSpacing: '15px',
          lineHeight: '60px',
          maxWidth: '100vw',      // Responsive: 100% of viewport width
          minWidth: '250px',     // Optional: minimum width for small screens
          width: '100%',
        }}
      >
        Frontend Developer &amp; UX Specialist
      </p>
      <div className="absolute bottom-4 animate-bounce text-[color:#bdbdbd] text-5xl">↓</div>
    </section>
  )
}

export default Hero