import {RadioButton} from "../../../shared/ui/RadioButton/RadioButton";
import React from "react";
import styles from './AddExpenseForm.module.scss'
import {Food} from "../../../assets/SVG/Food";
import {Transport} from "../../../assets/SVG/Transport";
import {Housing} from "../../../assets/SVG/Housing";
import {Entertainment} from "../../../assets/SVG/Entertainment";
import {Education} from "../../../assets/SVG/Education";
import {Other} from "../../../assets/SVG/Other";

export const RadioGroup = ({category, setCategory}) => {
    return(

        <fieldset className={styles.fieldset}>
            <div className={styles.fieldsetWrapper}>
                <legend className={styles.legend}>Категория</legend>
                <div className={styles.radios}>
                    <RadioButton
                        label="Еда"
                        icon={<Food/>}
                        value="food"
                        selectedValue={category}
                        onChange={setCategory}
                    />
                    <RadioButton
                        label="Транспорт"
                        icon={<Transport/>}
                        value="transport"
                        selectedValue={category}
                        onChange={setCategory}
                    />
                    <RadioButton
                        label="Жилье"
                        value="housing"
                        icon={<Housing/>}
                        selectedValue={category}
                        onChange={setCategory}
                    />
                    <RadioButton
                        label="Развлечения"
                        value="entertainment"
                        icon={<Entertainment/>}
                        selectedValue={category}
                        onChange={setCategory}
                    />
                    <RadioButton
                        label="Образование"
                        icon={<Education/>}
                        value="education"
                        selectedValue={category}
                        onChange={setCategory}
                    />
                    <RadioButton
                        label="Другое"
                        value="Other"
                        icon={<Other/>}
                        selectedValue={category}
                        onChange={setCategory}
                    />
                </div>
            </div>
        </fieldset>
    )
}