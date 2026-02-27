import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-background/80 border-b border-border/50 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-red-200/10 flex items-center justify-center">
              <span className="text-red-100/80 font-bold font-playfair text-sm">
                H
              </span>
            </div>
            <span className="font-playfair font-bold text-xl tracking-[-0.5px] text-white">
              History Gate
            </span>

            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
