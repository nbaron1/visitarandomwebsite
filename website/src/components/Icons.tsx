export function ChevronRight({ scale }: { scale: number }) {
  return (
    <svg
      width='17'
      height='33'
      viewBox='0 0 17 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `scale(${scale})` }}
    >
      <path
        d='M16.4736 16.5L0.368359 32.0885L0.368359 0.911543L16.4736 16.5Z'
        fill='#C580FC'
      />
    </svg>
  );
}

export function ExternalLink() {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.81903 1.5L7.5 1.5C7.91421 1.5 8.25 1.83579 8.25 2.25C8.25 2.66421 7.91421 3 7.5 3H5.85C5.20757 3 4.77085 3.00058 4.43328 3.02816C4.10447 3.05503 3.93631 3.10372 3.81901 3.16349C3.53677 3.3073 3.3073 3.53677 3.16349 3.81901C3.10372 3.93631 3.05503 4.10447 3.02816 4.43328C3.00058 4.77085 3 5.20757 3 5.85V12.15C3 12.7924 3.00058 13.2292 3.02816 13.5667C3.05503 13.8955 3.10372 14.0637 3.16349 14.181C3.3073 14.4632 3.53677 14.6927 3.81902 14.8365C3.93631 14.8963 4.10447 14.945 4.43328 14.9718C4.77085 14.9994 5.20757 15 5.85 15H12.15C12.7924 15 13.2292 14.9994 13.5667 14.9718C13.8955 14.945 14.0637 14.8963 14.181 14.8365C14.4632 14.6927 14.6927 14.4632 14.8365 14.181C14.8963 14.0637 14.945 13.8955 14.9718 13.5667C14.9994 13.2292 15 12.7924 15 12.15V10.5C15 10.0858 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 10.0858 16.5 10.5V12.181C16.5 12.7847 16.5 13.283 16.4669 13.6889C16.4324 14.1104 16.3585 14.498 16.173 14.862C15.8854 15.4265 15.4265 15.8854 14.862 16.173C14.498 16.3585 14.1104 16.4324 13.6889 16.4669C13.283 16.5 12.7847 16.5 12.181 16.5H5.81901C5.21529 16.5 4.71702 16.5 4.31113 16.4669C3.88956 16.4324 3.50203 16.3585 3.13803 16.173C2.57354 15.8854 2.1146 15.4265 1.82698 14.862C1.64151 14.498 1.56759 14.1104 1.53315 13.6889C1.49998 13.283 1.49999 12.7847 1.5 12.181V5.81903C1.49999 5.2153 1.49998 4.71703 1.53315 4.31113C1.56759 3.88956 1.64151 3.50203 1.82698 3.13803C2.1146 2.57354 2.57354 2.1146 3.13803 1.82698C3.50203 1.64151 3.88956 1.56759 4.31113 1.53315C4.71703 1.49998 5.2153 1.49999 5.81903 1.5ZM10.5 2.25001C10.5 1.83579 10.8358 1.50001 11.25 1.50001H15.75C16.1642 1.50001 16.5 1.83579 16.5 2.25001L16.5 6.75001C16.5 7.16422 16.1642 7.50001 15.75 7.50001C15.3358 7.50001 15 7.16422 15 6.75001L15 4.06067L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L13.9393 3.00001H11.25C10.8358 3.00001 10.5 2.66422 10.5 2.25001Z'
        fill='#FAFAF9'
      />
    </svg>
  );
}

export function Reroll() {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.53033 1.71967C6.82322 2.01256 6.82322 2.48744 6.53033 2.78033L4.81066 4.5H10.5C13.3995 4.5 15.75 6.85051 15.75 9.75C15.75 12.6495 13.3995 15 10.5 15H3C2.58579 15 2.25 14.6642 2.25 14.25C2.25 13.8358 2.58579 13.5 3 13.5H10.5C12.5711 13.5 14.25 11.8211 14.25 9.75C14.25 7.67893 12.5711 6 10.5 6H4.81066L6.53033 7.71967C6.82322 8.01256 6.82322 8.48744 6.53033 8.78033C6.23744 9.07322 5.76256 9.07322 5.46967 8.78033L2.46967 5.78033C2.17678 5.48744 2.17678 5.01256 2.46967 4.71967L5.46967 1.71967C5.76256 1.42678 6.23744 1.42678 6.53033 1.71967Z'
        fill='#78716C'
      />
    </svg>
  );
}

export function CloseChevron() {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z'
        fill='#A8A29E'
      />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 2C8.265 2 2 8.265 2 16C2 22.195 6.0075 27.4275 11.5725 29.2825C12.2725 29.405 12.535 28.985 12.535 28.6175C12.535 28.285 12.5175 27.1825 12.5175 26.01C9 26.6575 8.09 25.1525 7.81 24.365C7.6525 23.9625 6.97 22.72 6.375 22.3875C5.885 22.125 5.185 21.4775 6.3575 21.46C7.46 21.4425 8.2475 22.475 8.51 22.895C9.77 25.0125 11.7825 24.4175 12.5875 24.05C12.71 23.14 13.0775 22.5275 13.48 22.1775C10.365 21.8275 7.11 20.62 7.11 15.265C7.11 13.7425 7.6525 12.4825 8.545 11.5025C8.405 11.1525 7.915 9.7175 8.685 7.7925C8.685 7.7925 9.8575 7.425 12.535 9.2275C13.655 8.9125 14.845 8.755 16.035 8.755C17.225 8.755 18.415 8.9125 19.535 9.2275C22.2125 7.4075 23.385 7.7925 23.385 7.7925C24.155 9.7175 23.665 11.1525 23.525 11.5025C24.4175 12.4825 24.96 13.725 24.96 15.265C24.96 20.6375 21.6875 21.8275 18.5725 22.1775C19.08 22.615 19.5175 23.455 19.5175 24.7675C19.5175 26.64 19.5 28.145 19.5 28.6175C19.5 28.985 19.7625 29.4225 20.4625 29.2825C23.2418 28.3443 25.6568 26.5581 27.3677 24.1753C29.0786 21.7926 29.9993 18.9334 30 16C30 8.265 23.735 2 16 2Z'
        fill='#78716C'
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
        fill='#A8A29E'
      />
    </svg>
  );
}