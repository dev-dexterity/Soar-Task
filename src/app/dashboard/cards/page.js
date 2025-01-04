'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Plus } from 'lucide-react';

const cards = [
  {
    id: 1,
    type: 'VISA',
    number: '3778 **** **** 1234',
    holder: 'Eddy Cusuma',
    balance: 5756,
    expiryDate: '12/22',
    color: 'bg-gray-900',
    textColor: 'text-white'
  },
  {
    id: 2,
    type: 'MASTERCARD',
    number: '3778 **** **** 5678',
    holder: 'Eddy Cusuma',
    balance: 3420,
    expiryDate: '11/24',
    color: 'bg-blue-600',
    textColor: 'text-white'
  },
  {
    id: 3,
    type: 'VISA',
    number: '3778 **** **** 9012',
    holder: 'Eddy Cusuma',
    balance: 8250,
    expiryDate: '03/25',
    color: 'bg-purple-600',
    textColor: 'text-white'
  },
  {
    id: 4,
    type: 'AMERICAN EXPRESS',
    number: '3778 **** **** 3456',
    holder: 'Eddy Cusuma',
    balance: 4120,
    expiryDate: '09/23',
    color: 'bg-green-600',
    textColor: 'text-white'
  }
];

export default function CardsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Cards</h1>
        <p className="text-gray-500 mt-1">Manage your debit and credit cards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add New Card Button */}
        <button className="border-2 border-dashed border-gray-200 rounded-xl p-6 h-48 flex flex-col items-center justify-center hover:border-gray-300 transition-colors">
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium">Add New Card</p>
        </button>

        {/* Card List */}
        {cards.map((card) => (
          <Card key={card.id} className={`${card.color} ${card.textColor}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-80">Balance</p>
                  <p className="text-2xl font-bold mt-1">${card.balance.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-8 h-8" />
                  <span className="text-sm font-medium">{card.type}</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm opacity-80">CARD HOLDER</p>
                <p className="font-medium">{card.holder}</p>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <p className="text-lg">{card.number}</p>
                <div>
                  <p className="text-sm opacity-80">VALID THRU</p>
                  <p>{card.expiryDate}</p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <button className="text-sm hover:opacity-80 transition-opacity">
                  View Details
                </button>
                <div className="flex gap-4">
                  <button className="text-sm hover:opacity-80 transition-opacity">
                    Freeze Card
                  </button>
                  <button className="text-sm hover:opacity-80 transition-opacity">
                    Settings
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Card Transactions</h2>
        <div className="bg-white rounded-xl p-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Card Payment</p>
                  <p className="text-sm text-gray-500">28 January 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-500">-$250.00</p>
                <p className="text-sm text-gray-500">**** 1234</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}