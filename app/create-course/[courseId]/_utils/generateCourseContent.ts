import { generateCourseChapters } from "@/configs/ai-models";
import { getYoutubeVideos } from "@/configs/service";
import { db } from "@/configs/db";
import { CourseChapters } from "@/schema/schema";
import { CourseType } from "@/types/types";

export const generateCourseContent = async (
  course: CourseType,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);

  try {
    const chapters = course?.courseOutput.chapters;
    const usedVideoIds = new Set<string>();

    // Process chapters sequentially instead of in parallel
    for (let index = 0; index < chapters.length; index++) {
      const chapter = chapters[index];
      
      // Add delay between requests to avoid rate limiting
      if (index > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      }

      const query = `${course.courseName} ${chapter.chapter_name} tutorial`;
      const resp = await getYoutubeVideos(query);

      // Find the first unused video
      let videoId = null;
      for (const item of resp) {
        if (!usedVideoIds.has(item.id.videoId)) {
          videoId = item.id.videoId;
          usedVideoIds.add(videoId);
          break;
        }
      }
      if (!videoId && resp.length > 0) {
        videoId = resp[0].id.videoId;
      }

      // Generate course content
      const PROMPT = `Explain the concepts in detail on Topic: ${course?.courseName}, Chapter: ${chapter.chapter_name}, in JSON Format with list of array with fields as Title, explanation of given chapter in detail, code examples (code field <precode> format) if applicable.`;
      
      try {
        const result = await generateCourseChapters.sendMessage(PROMPT);
        const content = await JSON.parse(result?.response?.text()!);

        // Insert into the database
        await db.insert(CourseChapters).values({
          chapterId: index,
          courseId: course.courseId,
          content: content,
          videoId: videoId,
        });
      } catch (error) {
        console.log(`Error in processing chapter ${index}:`, error);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
