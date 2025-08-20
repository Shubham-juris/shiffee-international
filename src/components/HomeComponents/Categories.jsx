// import React from "react";
// import { motion } from "framer-motion";
// const Categories = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {["Men", "Women", "Kids", "Accessories"].map((cat, index) => (
//           <motion.a
//             key={cat}
//             href={`/${cat.toLowerCase()}`}
//             className="relative h-56 rounded-2xl overflow-hidden group"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <img
//               src={`https://source.unsplash.com/600x600/?fashion,${cat}`}
//               alt={cat}
//               className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//               <span className="text-xl font-bold text-white">{cat}</span>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;
