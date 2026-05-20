
// src/hooks/usePopup.js
import { useState } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true)
    document.body.classList.add('noScroll')
  }
  const handleClose = () => {
    setIsOpen(false)
    document.body.classList.remove('noScroll')
  }

  return {isOpen, handleOpen, handleClose}
}
export default usePopup