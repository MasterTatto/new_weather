import styles from './styles.module.scss'

export const Container = ({className, children}) => {
    return <div className={[styles.container, className ?? ''].join(' ')}>{children}</div>
}