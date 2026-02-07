
import line_horizontal from '../img/line_horizontal.png'
import line_horizontal_1300px from '../img/line_horizontal_1300px.png'
import line_horizontal_1000px from '../img/line_horizontal_1000px.png'
import line_horizontal_800px from '../img/line_horizontal_800px.png'
import line_horizontal_600px from '../img/line_horizontal_600px.png'
import line_horizontal_400px from '../img/line_horizontal_400px.png'


import useInnerWidth from '../store/innerWidthStore'


function LineHorizontalFilePath() { // Возвращает путь к картинке горизонтальной линии в зависимости от разрешения
    const innerWidthStore = useInnerWidth()
    switch (true) {
    case innerWidthStore.initInnerWidth < 400:
        return line_horizontal_400px
    case innerWidthStore.initInnerWidth < 600:
        return line_horizontal_600px
    case innerWidthStore.initInnerWidth < 800:
        return line_horizontal_800px
    case innerWidthStore.initInnerWidth < 1000:
        return line_horizontal_1000px
    case innerWidthStore.initInnerWidth < 1300:
        return line_horizontal_1300px
    default:
        return line_horizontal
    }
}

export default LineHorizontalFilePath
