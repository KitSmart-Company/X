import React, { FC, ReactElement } from "react";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";


interface ModalProps { 
  title?: String;
  children: React.ReactNode;
  visible: any;
  onClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  boxShadow: 24,
  borderRadius: "15px",
};

const ModalItem: FC<ModalProps> = ({ title, children, onClose, visible }): ReactElement | null => {
  if(!visible) {
    return null;
  }
  return (
    <Modal
      open={visible}
      style={{
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 550 }}>
        <CloseOutlinedIcon
            onClick={onClose}
            className="cursor-pointer absolute hover:bg-[#191C1B] active:hover:bg-[#303231] rounded-full right-0 top-0 m-2"
            style={{color: 'white'}}
          />
        {children}  
      </Box>
    </Modal>
  );
};


export default ModalItem;

// 3 Работа с основным компонетом Home.tsx