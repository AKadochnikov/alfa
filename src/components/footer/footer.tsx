function Footer ():JSX.Element {
  return (
    <footer className="footer-content padding-container">
      <ul className="list-link">
        <li className="link-item">
          <a className="footer-link" href={'https://github.com/AKadochnikov'}>
            <span className="visually-hidden">Мой ГитХаб.</span>
            <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </li>
        <li className="link-item">
          <a className="footer-link" href={'https://digital.alfabank.ru/'}>
            <span className="visually-hidden">Сделано для Альфа-Digital.</span>
            <svg width="279" height="62" viewBox="0 0 279 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path className={'alfa-icon'} fillRule="evenodd" clipRule="evenodd" d="M68.4226 10.7627C68.4226 7.92463 69.6291 6.6338 72.4109 6.6338H80.9114V0.288086H70.2594C64.1196 0.288086 60.8661 3.43483 60.8661 9.369V14.9937H54.0969V21.7011H60.8661V42.2372H68.4226V21.7011H75.8212V14.9937H68.4226V10.7627Z"/>
                <path className={'alfa-icon'} fillRule="evenodd" clipRule="evenodd" d="M42.6042 42.2369H50.1606V0.288574H42.6042V42.2369Z"/>
                <path className={'alfa-icon'} fillRule="evenodd" clipRule="evenodd" d="M20.5103 1.25888C25.058 1.25888 26.3853 3.92601 27.5379 7.30306L39.4473 42.2346H30.6344L27.9581 33.9309H12.0121L9.12656 42.2346H0.839287L13.337 7.30306C14.5492 3.91572 15.9618 1.25888 20.5103 1.25888ZM20.0898 10.3595L14.4249 26.9163H25.6509L20.2999 10.3595H20.0898Z"/>
                <path className={'alfa-icon'} fillRule="evenodd" clipRule="evenodd" d="M95.7621 31.4007C95.7621 34.754 93.3482 36.6629 90.2002 36.6629C87.4716 36.6629 85.3193 35.6831 85.3193 32.7936C85.3193 29.9555 87.6809 29.491 89.7277 29.491H95.7621V31.4007ZM103.32 33.3089V23.5568C103.32 16.4363 98.7015 11.9473 90.935 11.9473C82.9061 11.9473 78.6562 16.6943 78.2892 21.6479H85.9502C86.2126 20.5644 87.3669 18.7061 90.935 18.7061C93.8737 18.7061 95.7628 20.0476 95.7628 23.5568H88.2587C81.5426 23.5568 77.5535 27.0138 77.5535 32.7928C77.5535 38.8299 81.9161 42.958 88.2064 42.958C92.8185 42.958 95.3797 40.8148 96.4977 39.1908C97.495 41.1512 99.6988 42.2346 102.585 42.2346H105.209V35.528C103.844 35.528 103.32 34.9091 103.32 33.3089Z"/>
              </g>
              <g>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M135.981 8.50385C140.025 8.50385 143.368 9.6997 145.646 11.9608C147.951 14.2481 149.169 17.6338 149.169 21.7524C149.169 29.924 144.115 35.001 135.981 35.001H129.591V8.50385H135.981ZM157.131 21.7521C157.131 15.5765 155.14 10.4654 151.376 6.97205C147.688 3.55147 142.385 1.74384 136.039 1.74384H121.804V41.7603H136.039C149.049 41.7603 157.131 34.0937 157.131 21.7521Z"/>
              </g>
              <g>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M161.113 41.7613H168.559V13.2048H161.113V41.7613Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M160.999 8.78376H168.731V1.74316H160.999V8.78376Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M192.766 27.426C192.766 32.3827 190.091 35.8437 186.261 35.8437C182.303 35.8437 179.643 32.4603 179.643 27.426C179.643 22.3584 182.303 18.9529 186.261 18.9529C190.091 18.9529 192.766 22.4368 192.766 27.426ZM192.651 17.2857C191.969 16.1223 189.474 12.5862 184.377 12.5862C177.138 12.5862 172.083 18.6889 172.083 27.4264C172.083 31.8426 173.329 35.6066 175.684 38.3117C177.905 40.8625 180.992 42.2673 184.377 42.2673C187.835 42.2673 190.786 40.5736 192.708 37.4942V40.9092C192.708 45.4679 190.317 47.9783 185.975 47.9783C183.48 47.9783 181.494 47.1338 180.374 45.5898L180.355 45.5621H172.356L172.37 45.6388C172.747 47.8097 176.055 54.0082 185.975 54.0082C194.914 54.0082 200.04 49.2129 200.04 40.853V13.2035H192.651V17.2857Z" fill="black"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M205.107 41.7613H212.553V13.2048H205.107V41.7613Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M204.994 8.78376H212.726V1.74316H204.994V8.78376Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M229.236 1.7439H221.79V13.2039H214.648V19.4586H221.79V32.594C221.79 38.6769 225.079 41.7612 231.569 41.7612H238.834V35.2255H234.083C230.505 35.2255 229.236 33.9782 229.236 30.4595V19.4586H238.834V13.2039H229.236V1.7439Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M259.556 29.0085V31.921C259.556 34.7654 256.784 36.911 253.108 36.911C249.661 36.911 247.519 35.2577 247.519 32.5945C247.519 30.3492 249.267 29.0085 252.194 29.0085H259.556ZM266.716 33.4933V24.0555C266.716 16.8036 261.779 12.4736 253.508 12.4736C249.488 12.4736 246.13 13.6671 243.799 15.9267C241.933 17.7335 241.088 19.8569 240.93 21.1264L240.92 21.2H248.296L248.313 21.1596C248.514 20.6879 249.709 18.335 253.623 18.335C257.226 18.335 259.555 20.5146 259.555 23.8869V23.9336H251.052C247.684 23.9336 244.911 24.7234 243.032 26.2169C241.133 27.7261 240.129 29.9706 240.129 32.7066C240.129 35.5487 241.221 37.9768 243.288 39.7298C245.331 41.4631 248.135 42.3795 251.395 42.3795C256.607 42.3795 259.108 39.5446 260.001 38.196C260.817 40.5703 263.126 41.93 266.363 41.93H268.715V36.0188L268.656 36.0125C267.278 35.8502 266.716 35.1205 266.716 33.4933Z"/>
                <path className={'digital-icon'} fillRule="evenodd" clipRule="evenodd" d="M271.554 41.7611H279V0.283691H271.554V41.7611Z"/>
              </g>
              <g>
                <rect className={'alfa-icon'} y="54" width="40" height="8"/>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
