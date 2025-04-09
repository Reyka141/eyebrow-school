import cn from 'classnames';
import { FC } from 'react';
import styles from './Link.module.scss';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
    href: string;
}
export const Link: FC<LinkProps> = (props) => {
    const { className, children, href, ...rest } = props;
    return (
        <a className={cn(styles.Link, className)} href={href} {...rest}>
            {children}
        </a>
    );
};
