'use client';

import { useEffect, useRef } from 'react';

const StarsBackground = () => {
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createStars = () => {
            if (!starsRef.current) return;

            const starContainer = starsRef.current;
            starContainer.innerHTML = '';

            // Get the window dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Create a random number of stars (between 100-150)
            const starCount = Math.floor(Math.random() * 50) + 100;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');

                // Random position
                star.style.left = `${Math.random() * viewportWidth}px`;
                star.style.top = `${Math.random() * viewportHeight}px`;

                // Random size and intensity (brightness)
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;

                // Random animation properties
                star.style.setProperty('--duration', `${Math.random() * 3 + 3}s`);
                star.style.setProperty('--delay', `${Math.random() * 5}s`);
                star.style.setProperty('--intensity', `${Math.random() * 0.5 + 0.3}`);
                star.style.setProperty('--scale', `${Math.random() + 1}`);

                // Add a subtle color variation
                const hue = Math.random() > 0.9 ? '45deg' : '0deg'; // Occasional gold star
                const saturation = Math.random() * 30;
                star.style.backgroundColor = `hsl(${hue}, ${saturation}%, 95%)`;

                // Append the star to the container
                starContainer.appendChild(star);
            }

            // Create a few shooting stars occasionally
            if (Math.random() > 0.7) {
                setTimeout(() => {
                    createShootingStar(starContainer);
                }, Math.random() * 10000);
            }
        };

        const createShootingStar = (container: HTMLDivElement) => {
            const shootingStar = document.createElement('div');
            shootingStar.style.position = 'absolute';
            shootingStar.style.width = '2px';
            shootingStar.style.height = '2px';
            shootingStar.style.backgroundColor = 'white';
            shootingStar.style.borderRadius = '50%';

            // Random start position (top of screen, random x)
            const startX = Math.random() * window.innerWidth;
            const startY = -10;

            // Animation
            shootingStar.style.left = `${startX}px`;
            shootingStar.style.top = `${startY}px`;
            shootingStar.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.7)';
            shootingStar.style.opacity = '0';

            // Add to container
            container.appendChild(shootingStar);

            // Animate
            const angle = Math.random() * 30 + 30; // 30-60 degrees
            const distance = Math.random() * 300 + 300; // 300-600px

            const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
            const endY = startY + Math.sin(angle * Math.PI / 180) * distance;

            shootingStar.animate([
                { left: `${startX}px`, top: `${startY}px`, opacity: 0 },
                { left: `${startX + 10}px`, top: `${startY + 10}px`, opacity: 1, offset: 0.1 },
                { left: `${endX}px`, top: `${endY}px`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 1000, // 1-2 seconds
                easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            }).onfinish = () => {
                shootingStar.remove();
                // Maybe create another one
                if (Math.random() > 0.5) {
                    setTimeout(() => {
                        createShootingStar(container);
                    }, Math.random() * 15000); // 0-15 seconds
                }
            };
        };

        // Create the initial stars
        createStars();

        // Recreate stars on window resize (debounced)
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                createStars();
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <div ref={starsRef} className="stars"></div>;
};

export default StarsBackground;