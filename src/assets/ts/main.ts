// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event: Event) => {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) {
                event.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }

            // Get form data
            const formData = {
                name: (document.getElementById('name') as HTMLInputElement).value,
                email: (document.getElementById('email') as HTMLInputElement).value,
                message: (document.getElementById('message') as HTMLTextAreaElement).value
            };

            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        });
    }
});
