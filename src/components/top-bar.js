export const top_bar = function () {
    const header_container = document.createElement('section');
    header_container.setAttribute('id', 'topbar');
    header_container.innerHTML = `
            <div class="container text-right">
                <i class="icofont-phone"></i> +1 5589 55488 55
                <i class="icofont-clock-time icofont-rotate-180"></i> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
    
        `
    return header_container;
}