'use client'

import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import { ProductContext } from "../contexts/ProductsContext";
import { ProductsContextTypes } from "../types/ProductsContextTypes";
import useCrud from "../hooks/useCrud";

export default function EditProductModal({ size, setSize }: any) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { editPopularProducts } = useCrud();

  const { 
          imageSrc, 
          setImageSrc, 
          productTitle, 
          setProductTitle, 
          productDesc, 
          setProductDesc,
          amountOld, 
          setAmountOld,
          amountNew,
          setAmountNew
        } = useContext<ProductsContextTypes>(ProductContext)

  const handleOpen = (size: React.SetStateAction<string>) => {
    setSize(size)
    onOpen();
  }

  const editProduct = () => {
    editPopularProducts();
    onClose();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button key={size} onPress={() => handleOpen(size)}>Edit</Button>
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
              <ModalBody>
                <label>Add Product Title:</label>
                <Input value={productTitle} onChange={(e) => setProductTitle(e.target.value)} type="string" size="sm" />
                <label>Add Product Description:</label>
                <Textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} type="string" size="sm" />
                <label>Add Old Amount</label>
                <Input value={amountOld} onChange={(e) => setAmountOld(e.target.value)} type="number" size="sm" />
                <label>Add New Amount</label>
                <Input value={amountNew} onChange={(e) => setAmountNew(e.target.value)} type="number" size="sm" />
                <label>Add Url Link to Image <span className="text-[8px] underline"><strong>select from <a href="https://picsum.photos/" target='_blank'>https://picsum.photos/</a></strong></span></label>
                <Input value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} type="url" size="sm" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#964C9A] text-white" color="primary" onPress={editProduct}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
