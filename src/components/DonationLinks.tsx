import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ExternalLink, Heart, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface DonationOption {
  name: string;
  description: string;
  url: string;
  type: string;
  countries: string[]; // Country flags as emoji
  countryNames: string[]; // Country names for filtering
}

const donationOptions: DonationOption[] = [
  {
    name: 'Red Cross Hurricane Relief',
    description: 'Direct aid to Hurricane Melissa survivors across the Caribbean',
    url: '#',
    type: 'Major Organization',
    countries: ['🇯🇲', '🇧🇸', '🇵🇷', '🇧🇧', '🇩🇴', '🇹🇹'],
    countryNames: ['Jamaica', 'Bahamas', 'Puerto Rico', 'Barbados', 'Dominican Republic', 'Trinidad & Tobago']
  },
  {
    name: 'Jamaica Community Fund',
    description: 'Supporting affected families and businesses in Jamaica',
    url: '#',
    type: 'Community',
    countries: ['🇯🇲'],
    countryNames: ['Jamaica']
  },
  {
    name: 'Bahamas Emergency Housing Initiative',
    description: 'Providing temporary shelter for displaced residents',
    url: '#',
    type: 'Housing',
    countries: ['🇧🇸'],
    countryNames: ['Bahamas']
  },
  {
    name: 'Caribbean Medical Supply Drive',
    description: 'Essential medical supplies and healthcare across affected regions',
    url: '#',
    type: 'Medical',
    countries: ['🇵🇷', '🇩🇴', '🇧🇧'],
    countryNames: ['Puerto Rico', 'Dominican Republic', 'Barbados']
  },
  {
    name: 'Puerto Rico Relief Coalition',
    description: 'Coordinating relief efforts and distributing supplies',
    url: '#',
    type: 'Community',
    countries: ['🇵🇷'],
    countryNames: ['Puerto Rico']
  },
  {
    name: 'Trinidad & Tobago Aid Network',
    description: 'Emergency response and recovery assistance',
    url: '#',
    type: 'Major Organization',
    countries: ['🇹🇹'],
    countryNames: ['Trinidad & Tobago']
  },
  {
    name: 'Dominican Republic Family Support',
    description: 'Food, water, and shelter for affected families',
    url: '#',
    type: 'Community',
    countries: ['🇩🇴'],
    countryNames: ['Dominican Republic']
  },
  {
    name: 'Barbados Emergency Response Fund',
    description: 'Rapid response and recovery operations',
    url: '#',
    type: 'Emergency',
    countries: ['🇧🇧'],
    countryNames: ['Barbados']
  }
];

export function DonationLinks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  // Get unique types for filter
  const uniqueTypes = ['all', ...Array.from(new Set(donationOptions.map(d => d.type)))];

  // Filter donations
  const filteredDonations = donationOptions.filter(donation => {
    const matchesSearch = 
      donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.countryNames.some(country => country.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = typeFilter === 'all' || donation.type === typeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-red-500" />
        <h2>Donate Now</h2>
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search organizations or countries..."
            className="pl-10 h-11"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-[200px] h-10">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Scrollable donation list */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation, index) => (
            <div key={index} className="p-3 sm:p-4 border rounded-lg active:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-sm flex-1 min-w-0">{donation.name}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded whitespace-nowrap">
                      {donation.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{donation.description}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-500">Supporting:</span>
                    <div className="flex gap-1">
                      {donation.countries.map((flag, idx) => (
                        <span key={idx} className="text-lg" title={donation.countryNames[idx]}>
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button 
                  size="default" 
                  variant="default" 
                  className="w-full sm:w-auto sm:flex-shrink-0"
                  onClick={() => donation.url && donation.url !== '#' && window.open(donation.url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No organizations found</p>
            <p className="text-xs mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </Card>
  );
}
