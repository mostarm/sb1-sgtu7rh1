import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockSpeakers = [
  {
    id: '1',
    name: 'Dr. Jane Smith',
    bio: 'Leading expert in AI and Machine Learning',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    talks: []
  },
  {
    id: '2',
    name: 'Alex Johnson',
    bio: 'Senior Web Developer specializing in modern frameworks',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    talks: []
  },
  {
    id: '3',
    name: 'Dr. Sarah Chen',
    bio: 'Quantum Computing Researcher and Educator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    talks: []
  },
  {
    id: '4',
    name: 'Michael Torres',
    bio: 'Principal Architect focusing on scalable systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    talks: []
  },
  {
    id: '5',
    name: 'Emma Watson',
    bio: 'AI Implementation Specialist and Consultant',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
    talks: []
  },
  {
    id: '6',
    name: 'David Kim',
    bio: 'Security Expert and Ethical Hacker',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    talks: []
  },
  {
    id: '7',
    name: 'Lisa Chen',
    bio: 'Cloud Architecture and DevOps Specialist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    talks: []
  },
  {
    id: '8',
    name: 'James Wilson',
    bio: 'Blockchain Technology Researcher',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    talks: []
  }
];

const Speakers = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-600">Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => navigate(`/speaker/${speaker.id}`)}
          >
            <div className="relative h-48">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                {speaker.name}
              </h3>
            </div>
            <div className="p-4">
              <p className="text-gray-300 line-clamp-2">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;