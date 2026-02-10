import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-lg">
            <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="font-bold text-xl tracking-tight">
                            {siteConfig.name}
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {siteConfig.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Network & System Admin</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Project Management</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Security & Compliance</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">AI Apps & Integration</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="/client-diaries" className="hover:text-primary transition-colors">Client Diaries</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
                            <li><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
