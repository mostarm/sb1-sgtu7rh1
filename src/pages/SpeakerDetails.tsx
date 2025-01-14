import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Speaker, Talk } from '../types';

const mockSpeakers: Record<string, Speaker & { talks: Talk[] }> = {
  '1': {
    id: '1',
    name: 'Dr. Jane Smith',
    bio: 'Dr. Jane Smith is a leading expert in Artificial Intelligence and Machine Learning, with over 15 years of experience in the field. She has contributed to groundbreaking research in neural networks and has been instrumental in developing AI solutions that are currently used by millions of people worldwide. As the Head of AI Research at TechCorp, she leads a team of researchers pushing the boundaries of what\'s possible with machine learning.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    talks: [{
      id: '1',
      title: 'Opening Keynote: The Future of Technology',
      abstract: 'An inspiring look into the future of technology and its impact on society.',
      track: 'main',
      startTime: '2024-03-20T09:00:00Z',
      endTime: '2024-03-20T10:00:00Z',
      room: 'Main Hall',
      speakers: []
    }]
  },
  '2': {
    id: '2',
    name: 'Alex Johnson',
    bio: 'Alex Johnson is a Senior Web Developer at TechCorp with a passion for building scalable and performant web applications. With 10 years of experience in the industry, Alex has worked on numerous high-profile projects and is a regular contributor to open-source projects. He specializes in modern JavaScript frameworks and performance optimization.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    talks: [{
      id: '2',
      title: 'Web Development in 2024',
      abstract: 'Discover the latest trends and best practices in web development.',
      track: 'web',
      startTime: '2024-03-20T10:30:00Z',
      endTime: '2024-03-20T11:30:00Z',
      room: 'Room B',
      speakers: []
    }]
  }
};

const SpeakerDetails = () => {
  const { id } = useParams();
  const speaker = mockSpeakers[id ?? ''];

  if (!speaker) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Speaker not found</p>
        <Link to="/speakers" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Speakers
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/speakers"
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Speakers
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-48 w-full md:w-48 object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900">{speaker.name}</h1>
            <p className="mt-4 text-gray-600">{speaker.bio}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Talks</h2>
        <div className="space-y-4">
          {speaker.talks.map((talk) => (
            <Link
              key={talk.id}
              to={`/talk/${talk.id}`}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">{talk.title}</h3>
              <p className="text-gray-600 mt-2">{talk.abstract}</p>
              <div className="mt-2 text-sm text-gray-500">
                {talk.room} • Track: {talk.track}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;