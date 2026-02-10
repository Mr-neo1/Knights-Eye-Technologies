"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const navItems = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/client-diaries", label: "Client Diaries" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { setTheme, theme } = useTheme();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full border-b backdrop-blur duration-300",
                isScrolled
                    ? "bg-background/80 border-border"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
                    <span>{siteConfig.shortName}</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                pathname === item.href ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="ml-4"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Button asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </nav>
                <div className="flex items-center md:hidden gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="pt-4">
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
