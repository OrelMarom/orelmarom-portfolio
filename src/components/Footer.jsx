function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-12">
      <div className="flex justify-between items-center">
        {/* לינקדאין בצד שמאל */}
        <a
          href="https://www.linkedin.com/in/orel-marom-9801ab323"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[40px] text-gray-600 hover:text-black transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="inline align-middle"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
          </svg>
        </a>

        {/* טקסט מצד ימין */}
        <p className="mr-[40px] text-sm text-gray-500">
          © {new Date().getFullYear()} Orel Marom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

// // Simple responsive footer with copyright
// function Footer() {
//   return (
//     <footer className="w-full py-6 border-t mt-12">
//       <div className="flex items-center justify-between max-w-4xl mx-auto" style={{paddingLeft: 5, paddingRight: 5}}>
//         <a
//           href="https://www.linkedin.com/in/orel-marom-9801ab323"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mr-[40px] hover:text-blue-600"
//           aria-label="LinkedIn"
//         >
//           {/* LinkedIn SVG Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             className="inline align-middle"
//           >
//             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
//           </svg>
//         </a>
//         <p className="mr-[40px] text-sm text-gray-500 text-right">
//           © {new Date().getFullYear()} Orel Marom. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import { FaLinkedin } from "react-icons/fa"
