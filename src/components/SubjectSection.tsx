import { useNavigate } from 'react-router-dom';
import { Subject } from '../data/videos';

interface SubjectSectionProps {
  subject: Subject;
}

const SubjectSection = ({ subject }: SubjectSectionProps) => {
  const navigate = useNavigate();

  const handleSubjectClick = () => {
    const subjectSlug = subject.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/subject/${subjectSlug}`);
  };

  return (
    <div className="pookie-card animate-fade-in-up">
      <button
        onClick={handleSubjectClick}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl group-hover:animate-pookie-bounce">
            {subject.emoji}
          </span>
          <h2 className="text-2xl font-playfair font-bold text-foreground group-hover:text-primary transition-colors neon-text-hover">
            {subject.name}
          </h2>
        </div>
        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
          <span className="text-sm font-poppins">View Videos →</span>
        </div>
      </button>
    </div>
  );
};

export default SubjectSection;