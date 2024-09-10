// File for utility functions

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        console.log('All cookies:', cookies);  // Log all cookies to inspect them
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            console.log('Checking cookie:', cookie);  // Log each cookie to check the name
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    console.log('Cookie Value:', cookieValue);  // Log the final value of the cookie
    return cookieValue;
}


