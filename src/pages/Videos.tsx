import { subjects } from '../data/videos';
import SubjectSection from '../components/SubjectSection';

const Videos = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-playfair font-bold text-primary mb-4 neon-text">
            Class Videos
          </h1>
          <div className="neon-divider mt-6"></div>
        </div>

        <div className="space-y-8">
          {subjects.map((subject, index) => (
            <div
              key={subject.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SubjectSection subject={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;