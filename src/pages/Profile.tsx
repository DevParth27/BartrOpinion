// import { useState, useEffect } from 'react';
// import { auth } from '../lib/firebase';
// import { User, Clock, TrendingUp } from 'lucide-react';

// interface PredictionHistory {
//   id: string;
//   title: string;
//   date: string;
//   result: 'win' | 'loss';
//   amount: number;
// }

// export function Profile() {
//   const [history, setHistory] = useState<PredictionHistory[]>([]);

//   useEffect(() => {
//     // Simulated prediction history data
//     setHistory([
//       {
//         id: '1',
//         title: 'Bitcoin price prediction',
//         date: '2024-03-10',
//         result: 'win',
//         amount: 250,
//       },
//       {
//         id: '2',
//         title: 'Stock market trend',
//         date: '2024-03-08',
//         result: 'loss',
//         amount: -100,
//       },
//     ]);
//   }, []);

//   return (
//     <div className="space-y-8">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//             <User className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold">{auth.currentUser?.displayName}</h2>
//             <p className="text-gray-600">{auth.currentUser?.email}</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center space-x-2 mb-4">
//             <Clock className="w-5 h-5 text-blue-600" />
//             <h3 className="text-lg font-medium">Recent Activity</h3>
//           </div>
//           <div className="space-y-4">
//             {history.map((item) => (
//               <div key={item.id} className="flex items-center justify-between">
//                 <div>
//                   <p className="font-medium">{item.title}</p>
//                   <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
//                 </div>
//                 <span className={`font-medium ${item.result === 'win' ? 'text-green-600' : 'text-red-600'}`}>
//                   {item.result === 'win' ? '+' : ''}{item.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center space-x-2 mb-4">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <h3 className="text-lg font-medium">Statistics</h3>
//           </div>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Total Predictions</span>
//               <span className="font-medium">24</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Win Rate</span>
//               <span className="font-medium">68%</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Total Profit</span>
//               <span className="font-medium text-green-600">+$1,250</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { auth } from '../lib/firebase';
// import { User, Clock, TrendingUp } from 'lucide-react';

// interface PredictionHistory {
//   id: string;
//   title: string;
//   date: string;
//   result: 'win' | 'loss';
//   amount: number;
// }

// export function Profile() {
//   const [history, setHistory] = useState<PredictionHistory[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate fetching user prediction history from Firebase
//     setTimeout(() => {
//       setHistory([
//         {
//           id: '1',
//           title: 'Bitcoin price prediction',
//           date: '2024-03-10',
//           result: 'win',
//           amount: 250,
//         },
//         {
//           id: '2',
//           title: 'Stock market trend',
//           date: '2024-03-08',
//           result: 'loss',
//           amount: -100,
//         },
//       ]);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-12">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-4">
//           <div className="bg-blue-100 p-3 rounded-full">
//             <User className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold">
//               {auth.currentUser?.displayName || 'User Name'}
//             </h2>
//             <p className="text-gray-600">{auth.currentUser?.email || 'user@example.com'}</p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-screen-xl mx-auto px-4">
//         {/* Recent Activity */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center space-x-2 mb-4">
//             <Clock className="w-5 h-5 text-blue-600" />
//             <h3 className="text-lg font-medium">Recent Activity</h3>
//           </div>
//           {loading ? (
//             <p className="text-gray-500">Loading your activity...</p>
//           ) : (
//             <div className="space-y-4">
//               {history.map((item) => (
//                 <div key={item.id} className="flex items-center justify-between">
//                   <div>
//                     <p className="font-medium">{item.title}</p>
//                     <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
//                   </div>
//                   <span className={`font-medium ${item.result === 'win' ? 'text-green-600' : 'text-red-600'}`}>
//                     {item.result === 'win' ? '+' : ''}{item.amount}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Statistics */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center space-x-2 mb-4">
//             <TrendingUp className="w-5 h-5 text-blue-600" />
//             <h3 className="text-lg font-medium">Statistics</h3>
//           </div>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Total Predictions</span>
//               <span className="font-medium">24</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Win Rate</span>
//               <span className="font-medium">68%</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Total Profit</span>
//               <span className="font-medium text-green-600">+$1,250</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react"
import { auth } from "../lib/firebase"
import { User, Clock, TrendingUp } from "lucide-react"

interface PredictionHistory {
  id: string
  title: string
  date: string
  result: "win" | "loss"
  amount: number
}

export function Profile() {
  const [history, setHistory] = useState<PredictionHistory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user prediction history from Firebase
    setTimeout(() => {
      setHistory([
        {
          id: "1",
          title: "Bitcoin price prediction",
          date: "2024-03-10",
          result: "win",
          amount: 250,
        },
        {
          id: "2",
          title: "Stock market trend",
          date: "2024-03-08",
          result: "loss",
          amount: -100,
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">{auth.currentUser?.displayName || "User Name"}</h2>
          <p className="text-gray-600">{auth.currentUser?.email || "user@example.com"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-medium">Recent Activity</h3>
          </div>
          {loading ? (
            <p className="text-gray-500">Loading your activity...</p>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`font-medium ${item.result === "win" ? "text-green-600" : "text-red-600"}`}>
                    {item.result === "win" ? "+" : ""}
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-medium">Statistics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Predictions</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Win Rate</span>
              <span className="font-medium">68%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Profit</span>
              <span className="font-medium text-green-600">+$1,250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

