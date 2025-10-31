import { Card } from './ui/card';
import { Package, MapPin, Clock, Search } from 'lucide-react';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { useState } from 'react';

const donationBanks = [
  {
    name: 'Central Relief Depot',
    address: '100 Warehouse Blvd',
    location: 'Jamaica',
    city: 'Kingston',
    hours: '24/7',
    needs: ['Water', 'Non-perishable food', 'Blankets', 'First aid supplies'],
    priority: 'high'
  },
  {
    name: 'Community Food Bank',
    address: '250 Service Street',
    location: 'Bahamas',
    city: 'Nassau',
    hours: '8:00 AM - 8:00 PM',
    needs: ['Canned goods', 'Baby formula', 'Diapers', 'Pet food'],
    priority: 'high'
  },
  {
    name: 'Clothing & Essentials Center',
    address: '500 Donation Drive',
    location: 'Puerto Rico',
    city: 'San Juan',
    hours: '9:00 AM - 6:00 PM',
    needs: ['Clothing', 'Toiletries', 'Towels', 'Shoes'],
    priority: 'medium'
  },
  {
    name: 'Medical Supply Hub',
    address: '75 Healthcare Way',
    location: 'Barbados',
    city: 'Bridgetown',
    hours: '24/7',
    needs: ['Medications', 'Bandages', 'Sanitizers', 'Masks'],
    priority: 'high'
  },
  {
    name: 'Island Relief Center',
    address: '432 Bay Street',
    location: 'Turks and Caicos',
    city: 'Grand Turk',
    hours: '7:00 AM - 9:00 PM',
    needs: ['Water', 'Food', 'Clothing', 'Medical supplies'],
    priority: 'high'
  },
  {
    name: 'Caribbean Aid Station',
    address: '88 Coastal Road',
    location: 'Dominican Republic',
    city: 'Santo Domingo',
    hours: '24/7',
    needs: ['Baby supplies', 'Hygiene products', 'Blankets', 'Food'],
    priority: 'medium'
  }
];

export function DonationBanks() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBanks = donationBanks.filter(bank =>
    bank.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Package className="w-5 h-5 text-indigo-500" />
        <h2>Donation Banks Worldwide</h2>
      </div>

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs sm:text-sm text-blue-800">
          Drop off supplies at any of these locations. All donations go directly to affected families.
        </p>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by location, city, or name..."
            className="pl-10 h-11"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {filteredBanks.length > 0 ? (
          filteredBanks.map((bank, index) => (
            <div key={index} className="p-3 sm:p-4 border rounded-lg">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1">
                  <h3 className="text-sm mb-1">{bank.name}</h3>
                  <p className="text-xs text-gray-500">{bank.city}, {bank.location}</p>
                </div>
                {bank.priority === 'high' && (
                  <Badge variant="destructive" className="text-xs flex-shrink-0">
                    Urgent
                  </Badge>
                )}
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-start gap-1 text-xs sm:text-sm text-gray-600">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span>{bank.address}</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{bank.hours}</span>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm mb-2">Most needed items:</p>
                <div className="flex flex-wrap gap-1.5">
                  {bank.needs.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No donation banks found for "{searchTerm}"</p>
            <p className="text-xs mt-1">Try searching for a different location</p>
          </div>
        )}
      </div>
    </Card>
  );
}
