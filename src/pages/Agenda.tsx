import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, isWithinInterval, parseISO, differenceInSeconds } from 'date-fns';
import { Star, StarOff } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Talk } from '../types';

const mockTalks: Talk[] = [
  {
    id: '1',
    title: 'Opening Keynote: The Future of Technology',
    abstract: 'An inspiring look into the future of technology and its impact on society.',
    track: 'main',
    startTime: '2024-03-20T09:00:00Z',
    endTime: '2024-03-20T10:00:00Z',
    room: 'Main Hall',
    speakers: [{
      id: '1',
      name: 'Dr. Jane Smith',
      bio: 'Leading expert in AI and Machine Learning',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      talks: []
    }]
  },
  {
    id: '2',
    title: 'Web Development in 2024',
    abstract: 'Modern web development practices and trends.',
    track: 'web',
    startTime: '2024-03-20T10:30:00Z',
    endTime: '2024-03-20T11:30:00Z',
    room: 'Room B',
    speakers: [{
      id: '2',
      name: 'Alex Johnson',
      bio: 'Senior Web Developer at TechCorp',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
      talks: []
    }]
  },
  {
    id: '3',
    title: 'Quantum Computing: A New Era',
    abstract: 'Understanding quantum computing and its applications.',
    track: 'main',
    startTime: '2024-03-20T11:00:00Z',
    endTime: '2024-03-20T12:00:00Z',
    room: 'Main Hall',
    speakers: [{
      id: '3',
      name: 'Dr. Sarah Chen',
      bio: 'Quantum Computing Researcher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      talks: []
    }]
  },
  {
    id: '4',
    title: 'Building Scalable Systems',
    abstract: 'Architecture patterns for modern applications.',
    track: 'architecture',
    startTime: '2024-03-20T13:00:00Z',
    endTime: '2024-03-20T14:00:00Z',
    room: 'Room C',
    speakers: [{
      id: '4',
      name: 'Michael Torres',
      bio: 'Principal Architect at CloudScale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      talks: []
    }]
  },
  {
    id: '5',
    title: 'AI in Production',
    abstract: 'Real-world AI implementation strategies.',
    track: 'ai',
    startTime: '2024-03-20T14:30:00Z',
    endTime: '2024-03-20T15:30:00Z',
    room: 'Room A',
    speakers: [{
      id: '5',
      name: 'Emma Watson',
      bio: 'AI Implementation Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      talks: []
    }]
  },
  {
    id: '6',
    title: 'Cybersecurity Best Practices',
    abstract: 'Modern security approaches for applications.',
    track: 'security',
    startTime: '2024-03-20T16:00:00Z',
    endTime: '2024-03-20T17:00:00Z',
    room: 'Main Hall',
    speakers: [{
      id: '6',
      name: 'David Kim',
      bio: 'Security Expert at SecureNet',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      talks: []
    }]
  }
];

const Agenda = () => {
  const navigate = useNavigate();
  const [showFavorites, setShowFavorites] = useState(false);
  const { favoriteTalks, addFavoriteTalk, removeFavoriteTalk } = useStore();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isCurrentlyHappening = (talk: Talk) => {
    return isWithinInterval(now, {
      start: parseISO(talk.startTime),
      end: parseISO(talk.endTime),
    });
  };

  const getProgress = (talk: Talk) => {
    if (!isCurrentlyHappening(talk)) return 0;
    const totalDuration = differenceInSeconds(parseISO(talk.endTime), parseISO(talk.startTime));
    const elapsed = differenceInSeconds(now, parseISO(talk.startTime));
    return Math.min((elapsed / totalDuration) * 100, 100);
  };

  const filteredTalks = showFavorites
    ? mockTalks.filter((talk) => favoriteTalks.includes(talk.id))
    : mockTalks;

  const currentTalk = mockTalks.find(isCurrentlyHappening);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-600">Conference Agenda</h2>
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showFavorites ? (
            <>
              <StarOff className="w-5 h-5" />
              <span>Show All</span>
            </>
          ) : (
            <>
              <Star className="w-5 h-5" />
              <span>Show Favorites</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        {currentTalk && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Currently Live</h3>
            <div
              key={currentTalk.id}
              className="p-6 bg-gray-800 rounded-lg shadow-xl border border-blue-500/30 talk-progress"
              style={{ '--progress': `${getProgress(currentTalk)}%` } as React.CSSProperties}
              onClick={() => navigate(`/talk/${currentTalk.id}`)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 cursor-pointer">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {currentTalk.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-300 mb-4">
                    <span>{format(parseISO(currentTalk.startTime), 'HH:mm')} - {format(parseISO(currentTalk.endTime), 'HH:mm')}</span>
                    <span>•</span>
                    <span>{currentTalk.room}</span>
                    <span>•</span>
                    <span className="capitalize">{currentTalk.track} Track</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    {currentTalk.speakers.map((speaker) => (
                      <div key={speaker.id} className="flex items-center space-x-3">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="text-gray-200">{speaker.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    favoriteTalks.includes(currentTalk.id)
                      ? removeFavoriteTalk(currentTalk.id)
                      : addFavoriteTalk(currentTalk.id);
                  }}
                  className="ml-4"
                >
                  {favoriteTalks.includes(currentTalk.id) ? (
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  ) : (
                    <Star className="w-6 h-6 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTalks
            .filter(talk => !isCurrentlyHappening(talk))
            .map((talk) => (
              <div
                key={talk.id}
                className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-750 transition-colors cursor-pointer"
                onClick={() => navigate(`/talk/${talk.id}`)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {talk.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm mb-3">
                      <span>{format(parseISO(talk.startTime), 'HH:mm')} - {format(parseISO(talk.endTime), 'HH:mm')}</span>
                      <span>•</span>
                      <span>{talk.room}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {talk.speakers.map((speaker) => (
                        <img
                          key={speaker.id}
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-8 h-8 rounded-full object-cover"
                          title={speaker.name}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      favoriteTalks.includes(talk.id)
                        ? removeFavoriteTalk(talk.id)
                        : addFavoriteTalk(talk.id);
                    }}
                    className="ml-4"
                  >
                    {favoriteTalks.includes(talk.id) ? (
                      <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    ) : (
                      <Star className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;