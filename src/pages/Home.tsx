// import { useState, useEffect } from 'react';
// import { TrendingUp, Users, Activity } from 'lucide-react';

// export function Home() {
//   const [loading, setLoading] = useState(false);

//   // Temporary static data until Firestore is properly set up
//   const predictions = [
//     {
//       id: '1',
//       title: 'Bitcoin Price Prediction',
//       description: 'Will Bitcoin reach $100k by end of 2024?',
//       endDate: '2024-12-31',
//       participants: 156,
//       totalPool: 25000
//     },
//     {
//       id: '2',
//       title: 'AI Market Impact',
//       description: 'Will AI companies surpass traditional tech in market cap?',
//       endDate: '2024-06-30',
//       participants: 89,
//       totalPool: 15000
//     },
//     {
//       id: '3',
//       title: 'Global Economic Forecast',
//       description: 'Will global GDP growth exceed 3% in 2024?',
//       endDate: '2024-12-31',
//       participants: 234,
//       totalPool: 35000
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatCard
//           title="Active Predictions"
//           value="24"
//           icon={<Activity className="w-6 h-6 text-blue-600" />}
//         />
//         <StatCard
//           title="Total Users"
//           value="1.2k"
//           icon={<Users className="w-6 h-6 text-green-600" />}
//         />
//         <StatCard
//           title="Trading Volume"
//           value="$45.3k"
//           icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
//         />
//       </div>

//       <div className="bg-white rounded-lg shadow">
//         <div className="p-6">
//           <h2 className="text-xl font-semibold mb-4">Ongoing Predictions</h2>
//           {loading ? (
//             <div className="flex justify-center items-center h-48">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {predictions.map((prediction) => (
//                 <div
//                   key={prediction.id}
//                   className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
//                 >
//                   <h3 className="font-medium text-lg">{prediction.title}</h3>
//                   <p className="text-gray-600 mt-1">{prediction.description}</p>
//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex items-center space-x-4">
//                       <span className="text-sm text-gray-500">
//                         Ends: {new Date(prediction.endDate).toLocaleDateString()}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         <Users className="w-4 h-4 inline mr-1" />
//                         {prediction.participants}
//                       </span>
//                     </div>
//                     <span className="font-medium text-blue-600">
//                       ${prediction.totalPool.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-gray-500 text-sm">{title}</p>
//           <p className="text-2xl font-semibold mt-1">{value}</p>
//         </div>
//         {icon}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from 'react';
// import { TrendingUp, Users, Activity } from 'lucide-react';

// export function Home() {
//   const [loading, setLoading] = useState(false);

//   const predictions = [
//     {
//       id: '1',
//       title: 'Bitcoin Price Prediction',
//       description: 'Will Bitcoin reach $100k by end of 2024?',
//       endDate: '2024-12-31',
//       participants: 156,
//       totalPool: 25000
//     },
//     {
//       id: '2',
//       title: 'AI Market Impact',
//       description: 'Will AI companies surpass traditional tech in market cap?',
//       endDate: '2024-06-30',
//       participants: 89,
//       totalPool: 15000
//     },
//     {
//       id: '3',
//       title: 'Global Economic Forecast',
//       description: 'Will global GDP growth exceed 3% in 2024?',
//       endDate: '2024-12-31',
//       participants: 234,
//       totalPool: 35000
//     }
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       {/* Stats Section */}
//       <div className="max-w-screen-xl mx-auto px-4">
//         <StatCard
//           title="Active Predictions"
//           value="24"
//           icon={<Activity className="w-6 h-6 text-blue-600" />}
//         />
//         <StatCard
//           title="Total Users"
//           value="1.2k"
//           icon={<Users className="w-6 h-6 text-green-600" />}
//         />
//         <StatCard
//           title="Trading Volume"
//           value="$45.3k"
//           icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
//         />
//       </div>

//       {/* Predictions Section */}
//       <div className="bg-white rounded-lg shadow">
//         <div className="p-6">
//           <h2 className="text-xl font-semibold mb-4">Ongoing Predictions</h2>
//           {loading ? (
//             <div className="flex justify-center items-center h-48">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {predictions.map((prediction) => (
//                 <div
//                   key={prediction.id}
//                   className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
//                 >
//                   <h3 className="font-medium text-lg">{prediction.title}</h3>
//                   <p className="text-gray-600 mt-1">{prediction.description}</p>
//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex items-center space-x-4">
//                       <span className="text-sm text-gray-500">
//                         Ends: {new Date(prediction.endDate).toLocaleDateString()}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         <Users className="w-4 h-4 inline mr-1" />
//                         {prediction.participants}
//                       </span>
//                     </div>
//                     <span className="font-medium text-blue-600">
//                       ${prediction.totalPool.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-gray-500 text-sm">{title}</p>
//           <p className="text-2xl font-semibold mt-1">{value}</p>
//         </div>
//         {icon}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react"
import { TrendingUp, Users, Activity } from "lucide-react"

export function Home() {
  const [loading, setLoading] = useState(false)

  const predictions = [
    {
      id: "1",
      title: "Bitcoin Price Prediction",
      description: "Will Bitcoin reach $100k by end of 2024?",
      endDate: "2024-12-31",
      participants: 156,
      totalPool: 25000,
    },
    {
      id: "2",
      title: "AI Market Impact",
      description: "Will AI companies surpass traditional tech in market cap?",
      endDate: "2024-06-30",
      participants: 89,
      totalPool: 15000,
    },
    {
      id: "3",
      title: "Global Economic Forecast",
      description: "Will global GDP growth exceed 3% in 2024?",
      endDate: "2024-12-31",
      participants: 234,
      totalPool: 35000,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Active Predictions" value="24" icon={<Activity className="w-6 h-6 text-blue-600" />} />
        <StatCard title="Total Users" value="1.2k" icon={<Users className="w-6 h-6 text-green-600" />} />
        <StatCard title="Trading Volume" value="$45.3k" icon={<TrendingUp className="w-6 h-6 text-purple-600" />} />
      </div>

      {/* Predictions Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Ongoing Predictions</h2>
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {predictions.map((prediction) => (
                <div
                  key={prediction.id}
                  className="bg-white border rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-medium text-lg">{prediction.title}</h3>
                  <p className="text-gray-600 mt-1">{prediction.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        Ends: {new Date(prediction.endDate).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {prediction.participants}
                      </span>
                    </div>
                    <span className="font-medium text-blue-600">${prediction.totalPool.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  )
}


