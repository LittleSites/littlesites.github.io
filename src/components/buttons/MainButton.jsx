import styles from '@/styles/components/buttons/MainButton.module.css'

export default function MainButton({ 
  children, 
  onClick = ((e) => e.preventDefault()), 
  className = '',
  type="button"
}) {
  return (
    <button
      className={`${styles.MainButton} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
