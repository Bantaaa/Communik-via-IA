// This file would normally include Google Sheets API integration
// However, for this project, we're using n8n to handle the Google Sheets integration
// This file is a placeholder to show how you could directly integrate with Google Sheets if needed

import { ContactFormData } from './types';

export interface SheetsConfig {
    documentId: string;
    sheetName: string;
}

/**
 * Format contact form data for Google Sheets
 */
export function formatContactData(data: ContactFormData): string[] {
    const timestamp = new Date().toISOString();
    return [
        timestamp,
        data.name,
        data.email,
        data.company || '',
        data.phone || '',
        data.serviceInterest,
        data.message,
        'new', // status
        timestamp // lastContact
    ];
}

/**
 * This function would append data to Google Sheets directly
 * In our implementation, n8n handles this logic
 */
export async function appendToSheet(config: SheetsConfig, data: string[]): Promise<boolean> {
    try {
        // Implementation would go here if we were using direct Google Sheets API
        // For now, we're returning true as a placeholder since n8n handles this
        console.log('Data would be added to Google Sheets:', data);
        return true;
    } catch (error) {
        console.error('Error appending to sheet:', error);
        return false;
    }
}