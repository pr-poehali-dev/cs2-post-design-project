import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const handleDownload = () => {
    const canvas = document.getElementById('cs2-post') as HTMLElement;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'cs2-post.png';
    link.href = canvas.dataset.image || '';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#0F1419] to-[#1A1F2C] flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-5xl font-bold text-white tracking-wider">
            CS2 POST DESIGNER
          </h1>
          <p className="text-gray-400 text-lg">Киберспортивный стиль с неоновой эстетикой</p>
        </div>

        <div
          id="cs2-post"
          data-image="https://cdn.poehali.dev/projects/3b2cbdce-3024-419b-a536-1ce158ecac73/files/b296500f-ff87-4768-86bb-35645875a4c8.jpg"
          className="relative w-full aspect-square bg-gradient-to-br from-[#0F1419] via-[#1A1F2C] to-[#0F1419] rounded-2xl overflow-hidden shadow-2xl animate-glow"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>

          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-neon-pulse"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-60"></div>
          <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-60"></div>

          <div className="relative h-full flex flex-col items-center justify-center p-12 space-y-8">
            <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-orange-500/50"></div>
            <div className="absolute top-12 right-12 w-20 h-20 border-t-2 border-r-2 border-blue-500/50"></div>
            <div className="absolute bottom-12 left-12 w-20 h-20 border-b-2 border-l-2 border-purple-500/50"></div>
            <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-orange-500/50"></div>

            <div className="text-center space-y-4 z-10">
              <div className="inline-block px-6 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-orange-500 font-bold text-sm tracking-widest animate-neon-pulse">
                  ESPORTS READY
                </span>
              </div>
            </div>

            <div className="relative z-10 w-full max-w-md">
              <img
                src="https://cdn.poehali.dev/projects/3b2cbdce-3024-419b-a536-1ce158ecac73/files/b296500f-ff87-4768-86bb-35645875a4c8.jpg"
                alt="CS2 Logo"
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-neon-pulse"
              />
            </div>

            <div className="text-center space-y-2 z-10">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent tracking-wider drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                COUNTER-STRIKE 2
              </h2>
              <p className="text-gray-300 text-xl tracking-widest font-medium">
                THE NEXT GENERATION
              </p>
            </div>

            <div className="flex items-center gap-4 z-10">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-neon-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest">
              #CS2 #CSGO #ESPORTS #GAMING
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
        </div>

        <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-6 text-lg shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all"
          >
            <Download className="mr-2" size={24} />
            Скачать пост
          </Button>
        </div>
      </div>
    </div>
  );
}
