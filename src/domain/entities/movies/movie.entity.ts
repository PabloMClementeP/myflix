export type Movie = {
  backdrop_path: string; // Ruta al fondo de la película
  id: number; // Identificador único de la película
  title: string; // Título de la película
  original_title: string; // Título original
  overview: string; // Sinopsis de la película
  poster_path: string; // Ruta al póster de la película
  media_type: string; // Tipo de medio (en este caso, "movie")
  adult: boolean; // Indica si es contenido para adultos
  original_language: string; // Idioma original de la película
  genre_ids: number[]; // Identificadores de los géneros
  popularity: number; // Popularidad de la película
  release_date: string; // Fecha de lanzamiento
  video: boolean; // Indica si es un video
  vote_average: number; // Calificación promedio
  vote_count: number; // Cantidad de votos
};
