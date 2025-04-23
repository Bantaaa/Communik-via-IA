// Contact form types
export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    serviceInterest: string; // branding, site-creation, ai-strategy, automation
}