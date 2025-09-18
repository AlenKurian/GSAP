// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

        // Hero section animations
        gsap.from('.hero-title', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.from('.hero-subtitle', {
            duration: 1.5,
            y: 30,
            opacity: 0,
            ease: "power3.out",
            delay: 0.6
        });

        gsap.from('.hero-button', {
            duration: 1,
            scale: 0.5,
            opacity: 0,
            ease: "back.out(1.7)",
            delay: 0.9
        });

        // Collection title animation
        gsap.from('.collection-word-1', {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: "back.out(1.7)",
            scrollTrigger: {
            trigger: '.collection-title',
            start: "top 80%",
            toggleActions: "play none none none"
            }
        });

            gsap.from('.collection-word-2', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "back.out(1.7)",
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.collection-title',
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from('.collection-word-3', {
                duration: 1,
                x: 100,
                opacity: 0,
                ease: "back.out(1.7)",
                delay: 0.4,
                scrollTrigger: {
                    trigger: '.collection-title',
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onComplete: function() {
                    gsap.to('.collection-title span', {
                        duration: 0.5,
                        color: '#3b82f6',
                        yoyo: true,
                        repeat: 1
                    });
                }
            });

         // Animate phone sections with different effects
            gsap.utils.toArray('.phone-section').forEach((section, index) => {
                const img = section.querySelector('.phone-img');
                const details = section.querySelector('.phone-details');
                
                if (index === 0) {
                    // First phone - slide in from sides
                    gsap.fromTo(img, 
                        { x: -100, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            onComplete: () => {
                                gsap.to(section.querySelector('.phone-frame'), {
                                    duration: 1,
                                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                                    borderColor: 'rgba(59, 130, 246, 0.8)',
                                    yoyo: true,
                                    repeat: 1
                                });
                            }
                        }
                    );
                    
                    gsap.fromTo(details, 
                        { x: 100, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            onComplete: () => {
                                gsap.to(section.querySelector('.phone-frame'), {
                                    duration: 1,
                                    boxShadow: '0 0 30px rgba(192, 132, 252, 0.5)',
                                    borderColor: 'rgba(192, 132, 252, 0.8)',
                                    yoyo: true,
                                    repeat: 1
                                });
                            }
                        }
                    );
                } 
                else if (index === 1) {
                    // Second phone - flip animation
                    gsap.fromTo(img, 
                        { rotationY: 90, opacity: 0 },
                        {
                            rotationY: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            onComplete: () => {
                                gsap.to(section.querySelector('.phone-frame'), {
                                    duration: 1,
                                    boxShadow: '0 0 30px rgba(74, 222, 128, 0.5)',
                                    borderColor: 'rgba(74, 222, 128, 0.8)',
                                    yoyo: true,
                                    repeat: 1
                                });
                            }
                        }
                    );
                    
                    gsap.fromTo(details, 
                        { y: 100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "elastic.out(1, 0.5)",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            onComplete: () => {
                                gsap.to(section.querySelector('.phone-frame'), {
                                    duration: 1,
                                    boxShadow: '0 0 30px rgba(249, 168, 212, 0.5)',
                                    borderColor: 'rgba(249, 168, 212, 0.8)',
                                    yoyo: true,
                                    repeat: 1
                                });
                            }
                        }
                    );
                }
                else if (index === 2) {
                    // Third phone - scale up
                    gsap.fromTo(img, 
                        { scale: 0.5, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            },
                            onComplete: () => {
                                gsap.to(section.querySelector('.phone-frame'), {
                                    duration: 1,
                                    boxShadow: '0 0 30px rgba(253, 230, 138, 0.5)',
                                    borderColor: 'rgba(253, 230, 138, 0.8)',
                                    yoyo: true,
                                    repeat: 1
                                });
                            }
                        }
                    );
                    
                    gsap.fromTo(details, 
                        { scale: 0.8, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }
                else if (index === 3) {
                    // Fourth phone - rotate and fade
                    gsap.fromTo(img, 
                        { rotation: -15, opacity: 0 },
                        {
                            rotation: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: "elastic.out(1, 0.5)",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                    
                    gsap.fromTo(details, 
                        { rotation: 15, opacity: 0 },
                        {
                            rotation: 0,
                            opacity: 1,
                            duration: 1.2,
                            ease: "elastic.out(1, 0.5)",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }
                else if (index === 4) {
                    // Fifth phone - bounce in
                    gsap.fromTo(img, 
                        { y: -200, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "bounce.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                    
                    gsap.fromTo(details, 
                        { y: 200, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            ease: "bounce.out",
                            delay: 0.3,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                }
            });    
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
            
        feather.replace();
});  





