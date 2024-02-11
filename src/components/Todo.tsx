import { Label } from './Label'
import { NoItem } from './NoItem'
import { Item } from './Item'
import styles from './Todo.module.css'

export interface TodoProps {
  id: number
  content: string
  isDone: boolean
}

interface TodoComponentProps {
  toDos: TodoProps[]
  onFinish: (id: number) => void
  onDelete: (id: number) => void
}

export function Todo({ toDos, onFinish, onDelete }: TodoComponentProps) {
  const creadtedCount = toDos.length
  const finishedCount = toDos.filter(todo => todo.isDone).length

  return (
    <div className={styles.todo}>
      <header className={styles.header}>
        <Label 
          title="Tarefas criadas"
          count={creadtedCount}
          color="blue"
        />

        <Label 
          title="Concluidas"
          count={finishedCount}
          total={creadtedCount}
          color="purple"
        />
      </header>

      <main className={styles.main}>
        {toDos.length === 0 && <NoItem />}
        {toDos.map(({id, ...todo}: TodoProps) => 
          <Item 
            key={id} 
            item={{ id, ...todo }}
            onChange={(id) => onFinish(id)}
            onClick={(id) => onDelete(id)}
          />
        )}
      </main>
    </div>
  )
}