export default function Ellipsis() {
  return (
    <div className="flex w-full">
      <div className="w-2 h-2 mr-4 mt-8 mb-8 rounded-full bg-primary transition-all animate-pulse"></div>
      <div className="w-2 h-2 mr-4 mt-8 mb-8 rounded-full bg-primary transition-all animate-pulse delay-150 duration-100 ease-in-out"></div>
      <div className="w-2 h-2 mr-4 mt-8 mb-8 rounded-full bg-primary transition-all animate-pulse delay-2000 duration-300 ease-in-out"></div>
  </div>
  );
}
