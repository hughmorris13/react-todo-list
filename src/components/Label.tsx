import styles from './Label.module.css'

interface LabelProps {
  title: string
  count: number
  total?: number
  color?: 'blue' | 'purple'
}

export function Label({ title, count, total, color = 'purple' }: LabelProps) {
  const getLabelColor = color === 'purple' 
    ? styles.labelWithPrupleColor 
    : styles.labelWithBlueColor
  
  return (
    <div>
      <span className={getLabelColor}>{title}</span>
      {
        total && total > 0 
          ? <span className={styles.counter}>{count} de {total}</span>
          : <span className={styles.counter}>{count}</span>
      }
    </div>
  )
}