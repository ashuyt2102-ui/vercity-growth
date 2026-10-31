import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <h1 className="font-display text-5xl font-bold">We think beyond marketing.</h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          VERCITY GROWTH is a digital growth agency focused on combining creativity, strategy and technology. We help businesses strengthen their online presence, connect with their audiences and build sustainable growth systems.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="font-display text-xl font-bold">Our mission</h2>
            <p className="mt-2 text-text-muted">To help businesses grow through creative, strategic and data-informed digital work.</p>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-xl font-bold">Our approach</h2>
            <p className="mt-2 text-text-muted">Strategy first, then creative execution and continuous optimisation.</p>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-xl font-bold">Our philosophy</h2>
            <p className="mt-2 text-text-muted">No vanity metrics; focus on what moves the business forward.</p>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-xl font-bold">Why choose VERCITY GROWTH</h2>
            <p className="mt-2 text-text-muted">Connected creative and marketing, clear scope, and understandable reporting.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
