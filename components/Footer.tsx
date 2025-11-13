export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="border-[var(--color-border)] border-dashed border-t-0 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px]">
          <div className="text-center py-6 sm:py-8 px-4 sm:px-6">
            <p className="text-body text-[var(--color-secondary)]">© {currentYear} Resume by</p>
            <a
              href="/"
              className="text-body text-[var(--color-secondary)] hover:opacity-80 transition-smooth inline-block"
            >
              Aydin Gundeger
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

