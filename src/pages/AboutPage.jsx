import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTabs from "../components/AboutTabStyle";
import AboutTimeline from "../components/AboutTimelineStyle";

function AboutPage() {
  return (
    <div className="bg-white text-black w-full min-w-[360px] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start">
        <AboutTabs />
        {/* <AboutTimeline /> */}
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
