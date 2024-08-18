import { useGet } from "../utils/useGet";
import { PhotoMetadata } from "../../../types/photo-metadata";

export const Photos = () => {
  const { data, isFetching } = useGet<PhotoMetadata[]>("/photos");

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Here are all of my photos</h2>
      <h4>Total: {data?.length ?? 0}</h4>
      <ul>
        {data?.map((photo) => {
          return <li key={photo.id}>{photo.id}</li>;
        })}
      </ul>
    </div>
  );
};
