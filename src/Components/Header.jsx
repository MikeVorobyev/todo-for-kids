//430px

import { useState } from 'react'

import styles from './header.module.scss'

import sticker from '../img/sticker.png'
import btn_img from '../img/button_250px.png'
import pushpin_left from '../img/pushpin_left.svg'
import pushpin_right from '../img/pushpin_right.svg'
import pushpin_alt from '../img/pushpin_alt.png'
import input_img from '../img/input_img.png'

import useToDoStore from '../../src/store/store'
import useInnerWidth from '../store/innerWidthStore'


import lineHorizontalFilePath from '../Components/lineHorizontal'

const Header = () => {
    const innerWidthStore = useInnerWidth()

    function pushpinLeft() { // Левая канцелярская кнопка
        if(innerWidthStore.initInnerWidth < 581) {
            return <img className={styles.pushpin_alt_left} src={pushpin_alt} alt="pushpin_alt" />
        } else { return (
                            <svg className={styles.pushpin_left} viewBox="0 0 75 75" role='img'>
                                <use href={`${pushpin_left}#pushpin_left_ID`} />
                            </svg>
                        )
                }
    }

    function pushpinRight() { // Правая канцелярская кнопка
        if(innerWidthStore.initInnerWidth < 581) {
            return <img className={styles.pushpin_alt_right} src={pushpin_alt} alt="pushpin_alt" />
        } else { return (
                            <svg className={styles.pushpin_right} viewBox="0 0 75 75" role='img'>
                                <use href={`${pushpin_right}#pushpin_right_ID`} />
                            </svg>
                        )
                }
    }

    const time = new Date()
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    const [hoursState , setHoursState] = useState(hours)
    const [minutesState, setMinutesState] = useState(minutes)

    const [inputToDo, setInputToDo] = useState('')

    setInterval(function() {
        const time = new Date()
        const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
        const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
        setHoursState(hours)
        setMinutesState(minutes)
    }, 1000)


    // ---------------------------- useToDoStore START ----------------------
    const addTask = useToDoStore()
    const randomId = Math.floor(Math.random() * 10000) + (Math.floor(Math.random() * 10000)) / (Math.floor(Math.random() * 10000))
    const [id , setId] = useState(randomId)

    function add() {
        addTask.addTask({
            id: id, 
            text: inputToDo,
            completed: false,
            stampRotate: '',
            stampHorizontal: ''
        })
        setId(randomId)
        setInputToDo('')
    }

    function handleEnter(event) {
        if(inputToDo && event.key === 'Enter') {
            add()
        }
    }
    // ---------------------------- useToDoStore END -----------------------
 
    return(
        <div className={styles.header}>
            <img  className={`${styles.line_horizontal_top} ${styles.line_horizontal}`} src={lineHorizontalFilePath()} alt="line_horizontal" />

            {pushpinLeft()}

            <div className={styles.row}>
                <div className={styles.row_left_container}>
                    <img className={styles.sticker} src={sticker} alt="sticker" />
                    <span className={styles.time}>{hoursState}<span className={styles.time_two_dots}>:</span>{minutesState}</span>
                </div>

                <div className={styles.row_center_container}>
                    <input 
                        className={styles.input_to_do} 
                        type="text" placeholder='Что будем делать сегодня?' 
                        value={inputToDo} 
                        onChange={(e) => setInputToDo(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                    <img className={styles.input_img_border} src={input_img} alt="input_img" />
                </div>

                <div className={styles.row_right_container}>
                    <button className={styles.btn}>
                        <img className={styles.btn_img} src={btn_img} alt="Кнопка" />
                        <p className={styles.text} onClick={() => inputToDo && add()}><span className={styles.letter_d}>Д</span>обавить</p>
                    </button>
                </div>
            </div>

            {pushpinRight()}

            <img  className={`${styles.line_horizontal_bottom} ${styles.line_horizontal}`} src={lineHorizontalFilePath()} alt="line_horizontal" />
        </div>
    )
}


export default Header