import styles from './Dialog.module.scss';

export const Dialog = ({ children, onClose }) => {
  return (
    <div onClick={onClose} className={`${onClose ? styles.modal : styles.modalHide}`}>
      <div className={styles.modalContent}>
        <span className={styles.close}>&times;</span>
        {children}
      </div>
    </div>
  ); //Darle estilos para que sea modal
};

//<Dialog><span></span></Dialog> El children es el span
