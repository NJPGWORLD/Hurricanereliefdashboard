import { Card } from './ui/card';
import { Cloud, Wind, Droplets, Eye, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

const weatherData = {
  current: {
    condition: 'Heavy Rain',
    temperature: '72°F',
    windSpeed: '65 mph',
    humidity: '95%',
    visibility: '0.5 miles'
  },
  alerts: [
    'Hurricane Warning in effect until 11:00 PM EST',
    'Flash Flood Warning for coastal areas',
    'High Wind Advisory for inland regions'
  ],
  forecast: [
    { time: '12:00 PM', condition: 'Heavy Rain', wind: '65 mph' },
    { time: '3:00 PM', condition: 'Severe Storms', wind: '70 mph' },
    { time: '6:00 PM', condition: 'Rain', wind: '55 mph' },
    { time: '9:00 PM', condition: 'Clearing', wind: '40 mph' }
  ]
};

export function WeatherUpdates() {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Cloud className="w-5 h-5 text-blue-500" />
        <h2>Weather Updates</h2>
      </div>

      <Alert className="mb-4 border-red-500 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800 text-xs sm:text-sm">
          <span className="block mb-1">HURRICANE MELISSA - Category 3</span>
          <span className="text-xs sm:text-sm">Active alerts: {weatherData.alerts.length}</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            <span className="text-xs sm:text-sm text-gray-600">Condition</span>
          </div>
          <p className="text-xs sm:text-sm">{weatherData.current.condition}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            <span className="text-xs sm:text-sm text-gray-600">Wind</span>
          </div>
          <p className="text-xs sm:text-sm">{weatherData.current.windSpeed}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            <span className="text-xs sm:text-sm text-gray-600">Humidity</span>
          </div>
          <p className="text-xs sm:text-sm">{weatherData.current.humidity}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            <span className="text-xs sm:text-sm text-gray-600">Visibility</span>
          </div>
          <p className="text-xs sm:text-sm">{weatherData.current.visibility}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm mb-3">Active Alerts</h3>
        <div className="space-y-2">
          {weatherData.alerts.map((alert, index) => (
            <div key={index} className="text-xs sm:text-sm p-2.5 sm:p-3 bg-yellow-50 border border-yellow-200 rounded leading-relaxed">
              {alert}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
