import styles from './Item.module.css'
import check from '../assets/check.svg'
import { TodoProps } from './Todo'
import { Trash } from '@phosphor-icons/react'

interface ItemProps {
  item: TodoProps
  onChange: (id: number) => void
  onClick: (id: number) => void
}

export function Item({ item, onChange, onClick }: ItemProps) {
  const isItemFinished = item.isDone 
  const getContentClass = isItemFinished 
          ? styles.contentWithDecoration 
          : styles.content

  return (
    <div className={styles.item}>
      <header className={styles.header}>
        <label>
          <input type="checkbox" onChange={() => onChange(item.id)}/>
          <span>
            <img src={check}/>
          </span>
        </label>
      </header>
      <main className={getContentClass}>{item.content}</main>
      <footer className={styles.footer}>
        <button onClick={() => onClick(item.id)}>
          <Trash />
        </button>
      </footer>
    </div>
  )
}