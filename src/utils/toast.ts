export const showToast = (message: string, position: string, isSucceed: boolean) => {
    const main = document.getElementById('main')

    if (main) {
        if (document.getElementById('toast') !== null) {
            document.getElementById('toast')?.remove()
        }
        main.insertAdjacentHTML('beforeend', `
            <div
                id='toast'
                class='${position === 'top' ? 'toast-top-keyframe top-[-80px]' : 'toast-bottom-keyframe bottom-[-80px]'} flex-center fixed left-[50%] z-50 translate-x-[-50%] rounded-[8px] bg-[#F5F6F7] p-5 text-sm md:text-xl shadow-toast duration-150 ease-linear'
            >
                ${isSucceed ? `
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle cx='10' cy='10' r='10' fill='#62C652' />
                        <path
                            d='M8.94311 14C8.84461 14.0002 8.74704 13.9804 8.656 13.9417C8.56496 13.9031 8.48224 13.8463 8.41259 13.7747L5.22946 10.5005C5.15774 10.4293 5.10052 10.3442 5.06113 10.2501C5.02174 10.156 5.00097 10.0547 5.00003 9.95228C4.9991 9.84982 5.01801 9.7482 5.05568 9.65333C5.09334 9.55847 5.149 9.47227 5.21941 9.39977C5.28981 9.32726 5.37355 9.2699 5.46575 9.23104C5.55794 9.19217 5.65673 9.17257 5.75637 9.17339C5.856 9.17421 5.95448 9.19542 6.04606 9.2358C6.13764 9.27617 6.22048 9.3349 6.28975 9.40855L8.94236 12.1364L13.7186 7.22626C13.8593 7.08146 14.0501 7.00007 14.2492 7C14.4483 6.99993 14.6392 7.08118 14.78 7.22587C14.9208 7.37057 14.9999 7.56685 15 7.77156C15.0001 7.97626 14.9211 8.1726 14.7804 8.3174L9.47364 13.7747C9.40399 13.8463 9.32127 13.9031 9.23023 13.9417C9.13918 13.9804 9.04161 14.0002 8.94311 14Z'
                            fill='white'
                        />
                    </svg>
                `
                :
                `
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="10" cy="10" r="10" fill="#EF4444"/>
                        <path 
                            d="M13.7501 5L9.99956 8.75L6.24989 5L5 6.25L8.74967 10L5 13.75L6.24989 15L9.99956 11.25L13.7501 15L15 13.75L11.2503 10L15 6.25L13.7501 5Z" 
                            fill="white"
                        />
                    </svg>

                `}
                <span class='whitespace-nowrap pl-2'> ${message}</span>
            </div>
        `);
    }
    const toast = document.getElementById('toast')
    if (toast) {
        if (position === 'top') {
            toast.style.top = '40px'
        } else {
            toast.style.bottom = '40px'
        }
        setTimeout(() => {
            toast.remove()
        }, 2000)
    }
}