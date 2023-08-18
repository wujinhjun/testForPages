import styles from '@/styles/Loader.module.scss'

export const LoaderRipple = () => {
  return (
    <div className={styles['lds-ripple']}>
      <div></div>
      <div></div>
    </div>
  )
}
