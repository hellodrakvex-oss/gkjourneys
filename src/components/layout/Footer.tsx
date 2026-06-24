import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-gray-200 relative overflow-hidden">
      {/* Top edge glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-6">

        {/* ── Main 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-3 group">
              <p className="font-serif text-xl text-white tracking-wide group-hover:text-white/90 transition-colors">GK JOURNEYS</p>
              <p className="text-[10px] text-[#C9A227] tracking-[0.2em] uppercase mt-0.5">Every Journey Tells A Story</p>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 font-light max-w-xs">
              We craft experiences that stay with you forever. Expertly curated travel from Mysore, Karnataka.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/20 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] group/icon"
              >
                <svg className="w-4 h-4 text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gk_journeys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)] group/icon"
              >
                <svg className="w-4 h-4 text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DE5H3gi9b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 hover:bg-[#1877F2] hover:border-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] group/icon"
              >
                <svg className="w-4 h-4 text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home",         href: "/" },
                { name: "Destinations", href: "/destinations" },
                { name: "About Us",     href: "/about" },
                { name: "Contact",      href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-[#C9A227] text-sm transition-colors font-light"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Domestic Tours",
                "International Tours",
                "Hotel Booking",
                "Flight Booking",
                "Vehicle Rental",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 hover:text-[#C9A227] text-sm transition-colors font-light">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917892050273"
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors font-light"
                >
                  <span className="text-[#C9A227]">📞</span>
                  +91 78920 50273
                </a>
              </li>
              <li>
                <a
                  href="mailto:gkjourneysbykrupa@gmail.com"
                  className="flex items-start gap-2.5 text-white/60 hover:text-white text-sm transition-colors font-light break-all"
                >
                  <span className="text-[#C9A227] flex-shrink-0">📧</span>
                  gkjourneysbykrupa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm font-light">
                <span className="text-[#C9A227] flex-shrink-0">📍</span>
                Mysore, Karnataka
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-1.5 bg-white/5 text-white/80 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-[#C9A227]">✔</span> MSME Registered Business
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 font-light tracking-wide">
          <p>© {year} GK Journeys. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.drakvex.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] hover:text-[#e8c045] transition-colors font-medium relative group"
            >
              Drakvex
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e8c045] transition-all group-hover:w-full"></span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
