import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import useCrud from "../hooks/useCrud";
import EditProductModal from "./editProductModal";

export default function OptionsDropdown() {
    const [size, setSize] = React.useState<string>('sm');
    const { editPopularProducts, deletePopularProducts } = useCrud();

  return (
    <Dropdown>
      <DropdownTrigger>
          ...
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit">
            <EditProductModal size={size} setSize={setSize} />
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onClick={deletePopularProducts}>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
