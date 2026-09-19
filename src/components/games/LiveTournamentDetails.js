export default function LiveTournamentDetails({ tournament }) {
  if (!tournament) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-5 text-sm text-gray-500">
        Select a tournament to see details
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
      <div className="p-5 pb-0 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <div>
          <p className="text-sm text-white font-medium">Live Tournament Details</p>
          <p className="text-xs text-gray-500">create a tournament and set the session</p>
        </div>
      </div>

      <div
        className="h-64 mt-4"
        style={{ backgroundImage: `url(${tournament.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-white">{tournament.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          In a decaying city pushed to the brink, Batman wages a high-stakes war against an underground syndicate.
        </p>

        <div>
          <p className="text-xs text-gray-500">Tournament Session</p>
          <p className="text-sm text-white">12-06-2026  to  14-06-2026</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Minimum Entry Fee</p>
          <p className="text-sm text-white">500 XAF</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Game Duration</p>
          <p className="text-sm text-white">2hrs 30mins 50sec</p>
        </div>
      </div>
    </div>
  );
}