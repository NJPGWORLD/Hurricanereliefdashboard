import { Card } from './ui/card';
import { Newspaper, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

const newsUpdates = [
  {
    time: '2 minutes ago',
    title: 'Emergency responders working around the clock',
    content: 'First responders are conducting rescue operations in flooded areas. Over 200 people have been evacuated to safety.',
    category: 'Emergency'
  },
  {
    time: '15 minutes ago',
    title: 'Governor declares state of emergency',
    content: 'State of emergency declared for all affected counties. National Guard deployed to assist with relief efforts.',
    category: 'Official'
  },
  {
    time: '45 minutes ago',
    title: 'Power outages affect 50,000 residents',
    content: 'Utility companies are working to restore power. Estimated restoration time is 48-72 hours for most areas.',
    category: 'Infrastructure'
  },
  {
    time: '1 hour ago',
    title: 'Relief supplies arriving from neighboring states',
    content: 'Convoys carrying food, water, and medical supplies are arriving. Distribution centers are being set up across the region.',
    category: 'Aid'
  },
  {
    time: '2 hours ago',
    title: 'Schools and universities closed until further notice',
    content: 'All educational institutions in the affected area will remain closed. Remote learning options are being evaluated.',
    category: 'Community'
  },
  {
    time: '3 hours ago',
    title: 'Hurricane Melissa weakens to Category 2',
    content: 'Wind speeds have decreased to 105 mph. Storm is expected to continue weakening over the next 24 hours.',
    category: 'Weather'
  },
  {
    time: '4 hours ago',
    title: 'Evacuation orders expanded to coastal zones',
    content: 'Mandatory evacuation orders now include all low-lying coastal areas. Residents urged to seek higher ground immediately.',
    category: 'Emergency'
  },
  {
    time: '5 hours ago',
    title: 'Local businesses offering free meals to evacuees',
    content: 'Several restaurants and food establishments are providing complimentary meals to those affected by the hurricane.',
    category: 'Community'
  }
];

const categoryColors: Record<string, string> = {
  'Emergency': 'bg-red-100 text-red-700',
  'Official': 'bg-blue-100 text-blue-700',
  'Infrastructure': 'bg-purple-100 text-purple-700',
  'Aid': 'bg-green-100 text-green-700',
  'Community': 'bg-orange-100 text-orange-700',
  'Weather': 'bg-cyan-100 text-cyan-700'
};

export function NewsUpdates() {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="w-5 h-5 text-gray-700" />
        <h2>News & Updates</h2>
      </div>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
        {newsUpdates.map((update, index) => (
          <div key={index} className="pb-4 border-b last:border-b-0">
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-500">{update.time}</span>
              <Badge className={`text-xs ${categoryColors[update.category]}`}>
                {update.category}
              </Badge>
            </div>
            <h3 className="text-sm mb-1.5">{update.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{update.content}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
