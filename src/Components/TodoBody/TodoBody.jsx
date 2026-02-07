import Todo from './Todo'
import TodoEmptyLine from './TodoEmptyLine'
import TodoFooter from './TodoFooter'
import lineVertical from './lineVertical'

import styles from './todoBody.module.scss'

import useToDoStore from '../../store/store'
import useInnerWidth from '../../store/innerWidthStore'


const TodoBody = () => {
    const taskTodo = useToDoStore()
    const innerWidth = useInnerWidth()
 
    const test = () => {
        switch (true) {
            case innerWidth.initInnerWidth <= 420:
                return 14
            case innerWidth.initInnerWidth <= 480:
                return 15
            case innerWidth.initInnerWidth <= 680:
                return 11
            case innerWidth.initInnerWidth <= 980:
                return 6
            case innerWidth.initInnerWidth <= 1000:
                return 4
            case innerWidth.initInnerWidth <= 1380:
                return 4
            case innerWidth.initInnerWidth <= 1920:
                return 3
            case innerWidth.initInnerWidth <= 2715:
                return 7
            default:
                return 3
        }
    }

    const todoEmptyLineLength =  test() - (taskTodo.arrayToDoList.length) < 0 ? 0 : test() - (taskTodo.arrayToDoList.length) // Количество отрисовываемых пустых линий
    const allItemsLength = todoEmptyLineLength > 0 ? todoEmptyLineLength + taskTodo.arrayToDoList.length : taskTodo.arrayToDoList.length // Количество отрисованных Todo + пустые линии

    let a = taskTodo.arrayToDoList.length % 8 // Индекс для отрисовки вертикальных линий в пустых строках
    const todoEmptyLine = [...new Array(todoEmptyLineLength)].map((_, i) =>  { // Пустые линии
        if(a > 7) {a = 0}
        return <TodoEmptyLine key={i} lineVertical={lineVertical[a++]} />    // Отправляем в props изображение линии под нужным индексом.
                                                                                                                    // Получаемы индекс таким способом:
                                                                                                                    // "Из количества всех отрендереных айтемов вычитаем количество только 
                                                                                                                    // пустых линий и прибавляем индекс из map(_, i)"
    })


    let b = 0 // Индекс для отрисовки вертикальных линий в каждом новом todo. Необходимо обнулять индекс каждые 8 итераций, чтобы вертикальная линия была бесконечной
    return (
        <div className={styles.todo_body}>
            {taskTodo.arrayToDoList.map((task, i) => {
                if(b > 7) {b = 0}
                return <Todo key={i} task={task} lineVertical={lineVertical[b++]}/>
            })}
            {todoEmptyLine}
            <TodoFooter allItemsLength={allItemsLength}/>
        </div>
    )
}

export default TodoBody