import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useState } from 'react';

const missingPersons = [
  {
    name: 'Sarah Johnson',
    age: 34,
    lastSeen: 'Downtown area, Oct 28',
    status: 'missing',
    contact: '555-0123'
  },
  {
    name: 'Michael Chen',
    age: 45,
    lastSeen: 'Coastal district, Oct 29',
    status: 'missing',
    contact: '555-0456'
  },
  {
    name: 'Emily Rodriguez',
    age: 28,
    lastSeen: 'Harbor view, Oct 30',
    status: 'found',
    contact: '555-0789'
  },
  {
    name: 'David Thompson',
    age: 52,
    lastSeen: 'Riverside community, Oct 29',
    status: 'missing',
    contact: '555-0321'
  }
];

export function MissingPersons() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPersons = missingPersons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-orange-500" />
        <h2>Missing Persons</h2>
      </div>
      
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name..."
            className="pl-10 h-11"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3 mb-4 max-h-[500px] overflow-y-auto pr-1">
        {filteredPersons.map((person, index) => (
          <div key={index} className="p-3 sm:p-4 border rounded-lg">
            <div className="flex items-start gap-3">
              <Avatar className="flex-shrink-0">
                <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-sm flex-shrink-0">{person.name}, {person.age}</h3>
                  <Badge variant={person.status === 'found' ? 'default' : 'destructive'} className="flex-shrink-0">
                    {person.status === 'found' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {person.status === 'found' ? 'Found Safe' : 'Missing'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">Last seen: {person.lastSeen}</p>
                <p className="text-sm text-gray-600">Contact: <a href={`tel:${person.contact}`} className="text-blue-600 hover:underline">{person.contact}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Card>
  );
}
