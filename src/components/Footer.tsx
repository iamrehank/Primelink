import { Page } from './Header';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="w-full bg-slate-50 border-t border-surface-container mt-20" id="main-footer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 px-8 max-w-[1280px] mx-auto">
        <div className="col-span-1">
          <div className="text-lg font-bold text-on-surface mb-6">Primelink Marketing Solution LLC</div>
          <p className="text-body-md text-on-surface-variant mb-6">
            A premier marketing and BPO solutions provider dedicated to operational excellence.
          </p>
        </div>
        
        <div id="footer-services">
          <div className="text-label-bold text-on-surface mb-6 uppercase tracking-wider">Services</div>
          <ul className="space-y-4">
            <li><button onClick={() => onPageChange('services')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Strategy</button></li>
            <li><button onClick={() => onPageChange('services')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Digital Advertising</button></li>
            <li><button onClick={() => onPageChange('services')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Brand Identity</button></li>
          </ul>
        </div>

        <div id="footer-company">
          <div className="text-label-bold text-on-surface mb-6 uppercase tracking-wider">Company</div>
          <ul className="space-y-4">
            <li><button onClick={() => onPageChange('about')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Careers</button></li>
            <li><button onClick={() => onPageChange('about')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onPageChange('about')} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Terms of Service</button></li>
          </ul>
        </div>

        <div id="footer-contact">
          <div className="text-label-bold text-on-surface mb-6 uppercase tracking-wider">Contact</div>
          <p className="text-body-md text-on-surface-variant">
            1200 Enterprise Way<br />
            Suite 500<br />
            Chicago, IL 60601<br /><br />
            contact@primelinkmktg.com
          </p>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-8 py-8 border-t border-surface-container">
        <p className="text-caption text-on-surface-variant text-center">
          © {new Date().getFullYear()} Primelink Marketing Solution LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
