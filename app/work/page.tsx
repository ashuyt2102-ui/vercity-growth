import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <h1 className="font-display text-5xl font-bold">Work</h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          Verified projects when approved material exists; otherwise clearly labelled concept projects.
        </p>
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
