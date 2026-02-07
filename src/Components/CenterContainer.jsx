import Header from './Header'
import styles from './centerContainer.module.scss'
import TodoBody from './TodoBody/TodoBody'
import { useRef, useEffect, useState } from 'react'

import useCenterContainerHeight from '../store/centerContainerHeight'
import useInnerWidth from '../store/innerWidthStore'

const CenterContainer = () => {
    const innerWidthStore = useInnerWidth()
    const [width, setWidth] = useState(window.innerWidth)

    const centerContainerHeight = useCenterContainerHeight()
    const centerContainerRef = useRef(null)
    const [height, setHeight] = useState(null)

    const [flagLineBreak, setFlagLineBreak] = useState(window.innerWidth < 450 ? true : false)

    useEffect(() => {
        // Обработчик ресайза для ширины и переноса
        const handleResize = () => {
            window.innerWidth < 421 ? setFlagLineBreak(true) : setFlagLineBreak(false)
            setWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Пустой массив - вешается один раз

    useEffect(() => {
        // ------ Передаем ширину экрана в store START ----------
        innerWidthStore.setInnerWidth(width)
        // ------ Передаем ширину экрана в store END ----------

        // ------ Передаем высоту CenterContainer в store START ----------
        function updateHeight() {
            setHeight(centerContainerRef.current.offsetHeight) // Получаем высоту .centerContainer
        }

        updateHeight()

        const resizeObserver = new ResizeObserver(updateHeight) // При изменении размеров запускается функция внутри ResizeObserver
        resizeObserver.observe(centerContainerRef.current)      // Начинаем отслеживать элемент .centerContainer с помощью ref

        if(height !== null) {centerContainerHeight.newHeight(height)} // Передаем в store "centerContainerHeight" новую высоту

        return () => {
            resizeObserver.disconnect()
        }
        // ------ Передаем высоту CenterContainer в store END ----------
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[height, width]) // Линтер тупит - store-объекты стабильны, их НЕ надо добавлять

    return (
        <div ref={centerContainerRef} className={styles.centerContainer}>
            <h1 className={styles.title}>Список дел {flagLineBreak && <br/>}на сегодня !</h1>
            <Header />
            <TodoBody />
        </div>
    )
}

export default CenterContainer