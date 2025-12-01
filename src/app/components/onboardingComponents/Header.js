export default function Header() {
  return (
    <header className="w-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] h-[68px]">
      <div className="px-10 md:px-20 py-10">
        {/* Logo with styled G */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="inline-flex items-center font-[38px] text-[42px] justify-center w-[27px] h-[26px] tracking-[-0.04em] rounded-full bg-white text-[#787878] text-lg mr-0.5">
              G
            </span>
            <span className="text-[#787878] w-[51px] h-[13px] text-[13px] tracking[-0.04em] leading-none">GigLink</span>
          </span>
        </div>
      </div>
    </header>
  );
}