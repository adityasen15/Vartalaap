const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <span>Vartalaap — Language Learning Platform</span>
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} Aditya Sen. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
