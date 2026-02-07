import styles from './todoEmptyLine.module.scss'

import lineHorizontalFilePath from '../../Components/lineHorizontal'


const TodoEmptyLine = ({ lineVertical }) => {   
    return (
        <div className={styles.row_wrapper}>
            <div className={styles.row}>
                <div className={styles.check_box_container}></div>
                <img id={lineVertical.id} className={styles.line_vertical} src={lineVertical.link} alt={lineVertical.name} />
            </div>
            
            <img className={styles.line_horizontal_bottom} src={lineHorizontalFilePath()} alt="line_horizontal"/>
        </div>
    )
}

export default TodoEmptyLine