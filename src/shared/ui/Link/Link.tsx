import cn from 'classnames';
import { FC } from 'react';
import styles from './Link.module.scss';

interface LinkProps {
    className?: string;
    children: React.ReactNode;
    href: string;
}
export const Link:FC<LinkProps> = (props) => {
    const { className, children, href } = props;
    return (
        <a className={cn(styles.Link, className)} href={href}>
            {children}
        </a>
    );
};
