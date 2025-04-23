'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

// Form validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, 'Le nom est requis'),
    email: z.string().email('Email invalide'),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, 'Votre message doit contenir au moins 10 caractères'),
    serviceInterest: z.string({
        required_error: 'Veuillez sélectionner un service',
    }),
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
    const [submitMessage, setSubmitMessage] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    // Create animated stars in the form background
    const [stars, setStars] = useState<{x: number, y: number, size: number, opacity: number, delay: number}[]>([]);

    useEffect(() => {
        if (formRef.current) {
            const formRect = formRef.current.getBoundingClientRect();
            const width = formRect.width;
            const height = formRect.height;

            const newStars = Array.from({ length: 30 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                delay: Math.random() * 5
            }));

            setStars(newStars);
        }
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            serviceInterest: '',
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                setSubmitMessage('Message envoyé aux étoiles ! Nous vous contacterons bientôt.');
                reset(); // Clear the form
            } else {
                setSubmitSuccess(false);
                setSubmitMessage(result.message || 'Une erreur cosmique est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            setSubmitSuccess(false);
            setSubmitMessage('Une perturbation astrale est survenue. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="cosmic-card p-8 relative overflow-hidden"
        >
            {/* Animated stars in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-secondary"
                        style={{
                            left: `${star.x}px`,
                            top: `${star.y}px`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animation: `twinkle ${3 + star.delay}s infinite ${star.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Form response message */}
            <AnimatePresence>
                {submitSuccess !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-4 rounded-md mb-6 ${
                            submitSuccess
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-accent-1/10 text-accent-1 border border-accent-1/20'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            {submitSuccess ? (
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2 2 5-5" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M15 9l-6 6M9 9l6 6" />
                                </svg>
                            )}
                            <p>{submitMessage}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Name field */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-1">
                    Nom <span className="text-secondary">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    placeholder="Votre nom"
                    className={`cosmic-input w-full ${
                        errors.name ? 'border-accent-1' : ''
                    }`}
                />
                {errors.name && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-accent-1"
                    >
                        {errors.name.message}
                    </motion.p>
                )}
            </div>

            {/* Email field */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-1">
                    Email <span className="text-secondary">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="votre.email@exemple.com"
                    className={`cosmic-input w-full ${
                        errors.email ? 'border-accent-1' : ''
                    }`}
                />
                {errors.email && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-accent-1"
                    >
                        {errors.email.message}
                    </motion.p>
                )}
            </div>

            {/* Two columns layout for company and phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Company field */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-light mb-1">
                        Entreprise
                    </label>
                    <input
                        id="company"
                        type="text"
                        {...register('company')}
                        placeholder="Votre entreprise"
                        className="cosmic-input w-full"
                    />
                </div>

                {/* Phone field */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-light mb-1">
                        Téléphone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="+33 1 23 45 67 89"
                        className="cosmic-input w-full"
                    />
                </div>
            </div>

            {/* Service interest field */}
            <div className="mb-6">
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-light mb-1">
                    Service d&apos;intérêt <span className="text-secondary">*</span>
                </label>
                <select
                    id="serviceInterest"
                    {...register('serviceInterest')}
                    className={`cosmic-select w-full ${
                        errors.serviceInterest ? 'border-accent-1' : ''
                    }`}
                >
                    <option value="">Sélectionnez un service</option>
                    <option value="branding">Branding</option>
                    <option value="site-creation">Création de site web</option>
                    <option value="ai-strategy">Stratégie IA</option>
                    <option value="automation">Automatisation</option>
                </select>
                {errors.serviceInterest && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-accent-1"
                    >
                        {errors.serviceInterest.message}
                    </motion.p>
                )}
            </div>

            {/* Message field */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-1">
                    Message <span className="text-secondary">*</span>
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    placeholder="Partagez-nous vos besoins et aspirations..."
                    className={`cosmic-input w-full resize-none ${
                        errors.message ? 'border-accent-1' : ''
                    }`}
                />
                {errors.message && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-accent-1"
                    >
                        {errors.message.message}
                    </motion.p>
                )}
            </div>

            {/* Submit button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cosmic-btn w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi vers les étoiles...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            Envoyer le message
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}