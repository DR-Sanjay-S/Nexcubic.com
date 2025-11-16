import { Link } from "wouter";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "@assets/logo-transparent-png_1763281292366.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="NexCubic logo" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tech support for startups. Building products that matter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <a className="text-slate-400 hover:text-primary transition-colors" data-testid="footer-link-services">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-slate-400 hover:text-primary transition-colors" data-testid="footer-link-blog">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-slate-400 hover:text-primary transition-colors" data-testid="footer-link-careers">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-400 hover:text-primary transition-colors" data-testid="footer-link-about">About Us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@nexcubic.com" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2" data-testid="footer-link-email">
                  <Mail className="h-4 w-4" />
                  hello@nexcubic.com
                </a>
              </li>
              <li className="text-slate-400">Bangalore, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors" aria-label="Twitter" data-testid="footer-link-twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors" aria-label="LinkedIn" data-testid="footer-link-linkedin">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors" aria-label="GitHub" data-testid="footer-link-github">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>© 2025 NexCubic. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy">
              <a className="hover:text-primary transition-colors" data-testid="footer-link-privacy">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-primary transition-colors" data-testid="footer-link-terms">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
