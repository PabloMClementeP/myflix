import { tbdbInstance } from "../../data-source/tmdb-instance";

const VideoService = {
  getById: async (id: number): Promise<any | null> => {
    try {
      const response = await tbdbInstance.get(
        `/movie/${id}/videos?language=en-US`
      );
      return response.data.results || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default VideoService;
