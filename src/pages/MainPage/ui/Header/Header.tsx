import headerBg from '@/shared/assets/backgrounds/header_bg.png';
import { Text, TextColor, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
interface HeaderProps {
    className?: string;
}
export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;
    return (
        <header className={cn(styles.Header, className)}>
            <img src={headerBg} className={styles.HeaderBg} alt="header_image" />
            <div className={styles.HeaderContainer}>
                <Text
                    size={TextSize.MD_LG_SECONDARY}
                    color={TextColor.WHITE}
                    weight={TextWeight.LIGHT}
                    text="Valeria Saiko"
                    shadow
                />
                <Text
                    size={TextSize.XS_LG}
                    color={TextColor.WHITE}
                    weight={TextWeight.LIGHT}
                    text="brow master"
                    shadow
                />
            </div>
        </header>
    );
};
