
import CenterContainer from './CenterContainer'
import styles from './main.module.scss'
import SideContainer from './SideContainer'
import useCenterContainerHeight from '../store/centerContainerHeight'


const Main = () => {
    const centerContainerHeight = useCenterContainerHeight()

    return (
        <div className={styles.main_container} style={{height: `${centerContainerHeight.initHeight}px`}}>
            <div className={styles.wrap_left_sideContainer}>
                <SideContainer />
            </div>

            <div className={styles.wrap_centerContainer}>
                <CenterContainer />
            </div>

            <div className={styles.wrap_right_sideContainer}>
                <SideContainer />
            </div>
        </div>
    )
}


export default Main