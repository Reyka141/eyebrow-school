import human from '@/shared/assets/images/human.png';
import { Link } from '@/shared/ui/Link/Link';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './GreetingSection.module.scss';

interface GreetingSectionProps {
    className?: string;
}

const greetingText = [
    'Привіт! Я майстер який вже 3 роки в сфері брів,   навчила понад 250 учнів онлайн та очно, сама на постійній основі підвищую свою кваліфікацію.',
    'Це навчання допоможе тобі розібратись в усіх процесах створені брів та виведе твої роботи на новий рівень.',
    {
        id: 'special-text',
        content: (
            <>
                Я покажу тобі <span className={styles.highlight}>не шаблонний підхід</span> до брів, який буде радувати
                кожного твого клієнта
            </>
        ),
    },
];

export const GreetingSection: FC<GreetingSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.GreetingSection, className)}>
            <div className={styles.instagram_container}>
                <img src={human} className={styles.image} alt="human" />
                <Link href="/">@valeriiasaiko</Link>
            </div>
            <div className={styles.text_container}>
                {greetingText.map((item) => {
                    if (typeof item === 'string') {
                        return <Text key={item} size={TextSize.TINY} weight={TextWeight.REGULAR} text={item} />;
                    }

                    return (
                        <div key={item.id} className={cn(styles.text_item)}>
                            <p className={cn(styles.custom_text)}>{item.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
