// import { useState } from 'react';
// import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
// import { formatCurrency } from '../lib/utils';

// interface Transaction {
//   id: string;
//   type: 'deposit' | 'withdrawal';
//   amount: number;
//   date: string;
//   status: 'completed' | 'pending';
// }

// export function Wallet() {
//   const [balance] = useState(1250.75);
//   const [transactions] = useState<Transaction[]>([
//     {
//       id: '1',
//       type: 'deposit',
//       amount: 500,
//       date: '2024-03-10',
//       status: 'completed',
//     },
//     {
//       id: '2',
//       type: 'withdrawal',
//       amount: 200,
//       date: '2024-03-08',
//       status: 'completed',
//     },
//     {
//       id: '3',
//       type: 'deposit',
//       amount: 1000,
//       date: '2024-03-05',
//       status: 'completed',
//     },
//   ]);

//   return (
//     <div className="space-y-8">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-4 mb-6">
//           <div className="bg-blue-100 p-3 rounded-full">
//             <WalletIcon className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <p className="text-gray-600">Available Balance</p>
//             <h2 className="text-3xl font-bold">{formatCurrency(balance)}</h2>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//             <ArrowUpRight className="w-4 h-4" />
//             <span>Add Funds</span>
//           </button>
//           <button className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50">
//             <ArrowDownLeft className="w-4 h-4" />
//             <span>Withdraw</span>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow">
//         <div className="p-6">
//           <h3 className="text-lg font-medium mb-4">Transaction History</h3>
//           <div className="space-y-4">
//             {transactions.map((transaction) => (
//               <div
//                 key={transaction.id}
//                 className="flex items-center justify-between p-4 border rounded-lg"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className={`p-2 rounded-full ${
//                     transaction.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
//                   }`}>
//                     {transaction.type === 'deposit' ? (
//                       <ArrowUpRight className={`w-4 h-4 ${
//                         transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                       }`} />
//                     ) : (
//                       <ArrowDownLeft className={`w-4 h-4 ${
//                         transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                       }`} />
//                     )}
//                   </div>
//                   <div>
//                     <p className="font-medium capitalize">{transaction.type}</p>
//                     <p className="text-sm text-gray-500">
//                       {new Date(transaction.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className={`font-medium ${
//                     transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                   }`}>
//                     {transaction.type === 'deposit' ? '+' : '-'}
//                     {formatCurrency(transaction.amount)}
//                   </p>
//                   <p className="text-sm text-gray-500 flex items-center justify-end">
//                     <Clock className="w-3 h-3 mr-1" />
//                     {transaction.status}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
// import { formatCurrency } from '../lib/utils'; // Assuming formatCurrency is a utility to format numbers

// interface Transaction {
//   id: string;
//   type: 'deposit' | 'withdrawal';
//   amount: number;
//   date: string;
//   status: 'completed' | 'pending';
// }

// export function Wallet() {
//   const [balance] = useState(1250.75);
//   const [transactions] = useState<Transaction[]>([
//     {
//       id: '1',
//       type: 'deposit',
//       amount: 500,
//       date: '2024-03-10',
//       status: 'completed',
//     },
//     {
//       id: '2',
//       type: 'withdrawal',
//       amount: 200,
//       date: '2024-03-08',
//       status: 'completed',
//     },
//     {
//       id: '3',
//       type: 'deposit',
//       amount: 1000,
//       date: '2024-03-05',
//       status: 'completed',
//     },
//   ]);

//   return (
//     <div className="space-y-8">
//       {/* Balance Display */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center space-x-4 mb-6">
//           <div className="bg-blue-100 p-3 rounded-full">
//             <WalletIcon className="w-6 h-6 text-blue-600" />
//           </div>
//           <div>
//             <p className="text-gray-600">Available Balance</p>
//             <h2 className="text-3xl font-bold">{formatCurrency(balance)}</h2>
//           </div>
//         </div>
        
//         <div className="max-w-screen-xl mx-auto px-4">
//           {/* Add Funds Button */}
//           <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//             <ArrowUpRight className="w-4 h-4" />
//             <span>Add Funds</span>
//           </button>
//           {/* Withdraw Button */}
//           <button className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50">
//             <ArrowDownLeft className="w-4 h-4" />
//             <span>Withdraw</span>
//           </button>
//         </div>
//       </div>

//       {/* Transaction History */}
//       <div className="bg-white rounded-lg shadow">
//         <div className="p-6">
//           <h3 className="text-lg font-medium mb-4">Transaction History</h3>
//           <div className="space-y-4">
//             {transactions.map((transaction) => (
//               <div
//                 key={transaction.id}
//                 className="flex items-center justify-between p-4 border rounded-lg"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className={`p-2 rounded-full ${
//                     transaction.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
//                   }`}>
//                     {transaction.type === 'deposit' ? (
//                       <ArrowUpRight className={`w-4 h-4 ${
//                         transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                       }`} />
//                     ) : (
//                       <ArrowDownLeft className={`w-4 h-4 ${
//                         transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                       }`} />
//                     )}
//                   </div>
//                   <div>
//                     <p className="font-medium capitalize">{transaction.type}</p>
//                     <p className="text-sm text-gray-500">
//                       {new Date(transaction.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className={`font-medium ${
//                     transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
//                   }`}>
//                     {transaction.type === 'deposit' ? '+' : '-'}
//                     {formatCurrency(transaction.amount)}
//                   </p>
//                   <p className="text-sm text-gray-500 flex items-center justify-end">
//                     <Clock className="w-3 h-3 mr-1" />
//                     {transaction.status}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react"
import { WalletIcon, ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react"
import { formatCurrency } from "../lib/utils" // Assuming formatCurrency is a utility to format numbers

interface Transaction {
  id: string
  type: "deposit" | "withdrawal"
  amount: number
  date: string
  status: "completed" | "pending"
}

export function Wallet() {
  const [balance] = useState(1250.75)
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "deposit",
      amount: 500,
      date: "2024-03-10",
      status: "completed",
    },
    {
      id: "2",
      type: "withdrawal",
      amount: 200,
      date: "2024-03-08",
      status: "completed",
    },
    {
      id: "3",
      type: "deposit",
      amount: 1000,
      date: "2024-03-05",
      status: "completed",
    },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Balance Display */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <WalletIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-600">Available Balance</p>
            <h2 className="text-3xl font-bold">{formatCurrency(balance)}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            <ArrowUpRight className="w-4 h-4" />
            <span>Add Funds</span>
          </button>
          <button className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50">
            <ArrowDownLeft className="w-4 h-4" />
            <span>Withdraw</span>
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Transaction History</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${transaction.type === "deposit" ? "bg-green-100" : "bg-red-100"}`}>
                    {transaction.type === "deposit" ? (
                      <ArrowUpRight
                        className={`w-4 h-4 ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}
                      />
                    ) : (
                      <ArrowDownLeft
                        className={`w-4 h-4 ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.type === "deposit" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.type === "deposit" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center justify-end">
                    <Clock className="w-3 h-3 mr-1" />
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
