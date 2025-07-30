import { useParams, useNavigate } from 'react-router-dom';
import { subjects } from '../data/videos';
import VideoCard from '../components/VideoCard';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const SubjectVideos = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === subjectName);
  
  if (!subject) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair font-bold text-primary mb-4">Subject not found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 hover:bg-secondary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Button>
          
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4 neon-text">
              {subject.emoji} {subject.name}
            </h1>
            <div className="neon-divider"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.videos.map((video, index) => (
            <div
              key={video.videoId}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectVideos;