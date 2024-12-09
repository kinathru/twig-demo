module.exports = {
    title: "Header",
    status: "ready",
    context: {
        active_page: "home"
    },
    variants: [
        {
            name: "about",
            label: "About Active",
            context: {
                active_page: "about"
            }
        },
        {
            name: "contact",
            label: "Contact Active",
            context: {
                active_page: "contact"
            }
        }
    ]
};
