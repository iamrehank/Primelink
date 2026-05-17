import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-surface-container mt-20" id="main-footer">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 md:px-8 max-w-[1280px] mx-auto">

        {/* Brand — full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <img
              src="/full_m_logo.png"
              alt="Primelink Marketing Solution LLC"
              width={200}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-body-md text-on-surface-variant">
            A premier marketing and BPO solutions provider dedicated to operational excellence.
          </p>
        </div>

        <div id="footer-services">
          <div className="text-label-bold text-on-surface mb-4 uppercase tracking-wider text-sm">Services</div>
          <ul className="space-y-3">
            <li><Link to="/services" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Call Centre Support</Link></li>
            <li><Link to="/services" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Pay Per Click</Link></li>
            <li><Link to="/services" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Lead Generation</Link></li>
            <li><Link to="/services" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Social Media</Link></li>
          </ul>
        </div>

        <div id="footer-company">
          <div className="text-label-bold text-on-surface mb-4 uppercase tracking-wider text-sm">Company</div>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div id="footer-contact">
          <div className="text-label-bold text-on-surface mb-4 uppercase tracking-wider text-sm">Contact</div>
          <address className="text-body-md text-on-surface-variant not-italic space-y-1">
            <p>1200 Enterprise Way, Suite 500</p>
            <p>Chicago, IL 60601</p>
            <a href="mailto:inquiry@primelinkmktg.com" className="hover:text-primary transition-colors block mt-2">
              inquiry@primelinkmktg.com
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 border-t border-surface-container">
        <p className="text-caption text-on-surface-variant text-center">
          © {new Date().getFullYear()} Primelink Marketing Solution LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
