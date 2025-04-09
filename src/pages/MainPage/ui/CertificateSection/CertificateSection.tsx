import certificate from '@/shared/assets/images/certificate.png';
import { HeaderText, HeaderTextTheme } from '@/shared/ui/HeaderText/HeaderText';
import cn from 'classnames';
import { FC } from 'react';
import styles from './CertificateSection.module.scss';
interface CertificateSectionProps {
    className?: string;
}
export const CertificateSection: FC<CertificateSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.CertificateSection, className)}>
            <HeaderText
                theme={HeaderTextTheme.TERTIARY}
                title="Сертифікат"
                subtitle="Про проходження курсу, підтверджнення отриманих знань"
            />
            <div className={styles.certificate_container}>
                <img src={certificate} className={styles.image} alt="certificate" />
            </div>
        </div>
    );
};
