
import sideImgArr from './sideContainer_IMG'
import styles from './sideContainer.module.scss'
import useCenterContainerHeight from '../store/centerContainerHeight'

const SideContainer = () => {
    const centerContainerHeight = useCenterContainerHeight()

    let height = centerContainerHeight.initHeight > 0 ? Math.floor(centerContainerHeight.initHeight * 0.01) : 2 // Этим параметром регулирую количество итераций для добавления в 
                                                                                                                // массив картинок и строк

    let randomItem = [] // Массив, куда в случайном порядке, добавляются картинки и строки с уравнениями
    for(let i = 0; i < height; i++) {
        const randNumber1 = Math.floor(Math.random() * 100) // Случайное число
        const randNumber2 = Math.floor(Math.random() * 100) // Случайное число

        const addition = `${randNumber1} + ${randNumber2} = ${randNumber1 + randNumber2}`     // Операция сложение со случайными числами
        const subtraction = `${randNumber1} - ${randNumber2} = ${randNumber1 - randNumber2}`  // Операция вычитания случайных чисел

        const randomFlag = Math.round(Math.random()) === 0 ? false : true // Флаг, с помощью которого добавляется или картинка из массива или строка со сложением и вычитанием
        const additionOrSubtractionFlag = Math.round(Math.random()) === 0 ? false : true // Флаг, с помощью которого добавляется либо операция сложения, либо операция вычитания

        if(!randomItem.length) {
            randomItem.push(sideImgArr[Math.floor(Math.random()  * sideImgArr.length)])
        }

        randomFlag // Тут добавляем картинки и строки в массив
            ? randomItem.push(sideImgArr[Math.floor(Math.random()  * sideImgArr.length)])
            : randomItem.push(additionOrSubtractionFlag ? addition : subtraction)

        if(typeof randomItem[randomItem.length - 1] === 'string') { // Условие, чтобы строки не шли друг за другом, а чередовались с картинками
            randomItem.push(sideImgArr[Math.floor(Math.random()  * sideImgArr.length)])
        }
    }

    return (
        <div className={styles.container}>
            {randomItem.map((e, i) => {
                function flexJustifyContent() { // Позиция картинки или теста с уравнением в контейнере по горизонтали (лево, центр, право)
                    switch (Math.floor(Math.random() * 3)) {
                    case 0:
                        return 'start'
                    case 1:
                        return 'center'
                    case 2:
                        return 'end'
                    default: 
                        return 'start'
                    }
                }

                // ------------------------- Текст(сложение и вычитание) START -------------------------------------------------
                const rotateText = Math.floor(Math.random() * 15 + 5)
                const minusOrPlus = Math.round(Math.random()) === 0 ? '-' : ''

                if(typeof e === 'string') {
                    return (
                        <div className={styles.text_container} key={i} style={{justifyContent: flexJustifyContent()}}>
                            <div className={styles.text_block}>
                                <p className={styles.text} style={{ transform: `rotate(${minusOrPlus}${rotateText}deg)` }}>{e}</p>
                            </div>
                        </div>
                    )
                }
                // ------------------------- Текст(сложение и вычитание) END -------------------------------------------------



                // ------------------------------------ Изображение SVG START -------------------------------------------------
                function positionTopBottomAndScale() { // Позиция картинки в контейнере по вертикали (верх, низ) + добавил рандомный размер картинки
                    const scale = `${Math.floor(Math.random() * 30 + 50)}%`
                    return Math.round(Math.random()) ? {top: '0px', height: scale} : {bottom: '0px',height: scale}
                }

                return  (
                    <div className={styles.img_container} key={i} style={{height: `${e.heightIMG}`, justifyContent: flexJustifyContent()}}>  
                        <svg className={styles.img} viewBox={e.viewBoxSVG} alt={e.name} role='img' style={positionTopBottomAndScale()}>
                            <use href={`${e.link}${e.id}`}/>
                        </svg>
                    </div>
                )
                // ------------------------------------ Изображение SVG END -------------------------------------------------
            })}
        </div>
    )
}


export default SideContainer