// // Accordion.tsx
// import React, { useState } from 'react';

// interface AccordionProps {
//   title: string;
//   content: string;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-5">
//       <div className="border rounded overflow-hidden">
//         <div
//           className="bg-gray-200 p-4 cursor-pointer"
//           onClick={toggleAccordion}
//         >
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">{title}</h2>
//             <svg
//               className={`w-6 h-6 transition-transform ${
//                 isOpen ? 'transform rotate-180' : ''
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="p-4">
//             <p>{content}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordion;



const Accordion = () => {
    return (
        <div className="grid lg:grid-cols-3">
        <div className="w-500 lg:w-10/12 bg-gray-200 p-4 rounded-md shadow-md">Column 1</div>
        <div className="flex-grow bg-gray-300 p-4 rounded-md shadow-md">Column 2</div>
        <div className="flex-grow bg-gray-400 p-4 rounded-md shadow-md">Column 3</div>
      </div>
    );
  };
  
  export default Accordion;