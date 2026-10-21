import { playStoreUrl } from '../links';
import { useLang } from '../i18n';

interface GooglePlayButtonProps {
  /** Where on the page the button sits; sent to Play as utm_medium. */
  placement: string;
  variant?: 'dark' | 'light';
}

export function PlayLogo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M3.6 2.2 13.4 12l-9.8 9.8c-.4-.2-.6-.6-.6-1.1V3.3c0-.5.2-.9.6-1.1Z" fill="#00C3FF" />
      <path d="M3.6 2.2c.4-.2.9-.2 1.4.1l11.6 6.6-3.2 3.1Z" fill="#00E676" />
      <path d="m16.6 8.9 3.6 2c.9.5.9 1.7 0 2.2l-3.6 2-3.2-3.1Z" fill="#FFC400" />
      <path d="m13.4 12 3.2 3.1L5 21.7c-.5.3-1 .3-1.4.1Z" fill="#FF3A44" />
    </svg>
  );
}

export function GooglePlayButton({ placement, variant = 'dark' }: GooglePlayButtonProps) {
  const { t } = useLang();
  return (
    <a
      className={`play-btn play-btn-${variant}`}
      href={playStoreUrl(placement)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.playSmall} Google Play`}
    >
      <PlayLogo />
      <span className="play-btn-text">
        <small>{t.playSmall}</small>
        <strong>{t.playBig}</strong>
      </span>
    </a>
  );
}
