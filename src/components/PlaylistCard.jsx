export default function PlaylistCard({ image, title, artist }) {
  return (
    <>
      <div className="bg-darkGray p-4 rounded-lg hover:bg-dark transition w-64 cursor-pointer transform transition-transform duration-500 hover:scale-105 group">
        {/* Album Image */}
        <div className="w-full h-55 bg-gray-700 rounded mb-4 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded mb-4"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-lightGray">
              No Image
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="mt-2 text-white font-bold text-lg">{title}</h4>

        {/* Artist */}
        <p className="text-lightGray text-sm text-white group-hover:text-orange-400 font-bold transition-colors duration-300">{artist}</p>
      </div>
    </>
  );
}

//  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer transform transition-transform duration-500 hover:scale-105">

