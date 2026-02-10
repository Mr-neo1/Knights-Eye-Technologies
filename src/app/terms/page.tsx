import { Section } from "@/components/layout/section";

export const metadata = {
    title: "Terms of Service | Knights Eye Technologies",
    description: "Our terms of service.",
};

export default function TermsPage() {
    return (
        <main>
            <Section className="bg-secondary/5 pt-28 pb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: February 2026</p>
                </div>
            </Section>
            <Section>
                <div className="prose dark:prose-invert max-w-3xl mx-auto">
                    <p>
                        Please read these Terms of Service completely before using knightseyetech.com which is owned and operated by Knights Eye Technologies LLP.
                    </p>
                    <h2>Agreement to Terms</h2>
                    <p>
                        By using our website, you agree to be bound by these Terms of Service. If you do not agree to be bound by the terms of this Agreement, you are advised to leave this website accordingly.
                    </p>
                    <h2>Intellectual Property</h2>
                    <p>
                        The Site and its original content, features, and functionality are owned by Knights Eye Technologies LLP and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        For any questions about these Terms, please contact us at support@knightseyetech.com.
                    </p>
                </div>
            </Section>
        </main>
    );
}
