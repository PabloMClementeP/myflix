import VideoService from "../../../aplication/services/videos";

async function getVideoById(id: number) {
  try {
    const response = await VideoService.getById(id);
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getVideoById;
