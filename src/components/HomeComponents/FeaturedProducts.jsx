// import React from 'react'
// import { motion } from "framer-motion";
// const FeaturedProducts = () => {
//   return (
//          <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Featured Products
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {[1, 2, 3, 4].map((i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.2 }}
//               >
//                 <img
//                   src={`https://source.unsplash.com/400x400/?clothes,fashion,${i}`}
//                   alt="Product"
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg">Trendy Outfit {i}</h3>
//                   <p className="text-gray-500">₹{i * 999}</p>
//                   <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
//                     Add to Cart
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//   )
// }

// export default FeaturedProducts