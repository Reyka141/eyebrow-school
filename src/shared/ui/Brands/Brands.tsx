import antuOne from '@/shared/assets/brands/antuOne.png';
import elan from '@/shared/assets/brands/elan.png';
import lash from '@/shared/assets/brands/lashBrow.png';
import levis from '@/shared/assets/brands/LeviSsime.png';
import sculptor from '@/shared/assets/brands/sculptor.png';
import thua from '@/shared/assets/brands/thuya.png';
import unknown from '@/shared/assets/brands/unknow.png';
import zola from '@/shared/assets/brands/zola.png';
import cn from 'classnames';
import { FC } from 'react';
import { Text, TextSize, TextWeight } from '../Text/Text';
import styles from './Brands.module.scss';

interface BrandsProps {
    className?: string;
}
export const Brands: FC<BrandsProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.Brands, className)}>
            <div className={styles.title}>
                <Text size={TextSize.SM_LG} weight={TextWeight.BOLD} text="Бренди" />
                <Text size={TextSize.XS_LG} weight={TextWeight.REGULAR} text="з якими будемо працювати" />
            </div>
            <div className={styles.list}>
                <img width={36} src={zola} alt="zola" />
                <img width={28} src={elan} alt="elan" />
                <img width={63} src={levis} alt="levis" />
                <img width={24} src={lash} alt="lash" />
                <img width={36} src={sculptor} alt="sculptor" />
                <img width={41} src={antuOne} alt="antuOne" />
                <img width={80} src={unknown} alt="unknown" />
                <img width={41} src={thua} alt="thua" />
            </div>
        </div>
    );
};
