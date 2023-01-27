export function RainIcon({ className }: { className: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'
             stroke='currentColor'
             strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
             className={className}>
            <path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'></path>
            <path d='M16 14v6'></path>
            <path d='M8 14v6'></path>
            <path d='M12 16v6'></path>
        </svg>
    );
}
