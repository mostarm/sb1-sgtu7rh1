import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Star, StarOff } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { useStore } from '../store/useStore';
import type { Talk } from '../types';

const mockTalks: Record<string, Talk> = {
  '1': {
    id: '1',
    title: 'Opening Keynote: The Future of Technology',
    abstract: 'Join us for an inspiring journey into the future of technology. We\'ll explore emerging trends in AI, quantum computing, and their potential impact on society. This keynote will challenge your perspective and provide insights into the technological developments that will shape our world in the coming decades.',
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
  '2': {
    id: '2',
    title: 'Web Development in 2024',
    abstract: 'Discover the latest trends and best practices in web development. From new frameworks to performance optimization techniques, this talk covers everything you need to know to stay ahead in the rapidly evolving web development landscape.',
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
  }
};

const TalkDetails = () => {
  const { id } = useParams();
  const { favoriteTalks, addFavoriteTalk, removeFavoriteTalk } = useStore();
  const talk = mockTalks[id ?? ''];

  if (!talk) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Talk not found</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Agenda
        </Link>
      </div>
    );
  }

  const isFavorite = favoriteTalks.includes(talk.id);

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Agenda
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold text-gray-900">{talk.title}</h1>
          <button
            onClick={() =>
              isFavorite ? removeFavoriteTalk(talk.id) : addFavoriteTalk(talk.id)
            }
            className="ml-4"
          >
            {isFavorite ? (
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
            ) : (
              <Star className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        <div className="flex items-center space-x-6 mt-4 text-gray-600">
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>
              {format(parseISO(talk.startTime), 'HH:mm')} -{' '}
              {format(parseISO(talk.endTime), 'HH:mm')}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{talk.room}</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Abstract</h2>
          <p className="text-gray-600">{talk.abstract}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talk.speakers.map((speaker) => (
              <Link
                key={speaker.id}
                to={`/speaker/${speaker.id}`}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{speaker.name}</h3>
                  <p className="text-gray-600 text-sm">{speaker.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkDetails;