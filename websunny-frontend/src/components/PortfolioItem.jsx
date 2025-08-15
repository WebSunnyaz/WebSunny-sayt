import BlurImage from "./BlurImage";

const PortfolioItem = ({ image, title, link }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300 flex flex-col">
      <div className="p-5 bg-black">
        <BlurImage
          img={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg border border-gray-700"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800 bg-black">
        <h3 className="text-white text-md font-medium">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#28b6ff] text-black px-4 py-1 rounded-md text-sm hover:bg-[#1aa5eb] transition"
          >
            Keçid
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
