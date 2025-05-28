/* 
The main content area:
    - A large centered page title (leave empty for now, use `h1`).
    - Below the title, an interactive table of contents with collapsible sections (accordion style).
    - Each chapter should be collapsible and open its content on click.
 Chapters:
 Chapter 01: The Prologue
 Contains text and an image below.
 Chapter 02: The Dilemma
 Contains text and an image below.
 Chapter 03: Into the Unknown
 Contains an introductory text followed by 6 repeating components.
 Each component contains:
   - Right: number (1 to 6)
   - Left: an icon
   - Center: title and two short text paragraphs
 Chapter 04: Faces & Paths
 Contains:
   - Text
   - A 3-column by 6-row table
   - After the table: image, then another text block
 Table layout:
   - Row 1: circular image in each column
   - Row 2: two short text blocks in each column
   - Rows 3–6: four stacked items in each column, each item includes an icon on the left and a line of text to the right
 Chapter 05: Spark of Genius
 Contains:
   - Text
   - Image
   - Another image
   - Text
 Chapter 06: From Sketch to Screen
 Contains text and an image below.
 Chapter 07: The Refinement
 Contains text and an image below.
 Chapter 08: The Grand Finale
 Contains text and an image below.
 Use Tailwind CSS for layout and styling.
 Ensure the layout is responsive, clean, and visually harmonious.
 Use placeholder content and placeholder images where needed.
 Use semantic HTML tags where appropriate.
 */

import Header from "../components/Header";
import Footer from "../components/Footer";
import chapterImages from "../data/chapterImages";

// Placeholder icon component
const PlaceholderIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-400">
    <svg width="20" height="20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

// Chapter 03 Card
const Chapter03Card = ({ number }) => (
  <div className="flex items-center bg-gray-50 rounded-lg shadow p-4 space-x-4">
    <PlaceholderIcon />
    <div className="flex-1">
      <h3 className="font-semibold text-base">Milestone {number}</h3>
      <p className="text-xs text-gray-600">
        Short description paragraph one for milestone {number}.
      </p>
      <p className="text-xs text-gray-600">
        Short description paragraph two for milestone {number}.
      </p>
    </div>
    <div className="text-2xl font-bold text-gray-300">{number}</div>
  </div>
);

// Chapter 04 Table Cell
const Chapter04TableCell = ({ col }) => (
  <td className="align-top px-2 py-3">
    {/* Row 1: Circular image */}
    <div className="flex justify-center mb-2">
      <img
        src={`https://via.placeholder.com/64?text=Face+${col + 1}`}
        alt={`Face ${col + 1}`}
        className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
      />
    </div>
    {/* Row 2: Two short text blocks */}
    <div className="mb-2">
      <div className="text-xs font-semibold text-center">Short text A</div>
      <div className="text-xs text-center text-gray-500">Short text B</div>
    </div>
    {/* Rows 3-6: Four stacked items */}
    <div className="space-y-1">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <PlaceholderIcon />
          <span className="text-xs text-gray-700">Item {item} text</span>
        </div>
      ))}
    </div>
  </td>
);

const chapterTitles = [
  "The Prologue",
  "The Dilemma",
  "Into the Unknown",
  "Faces & Paths",
  "Spark of Genius",
  "From Sketch to Screen",
  "The Refinement",
  "The Grand Finale",
];

// Main Project Page Component
const ProjectPage1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px] px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
        <h1 className="heading-xl">Renovation Management System</h1>

        {/* Table of Contents */}
        <div className="space-y-4">
          {/* Chapter 01 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 01: The Prologue
            </summary>
            <div className="mt-4 space-y-4">
              <p className="text-base leading-relaxed">
                <span>Passionate about </span>
                <span className="italic">renovation</span>
                <span>
                  {" "}
                  and DIY since childhood, I devoured home‑and‑garden magazines
                  and TV shows. <br />
                  By age 17, I was already assisting my parents on two major
                  projects—sparking my love of{" "}
                </span>
                <span className="italic">transforming spaces</span>
                <br />
                <br />
                <span>This project is the </span>
                <span className="font-bold">capstone</span>
                <span> of my </span>
                <span className="font-bold">UX Designer course</span>
                <span> at the </span>
                <span className="font-bold">Technion</span>
                <span>, where I combined </span>
                <span className="font-bold">user research</span>
                <span>, </span>
                <span className="font-bold">ideation</span>
                <span> and </span>
                <span className="font-bold">prototyping</span>
                <span> into a unified solution.</span>
              </p>

              <div className="flex justify-center gap-2">
                <img
                  src={chapterImages.chapter1.image1}
                  alt="Chapter 1 - Image 1"
                  className="h-[250px] w-auto object-cover rounded-tl-xl rounded-bl-xl"
                />
                <img
                  src={chapterImages.chapter1.image2}
                  alt="Chapter 1 - Image 2"
                  className="h-[250px] w-auto object-cover"
                />
                <img
                  src={chapterImages.chapter1.image3}
                  alt="Chapter 1 - Image 3"
                  className="h-[250px] w-auto object-cover rounded-tr-xl rounded-br-xl"
                />
              </div>
            </div>
          </details>

          {/* Chapter 02 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 02: The Dilemma
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                Every project faces its crossroads. Here, the dilemma
                emerged—how to balance ambition with practicality, and vision
                with constraints.
              </p>
              <img
                src={chapterImages.chapter2.image1}
                alt="Chapter 2 - Image 1"
                className="w-full rounded shadow"
              />
            </div>
          </details>

          {/* Chapter 03 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 03: Into the Unknown
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                Venturing into uncharted territory, the team encountered new
                challenges and opportunities. Each step forward was a leap into
                the unknown.
              </p>
              <div className="grid gap-4">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <Chapter03Card key={n} number={n} />
                ))}
              </div>
            </div>
          </details>

          {/* Chapter 04 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 04: Faces & Paths
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                The journey was shaped by many faces and countless paths. Each
                brought unique perspectives and skills to the table.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-4">
                  <tbody>
                    <tr>
                      {[0, 1, 2].map((col) => (
                        <Chapter04TableCell key={col} col={col} />
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <img
                src="https://via.placeholder.com/800x400?text=Faces+%26+Paths"
                alt="Faces & Paths"
                className="w-full rounded shadow"
              />
              <p>
                With every new connection, the project’s direction became
                clearer, and the possibilities multiplied.
              </p>
            </div>
          </details>

          {/* Chapter 05 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 05: Spark of Genius
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                Inspiration struck at the most unexpected moment, igniting a
                spark that would drive the project forward.
              </p>
              <img
                src={chapterImages.chapter5.image1}
                alt="Chapter 5 - Spark of Genius"
                className="w-full rounded shadow"
              />
              {/* <img
                src="https://via.placeholder.com/800x400?text=Spark+of+Genius+2"
                alt="Spark of Genius 2"
                className="w-full rounded shadow"
              /> */}
              <p>
                The team rallied around this new idea, refining and expanding it
                into a workable solution.
              </p>
            </div>
          </details>

          {/* Chapter 06 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 06: From Sketch to Screen
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                Concepts became wireframes, and wireframes became interactive
                prototypes. The vision began to take shape on the screen.
              </p>
              {/* <img
                src="https://via.placeholder.com/800x400?text=Sketch+to+Screen"
                alt="Sketch to Screen"
                className="w-full rounded shadow"
              /> */}
            </div>
          </details>

          {/* Chapter 07 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 07: The Refinement
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                With the foundation in place, the team focused on refining every
                detail, ensuring a seamless and delightful user experience.
              </p>
              {/* <img
                src="https://via.placeholder.com/800x400?text=Refinement"
                alt="Refinement"
                className="w-full rounded shadow"
              /> */}
            </div>
          </details>

          {/* Chapter 08 */}
          <details className="w-full max-w-3xl mx-auto border rounded p-4 transition-all duration-300">
            <summary className="cursor-pointer font-semibold text-lg">
              Chapter 08: The Grand Finale
            </summary>
            <div className="mt-4 space-y-4">
              <p>
                The journey culminated in a grand finale—a product that not only
                met expectations but exceeded them.
              </p>
              {/* <img
                src="https://via.placeholder.com/800x400?text=Grand+Finale"
                alt="Grand Finale"
                className="w-full rounded shadow"
              /> */}
            </div>
          </details>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage1;
