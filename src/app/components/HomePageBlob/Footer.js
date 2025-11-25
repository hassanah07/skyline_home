import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Skylinee Fynum Small Finance PVT LTD —
            Built for growth
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
