// 🎬 VIDEO CONFIGURATION FILE
// ================================
// 
// HOW TO ADD NEW VIDEOS:
// ----------------------
// 1. Find the subject you want to add a video to
// 2. Add a new object to the 'videos' array with:
//    - title: The video title/lesson name
//    - videoId: YouTube video ID (the part after 'v=' in YouTube URL)
//    - description: Brief description of the video content
//
// EXAMPLE:
// If YouTube URL is: https://www.youtube.com/watch?v=ABC123XYZ
// The videoId would be: "ABC123XYZ"
//
// {
//   title: "Lesson 5: Grammar Rules",
//   videoId: "ABC123XYZ",
//   description: "Understanding basic grammar concepts"
// }

export interface Video {
  title: string;
  videoId: string;
  description: string;
}

export interface Subject {
  name: string;
  emoji: string;
  videos: Video[];
}

export const subjects: Subject[] = [
  {
    name: "Bangla 1st",
    emoji: "📚",
    videos: [
      {
        title: "Chapter 1 Class 1",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Introduction to Bangla literature"
      }
      // ADD MORE VIDEOS HERE:
      // {
      //   title: "Your Video Title",
      //   videoId: "YOUR_VIDEO_ID",
      //   description: "Your video description"
      // }
    ]
  },
  {
    name: "Bangla 2nd",
    emoji: "📖",
    videos: [
      {
        title: "Sample Bangla Lesson 2",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Advanced Bangla concepts"
      }
    ]
  },
  {
    name: "English 1st",
    emoji: "🇬🇧",
    videos: [
      {
        title: "Sample English Lesson 1",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "English grammar basics"
      }
    ]
  },
  {
    name: "English 2nd",
    emoji: "📝",
    videos: [
      {
        title: "Sample English Lesson 2",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "English literature analysis"
      }
    ]
  },
  {
    name: "Math",
    emoji: "🔢",
    videos: [
      {
        title: "Sample Math Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Basic mathematics concepts"
      }
    ]
  },
  {
    name: "Higher Math",
    emoji: "📐",
    videos: [
      {
        title: "Sample Higher Math Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Advanced mathematical concepts"
      }
    ]
  },
  {
    name: "Physics",
    emoji: "⚛️",
    videos: [
      {
        title: "Sample Physics Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Physics fundamentals"
      }
    ]
  },
  {
    name: "Chemistry",
    emoji: "🧪",
    videos: [
      {
        title: "Sample Chemistry Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Chemical reactions and formulas"
      }
    ]
  },
  {
    name: "Biology",
    emoji: "🧬",
    videos: [
      {
        title: "Sample Biology Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Life sciences and biology concepts"
      }
    ]
  },
  {
    name: "ICT",
    emoji: "💻",
    videos: [
      {
        title: "Sample ICT Lesson",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        description: "Information and Communication Technology"
      }
    ]
  }
];