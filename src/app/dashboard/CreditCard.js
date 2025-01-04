const CreditCard = ({ 
  balance, 
  cardHolder, 
  cardNumber, 
  expiryDate, 
  isDark = false 
}) => {
  return (
    <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex flex-col h-full justify-between">
        {/* Top Section */}
        <div>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${isDark ? 'opacity-80' : 'text-gray-500'}`}>Balance</p>
              <p className="text-2xl font-bold mt-1">${balance.toLocaleString()}</p>
            </div>
            <div className={`w-12 h-8 ${isDark ? 'bg-white/20' : 'bg-gray-200'} rounded`}></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="mb-4">
            <p className={`text-sm ${isDark ? 'opacity-80' : 'text-gray-500'}`}>CARD HOLDER</p>
            <p className="font-medium">{cardHolder}</p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-lg">{cardNumber}</p>
            <div>
              <p className={`text-sm ${isDark ? 'opacity-80' : 'text-gray-500'}`}>VALID THRU</p>
              <p>{expiryDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;