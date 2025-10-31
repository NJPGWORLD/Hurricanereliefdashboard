import { Card } from './ui/card';
import { Home, MapPin, Users, Phone } from 'lucide-react';
import { Badge } from './ui/badge';

const shelters = [
  {
    name: 'Central Community Center',
    address: '123 Main Street',
    capacity: 'High',
    available: true,
    contact: '555-1000',
    services: ['Food', 'Medical', 'Beds']
  },
  {
    name: 'Riverside High School',
    address: '456 Oak Avenue',
    capacity: 'Medium',
    available: true,
    contact: '555-2000',
    services: ['Food', 'Beds', 'Showers']
  },
  {
    name: 'St. Mary\'s Church',
    address: '789 Church Lane',
    capacity: 'Low',
    available: false,
    contact: '555-3000',
    services: ['Food', 'Beds']
  },
  {
    name: 'Downtown Recreation Center',
    address: '321 Park Drive',
    capacity: 'High',
    available: true,
    contact: '555-4000',
    services: ['Food', 'Medical', 'Beds', 'Childcare']
  },
  {
    name: 'Northside Emergency Shelter',
    address: '654 North Road',
    capacity: 'Medium',
    available: true,
    contact: '555-5000',
    services: ['Food', 'Medical', 'Beds', 'Pet Friendly']
  }
];

export function SheltersAndAid() {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Home className="w-5 h-5 text-green-500" />
        <h2>Shelters & Aid Centers</h2>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {shelters.map((shelter, index) => (
          <div 
            key={index} 
            className={`p-3 sm:p-4 border rounded-lg ${!shelter.available ? 'bg-gray-50 opacity-75' : ''}`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm mb-2">{shelter.name}</h3>
                <div className="flex items-start gap-1 text-xs sm:text-sm text-gray-600 mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span>{shelter.address}</span>
                </div>
              </div>
              <Badge variant={shelter.available ? 'default' : 'secondary'} className="flex-shrink-0">
                {shelter.available ? 'Available' : 'Full'}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                <span className="text-gray-600">Capacity: {shelter.capacity}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                <a href={`tel:${shelter.contact}`} className="text-blue-600 hover:underline">
                  {shelter.contact}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {shelter.services.map((service, idx) => (
                <span 
                  key={idx} 
                  className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
