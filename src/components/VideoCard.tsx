import { Video } from '../data/videos';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="pookie-card group">
      <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
          title={video.title}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <h3 className="font-comfortaa font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {video.title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {video.description}
      </p>
    </div>
  );
};

export default VideoCard;