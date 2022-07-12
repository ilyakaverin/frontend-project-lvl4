import { useRef, useEffect, useContext } from "react";
import cn from "classnames";
import style from "./style.module.scss";
import Button from '../Button/Button';
import { useSelector, useDispatch } from "react-redux";
import { chatStore, updateModalState } from "../../store/chatSlice";


const Modal = () => {
  const ModalRef = useRef();
  const { isModalOpened: isOpen } = useSelector(chatStore);
  const reduxDispatch = useDispatch();
  console.log(isOpen)


  useEffect(() => {
    document.querySelector("body").style.overflow = isOpen ? "hidden" : null
  }, [isOpen])
  const handleCloseModal = () => {
    reduxDispatch(updateModalState(false))
  }
  const handleClickRoot = (event) => {
    if (!ModalRef.current.contains(event.target)) {
        reduxDispatch(updateModalState(false))
    }
  }
  return (
    <div
      className={cn(style.root, { [style.open]: isOpen })}
      onClick={handleClickRoot}
    >
      <div ref={ModalRef} className={style.modal}>
        <Button name="Закрыть" onClick={handleCloseModal} />
      </div>
    </div>
  )
}

export default Modal