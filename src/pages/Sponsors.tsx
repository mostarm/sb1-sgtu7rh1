import React from 'react';

const mockSponsors = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
    website: 'https://example.com',
    category: 'platinum'
  },
  {
    id: '2',
    name: 'CloudScale',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
    website: 'https://example.com',
    category: 'platinum'
  },
  {
    id: '3',
    name: 'SecureNet',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    website: 'https://example.com',
    category: 'gold'
  },
  {
    id: '4',
    name: 'DevTools',
    logo: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a',
    website: 'https://example.com',
    category: 'gold'
  },
  {
    id: '5',
    name: 'AILabs',
    logo: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
    website: 'https://example.com',
    category: 'gold'
  },
  {
    id: '6',
    name: 'DataFlow',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    website: 'https://example.com',
    category: 'silver'
  },
  {
    id: '7',
    name: 'WebTech',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    website: 'https://example.com',
    category: 'silver'
  },
  {
    id: '8',
    name: 'CodeLabs',
    logo: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    website: 'https://example.com',
    category: 'bronze'
  }
];

const categoryColors = {
  platinum: 'from-blue-400 to-purple-600',
  gold: 'from-yellow-400 to-orange-500',
  silver: 'from-gray-300 to-gray-500',
  bronze: 'from-orange-300 to-brown-500'
};

const Sponsors = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-blue-600">Sponsors</h2>
      
      {['platinum', 'gold', 'silver', 'bronze'].map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600 capitalize">
            {category} Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSponsors
              .filter((sponsor) => sponsor.category === category)
              .map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[sponsor.category as keyof typeof categoryColors]} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="p-8">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-32 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                    <h4 className="text-xl font-medium text-gray-100 mt-4 text-center">
                      {sponsor.name}
                    </h4>
                  </div>
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;