import { AlertTriangle, Heart, AlertCircle, Cloud, Plane, Home, Package, Newspaper } from 'lucide-react';
import { Alert, AlertDescription } from './components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { LiveClock } from './components/LiveClock';
import { DonationLinks } from './components/DonationLinks';
import { MissingPersons } from './components/MissingPersons';
import { WeatherUpdates } from './components/WeatherUpdates';
import { FlightUpdates } from './components/FlightUpdates';
import { SheltersAndAid } from './components/SheltersAndAid';
import { DonationBanks } from './components/DonationBanks';
import { NewsUpdates } from './components/NewsUpdates';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="px-3 sm:px-4 py-3 sm:py-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
              <h1 className="text-red-600 text-lg sm:text-2xl">Hurricane Melissa Relief</h1>
            </div>
            <LiveClock />
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="px-3 sm:px-4 pt-3 sm:pt-4">
        <Alert className="border-red-500 bg-red-50">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
          <AlertDescription className="text-red-800 text-xs sm:text-sm">
            <strong>ACTIVE HURRICANE WARNING:</strong> Hurricane Melissa is affecting the area. 
            Seek shelter and follow evacuation orders. Call <strong>911</strong> for emergencies.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Dashboard with Tabs */}
      <main className="px-3 sm:px-4 pt-3 sm:pt-4">
        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto gap-1 bg-white p-1 mb-4">
            <TabsTrigger value="donate" className="flex flex-col sm:flex-row items-center gap-1 px-2 py-2 text-xs sm:text-sm">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Donate</span>
              <span className="sm:hidden">Give</span>
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex flex-col sm:flex-row items-center gap-1 px-2 py-2 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">911</span>
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex flex-col sm:flex-row items-center gap-1 px-2 py-2 text-xs sm:text-sm">
              <Cloud className="w-4 h-4" />
              <span className="hidden sm:inline">Updates</span>
              <span className="sm:hidden">Info</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex flex-col sm:flex-row items-center gap-1 px-2 py-2 text-xs sm:text-sm">
              <Newspaper className="w-4 h-4" />
              <span>News</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="space-y-4 mt-0">
            <DonationLinks />
            <DonationBanks />
          </TabsContent>

          <TabsContent value="emergency" className="space-y-4 mt-0">
            <MissingPersons />
            <SheltersAndAid />
          </TabsContent>

          <TabsContent value="updates" className="space-y-4 mt-0">
            <WeatherUpdates />
            <FlightUpdates />
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            <NewsUpdates />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="px-3 sm:px-4 py-4 sm:py-6">
          <div className="text-center text-xs sm:text-sm text-gray-600">
            <p className="mb-2">
              Emergencies: <strong className="text-red-600">911</strong> | Non-emergency: <strong>311</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
