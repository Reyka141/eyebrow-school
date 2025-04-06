import ArrowDown from '@/shared/assets/icons/arrow_down.svg?react';
import ArrowUp from '@/shared/assets/icons/arrow_up.svg?react';
import { HeaderText } from '@/shared/ui/HeaderText/HeaderText';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import cn from 'classnames';
import { FC } from 'react';
import styles from './TrainingDescriptionSection.module.scss';

interface TrainingDescriptionSectionProps {
    className?: string;
}
export const TrainingDescriptionSection: FC<TrainingDescriptionSectionProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.TrainingDescriptionSection, className)}>
            <HeaderText
                title="Як проходить навчання "
                subtitle="Вам буде надоно доступ до закритого телеграм каналу з відео уроками та теориєю "
            />
            <div className={styles.content_container}>
                <div className={styles.content}>
                    <div className={styles.content_item_container_1}>
                        <div className={styles.content_item_1}>
                            <div className={styles.content_item_number}>1</div>
                            <div className={styles.content_item_text}>
                                <Text
                                    size={TextSize.XXS}
                                    weight={TextWeight.EXTRALIGHT}
                                    text="Обираєте навчання яке хочете освоїти"
                                />
                            </div>
                            <ArrowDown className={styles.content_item_arrow_1} />
                        </div>
                    </div>
                    <div className={styles.content_item_container_2}>
                        <div className={styles.content_item}>
                            <div className={styles.content_item_number}>2</div>
                            <div className={styles.content_item_text_2}>
                                <Text size={TextSize.XXS} weight={TextWeight.EXTRALIGHT} text="Сплачуєте онлайн" />
                            </div>
                        </div>
                        <ArrowUp className={styles.content_item_arrow_2} />
                    </div>
                    <div className={styles.content_item_container_3}>
                        <div className={styles.content_item}>
                            <div className={styles.content_item_number}>3</div>
                            <div className={styles.content_item_text_3}>
                                <Text
                                    size={TextSize.XXS}
                                    weight={TextWeight.EXTRALIGHT}
                                    text="Отримуєте доступ до свого курсу 24/7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
