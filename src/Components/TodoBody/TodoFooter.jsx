import styles from './todoFooter.module.scss'
import lineVertical from './lineVertical'
import doodle_1 from '../../img/doodle_1.svg'
import doodle_2 from '../../img/doodle_2.svg'

import lineHorizontalFilePath from '../../Components/lineHorizontal'

const TodoFooter = ({ allItemsLength }) => {

    let indexPrevious, indexLast

    if((allItemsLength) <= 6) {
        indexPrevious = allItemsLength
        indexLast =  allItemsLength + 1
    }

    if((allItemsLength) > 6) {
        indexLast = (allItemsLength - 1) - (8 * (Math.floor((allItemsLength - 1) / 8))) + 2

        if(indexLast === 8) {
            indexLast = 0
        }

        if(indexLast === 9) {
            indexLast = 1
        }

        indexPrevious = indexLast - 1

        if(indexPrevious < 0) {
            indexPrevious = 7
        }
    }

    return (
        <div className={styles.row_wrapper}>
            <div className={styles.row_1}>
                <div className={styles.check_box_container}></div>
                <img id={indexPrevious} className={styles.line_vertical} src={lineVertical[indexPrevious].link} alt={lineVertical[indexPrevious].name} />

                <img className={styles.line_horizontal_bottom} src={lineHorizontalFilePath()} alt="line_horizontal"/>

                <svg className={styles.doodle_1} viewBox="0 0 133 160">
                    <use href={`${doodle_1}#doodle_1_ID`} />
                </svg>

                <svg className={styles.doodle_2} viewBox="0 0 90 121">
                    <use href={`${doodle_2}#doodle_2_ID`} />
                </svg>
            </div>

            <div className={styles.row_2}>
                    <div className={styles.check_box_container}></div>
                    <img id={indexLast} className={styles.line_vertical} src={lineVertical[indexLast].link} alt={lineVertical[indexLast].name} />
        
                    <img className={styles.line_horizontal_bottom} src={lineHorizontalFilePath()} alt="line_horizontal"/>
            </div>
        </div>
    )
}

export default TodoFooter