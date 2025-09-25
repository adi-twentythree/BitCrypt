export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">BitCrypt</p>
          <div className="flex space-x-8 text-gray-600 font-medium">
            <a href="#about" className="hover:text-black">About Us</a>
            <a href="/faq" className="hover:text-black">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}