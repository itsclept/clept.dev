import './LinkItem.scss';

type LinkItemProps = {
    href: string;
    children: React.ReactNode;
  };
  
  export default function LinkItem({ href, children }: LinkItemProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link-item"
      >
        {children}
      </a>
    );
  }