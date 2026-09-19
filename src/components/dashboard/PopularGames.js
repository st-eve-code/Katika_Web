const games = [
  {
    title: 'Call Of Duty:',
    subtitle: 'Suicide Mission',
    image: '/games/cod.jpg',
  },
  {
    title: 'Lego Star Warriors',
    subtitle: '',
    image: '/games/lego-star-wars.jpg',
  },
];

export default function PopularGames() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">Popular Games</h3>
          <p className="text-xs text-gray-500">Most popular game for this month</p>
        </div>
        <button className="text-xs text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded-full">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {games.map((game) => (
          <div
            key={game.title}
            className="relative h-56 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-end p-4"
            style={{
              backgroundImage: `url(${game.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10">
              <p className="text-white font-semibold">{game.title}</p>
              {game.subtitle && <p className="text-white font-semibold">{game.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}