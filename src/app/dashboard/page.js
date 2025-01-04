// Import statements remain the same...
'use client';

import { Card, CardContent } from '@/components/ui/card';
import CreditCard from './CreditCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell 
} from 'recharts';

// Your data constants here...
const weeklyData = [
  { day: 'Sat', deposit: 200, withdraw: 400 },
  { day: 'Sun', deposit: 100, withdraw: 300 },
  { day: 'Mon', deposit: 250, withdraw: 300 },
  { day: 'Tue', deposit: 350, withdraw: 450 },
  { day: 'Wed', deposit: 200, withdraw: 150 },
  { day: 'Thu', deposit: 250, withdraw: 400 },
  { day: 'Fri', deposit: 350, withdraw: 400 },
];

const expenseData = [
  { name: 'Entertainment', value: 30, color: '#2B3674' },
  { name: 'Investment', value: 20, color: '#4318FF' },
  { name: 'Bill Expense', value: 15, color: '#FF8B4C' },
  { name: 'Others', value: 35, color: '#1A1A1A' },
];

const balanceHistory = [
  { month: 'Jul', value: 200 },
  { month: 'Aug', value: 400 },
  { month: 'Sep', value: 750 },
  { month: 'Oct', value: 300 },
  { month: 'Nov', value: 450 },
  { month: 'Dec', value: 300 },
  { month: 'Jan', value: 600 },
];

const transactions = [
  {
    id: 1,
    icon: "📄",
    name: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500"
  },
  {
    id: 2,
    icon: "P",
    name: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    id: 3,
    icon: "J",
    name: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  }
];

const quickTransferContacts = [
  { id: 1, name: "Livia Bator", role: "CEO" },
  { id: 2, name: "Randy Press", role: "Director" },
  { id: 3, name: "Workman", role: "Designer" }
];

// Enhanced TransactionItem with better mobile layout
const TransactionItem = ({ icon, name, date, amount, bgColor, iconColor }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl hover:bg-gray-50 gap-2 sm:gap-3">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900 truncate">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
    <span className={`${amount > 0 ? 'text-green-500' : 'text-red-500'} font-medium sm:text-right whitespace-nowrap`}>
      {amount > 0 ? '+' : ''}{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
    </span>
  </div>
);

// Enhanced QuickTransferContact with better responsive design
const QuickTransferContact = ({ name, role }) => (
  <div className="text-center flex-shrink-0 min-w-[100px]">
    <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-2"></div>
    <p className="font-medium text-sm truncate px-2">{name}</p>
    <p className="text-xs text-gray-500 truncate px-2">{role}</p>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 lg:gap-6 pt-4">
        {/* Cards and Transactions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* My Cards Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#15192C]">My Cards</h2>
              <Link href="/dashboard/cards" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                See All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                expiryDate="12/22"
                isDark={true}
              />
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                expiryDate="12/22"
                isDark={false}
              />
            </div>
          </div>

          {/* Recent Transactions */}
          <Card className="bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#15192C] mb-4">Recent Transaction</h2>
              <div className="space-y-4 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {transactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    {...transaction}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Weekly Activity Chart */}
          <Card className="bg-white lg:col-span-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#15192C] mb-4">Weekly Activity</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#EDF2F7" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Bar dataKey="withdraw" fill="#1A1A1A" radius={[5, 5, 0, 0]} />
                    <Bar dataKey="deposit" fill="#4318FF" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Expense Statistics */}
          <Card className="bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#15192C] mb-4">Expense Statistics</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        background: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Transfer and Balance History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Quick Transfer */}
          <Card className="bg-white lg:col-span-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#15192C] mb-4">Quick Transfer</h2>
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {quickTransferContacts.map((contact) => (
                  <QuickTransferContact
                    key={contact.id}
                    name={contact.name}
                    role={contact.role}
                  />
                ))}
                <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Write Amount:</label>
                <input
                  type="text"
                  placeholder="Write Amount"
                  defaultValue="$ ***"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="w-full bg-[#1A1A1A] text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  Send
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Balance History */}
          <Card className="bg-white">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#15192C] mb-4">Balance History</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={balanceHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#EDF2F7" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#4318FF"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}