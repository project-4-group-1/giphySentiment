const Display = (props) => {
  const { gifGallery } = props;

  return (
    <section>
      <h2>Photos</h2>
      <div className="photos">
        {gifGallery.map((gifPic) => {
          return (
            <img
              key={gifPic.id}
              src={gifPic.images.original.url}
              alt={gifPic.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Display;
