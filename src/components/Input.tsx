import { FormEventHandler, InputHTMLAttributes } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onFormSubmit: FormEventHandler<HTMLFormElement>
  buttonDisabled?: boolean
}

export function Input({ onFormSubmit, buttonDisabled = false, ...props}: InputProps) {
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Adicione uma nova tarefa"
        {...props}
      />
      <button 
        type="submit" 
        className={styles.button} 
        disabled={buttonDisabled}
      >
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}