import { Card } from './ui/card';
import { Plane, XCircle, CheckCircle, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

const flights = [
  {
    airline: 'Delta Airlines',
    flightNumber: 'DL 1234',
    destination: 'Atlanta',
    status: 'cancelled',
    time: '2:30 PM'
  },
  {
    airline: 'American Airlines',
    flightNumber: 'AA 5678',
    destination: 'Dallas',
    status: 'cancelled',
    time: '3:45 PM'
  },
  {
    airline: 'United Airlines',
    flightNumber: 'UA 9012',
    destination: 'Houston',
    status: 'delayed',
    time: '5:15 PM',
    newTime: '8:30 PM'
  },
  {
    airline: 'Southwest',
    flightNumber: 'SW 3456',
    destination: 'Orlando',
    status: 'cancelled',
    time: '6:00 PM'
  },
  {
    airline: 'JetBlue',
    flightNumber: 'B6 7890',
    destination: 'New York',
    status: 'delayed',
    time: '7:20 PM',
    newTime: '9:45 PM'
  }
];

export function FlightUpdates() {
  // NOTE: This component is ready for Flight API integration
  // Replace the mock data below with real-time flight data from your preferred API
  // Recommended APIs: FlightAware, Aviation Edge, AviationStack, or OpenSky Network
  // API endpoint should return: airline, flightNumber, destination, status, time, and optional newTime for delays

  const getStatusBadge = (status: string) => {
    if (status === 'cancelled') {
      return (
        <Badge variant="destructive">
          <XCircle className="w-3 h-3 mr-1" />
          Cancelled
        </Badge>
      );
    } else if (status === 'delayed') {
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
          <Clock className="w-3 h-3 mr-1" />
          Delayed
        </Badge>
      );
    } else {
      return (
        <Badge variant="default">
          <CheckCircle className="w-3 h-3 mr-1" />
          On Time
        </Badge>
      );
    }
  };

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Plane className="w-5 h-5 text-purple-500" />
        <h2>Flight Updates</h2>
      </div>

      <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
        <p className="text-xs sm:text-sm text-orange-800">
          Airports are operating under severe weather protocols. Most flights are cancelled or delayed.
        </p>
        <p className="text-xs text-orange-600 mt-1">
          ⚠️ API Integration Required: Connect to flight data API for real-time updates
        </p>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
        {flights.map((flight, index) => (
          <div key={index} className="p-3 sm:p-4 border rounded-lg">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm mb-1">{flight.airline}</h3>
                <p className="text-xs sm:text-sm text-gray-600">Flight {flight.flightNumber}</p>
              </div>
              {getStatusBadge(flight.status)}
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-600">To {flight.destination}</span>
              <span className={flight.status === 'delayed' ? 'line-through text-gray-400' : ''}>
                {flight.time}
              </span>
            </div>
            {flight.status === 'delayed' && flight.newTime && (
              <div className="mt-1 text-xs sm:text-sm text-right text-orange-600">
                New time: {flight.newTime}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
