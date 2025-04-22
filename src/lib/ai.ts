// This file would normally include OpenAI API integration
// However, for this project, we're using n8n to handle the OpenAI integration
// This file is a placeholder to show how you could directly integrate with OpenAI if needed

import { ContactFormData } from './types';

export interface AIAnalysisResult {
    summary: string;
    suggestedOffer: string;
    category: string;
}

/**
 * Generate a system prompt for the AI
 */
function generateSystemPrompt(): string {
    return `You are an assistant for a communication agency named 'Communik via IA' that specializes in branding, website creation, AI strategy, and automation. Your task is to analyze incoming contact form submissions and provide a summary, suggest an appropriate offer based on the message content, and categorize the need.`;
}

/**
 * Generate a user prompt based on the contact form data
 */
function generateUserPrompt(data: ContactFormData): string {
    return `Name: ${data.name}
Company: ${data.company || 'Not specified'}
Service Interest: ${data.serviceInterest}
Message: ${data.message}

Please provide:
1. A summary of the request (3-4 sentences)
2. A suggested offer based on the content (2-3 sentences)
3. Category of need (one of: branding, website, ai-strategy, automation, or multiple)`;
}

/**
 * This function would analyze the contact form data using OpenAI API directly
 * In our implementation, n8n handles this logic
 */
export async function analyzeContactRequest(data: ContactFormData): Promise<AIAnalysisResult> {
    try {
        // Implementation would go here if we were using direct OpenAI API
        // For now, we're returning mock data as a placeholder since n8n handles this

        // Mock response based on the service interest
        let mockResponse: AIAnalysisResult;

        switch (data.serviceInterest) {
            case 'branding':
                mockResponse = {
                    summary: `${data.name} from ${data.company || 'their organization'} is looking for branding services. They need help establishing a visual identity that reflects their values and mission.`,
                    suggestedOffer: `Our complete branding package would be ideal, including logo design, color palette selection, typography, and brand guidelines.`,
                    category: 'branding'
                };
                break;

            case 'site-creation':
                mockResponse = {
                    summary: `${data.name} is seeking a new website for ${data.company || 'their organization'}. They want a modern, responsive site that represents their business effectively.`,
                    suggestedOffer: `I recommend our professional website creation service with custom design, content optimization, and responsive development.`,
                    category: 'website'
                };
                break;

            case 'ai-strategy':
                mockResponse = {
                    summary: `${data.name} is interested in implementing AI solutions at ${data.company || 'their organization'}. They're looking for guidance on how AI can enhance their communication strategy.`,
                    suggestedOffer: `Our AI strategy consultation would be perfect, offering a personalized roadmap for AI integration and specific recommendations for their industry.`,
                    category: 'ai-strategy'
                };
                break;

            case 'automation':
                mockResponse = {
                    summary: `${data.name} wants to automate processes at ${data.company || 'their organization'}. They're looking to streamline workflows and improve efficiency.`,
                    suggestedOffer: `I suggest our workflow automation package, which includes process analysis, custom automation design, and implementation support.`,
                    category: 'automation'
                };
                break;

            default:
                mockResponse = {
                    summary: `${data.name} has contacted us about our services. They're interested in exploring how we can help ${data.company || 'their organization'} with their communication needs.`,
                    suggestedOffer: `An initial consultation would be beneficial to better understand their specific needs and provide tailored recommendations.`,
                    category: 'multiple'
                };
        }

        console.log('AI analysis result:', mockResponse);
        return mockResponse;

    } catch (error) {
        console.error('Error analyzing contact request:', error);
        return {
            summary: `Request from ${data.name} about ${data.serviceInterest}.`,
            suggestedOffer: "An initial consultation to discuss requirements in detail.",
            category: data.serviceInterest.includes('-') ? data.serviceInterest.split('-')[0] : data.serviceInterest
        };
    }
}