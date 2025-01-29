export function showToast({ message = '', type = 'success', duration = 2000 }) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${getToastClass(type)}`;
    toast.innerHTML = `
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        closeToast(toast);
    }, duration);
}

export function closeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        toast.remove();
    }, 500);
}

function getToastClass (type) {
    switch (type) {
        case 'error':
            return 'toast-error';
        case 'warning':
            return 'toast-warning';
        default:
            return 'toast-success';
    }
}
