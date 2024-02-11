import styles from './NoItem.module.css'
import clipboard from './../assets/clipboard.svg'

export function NoItem() {
  return (
    <div className={styles.noItem}>
      <img src={clipboard}/>
      <div className={styles.text}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}