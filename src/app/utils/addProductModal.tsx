'use client'

import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import { ProductContext } from "../contexts/ProductsContext";
import { ProductsContextTypes } from "../types/ProductsContextTypes";
import useCrud from "../hooks/useCrud";

export default function AddProductModal({ size, setSize }: any) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { addPopularProducts } = useCrud();

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

  const addProduct = () => {
    addPopularProducts();
    setImageSrc('');
    setProductTitle('');
    setProductDesc('');
    setAmountNew('0');
    setAmountOld('0');
    onClose();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button className="bg-[#964C9A] py-1 lg:py-2 text-white text-xs mr-8 lg:mr-0 lg:text-sm" key={size} onPress={() => handleOpen(size)}>+ Add New</Button>
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add New Product</ModalHeader>
              <ModalBody>
                <label className="text-xs lg:text-sm">Add Product Title:</label>
                <Input value={productTitle} onChange={(e) => setProductTitle(e.target.value)} type="string" size="sm" />
                <label className="text-xs lg:text-sm">Add Product Description:</label>
                <Textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} type="string" size="sm" />
                <label className="text-xs lg:text-sm">Add Old Amount</label>
                <input value={amountOld} onChange={(e) => setAmountOld(e.target.value)} type="number" />
                <label className="text-xs lg:text-sm">Add New Amount</label>
                <input value={amountNew} onChange={(e) => setAmountNew(e.target.value)} type="number" />
                <label className="text-xs lg:text-sm">Add Url Link to Image <span className="text-[8px] underline"><strong>select from <a href="https://picsum.photos/" target='_blank'>https://picsum.photos/</a></strong></span></label>
                <Input value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} type="url" size="sm" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#964C9A] text-white" color="primary" onPress={addProduct}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
