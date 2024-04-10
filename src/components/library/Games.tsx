import Avatar from '../ui/avatar/Avatar';

const Games: React.FC = () => {
  return (
    <>
      <aside className="w-64 h-screen bg-gray-100 p-5">
        <div className="flex flex-col space-y-5">
          <h2 className="text-lg font-semibold">Усі ігри</h2>
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex space-x-2">
              <Avatar alt="Game image" src=""></Avatar>
              <span className="p-2">Назва гри {i + 1}</span>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Games;
