import { useMemo, useState } from 'react'
import { FaRegPlusSquare } from 'react-icons/fa';

import { Modal } from '../Modal/Modal.component';

import styles from './Table.module.scss';

type GenericItemType = { id: string } & { [key in string]: string | number | boolean | string[] }

type TableComponentProps<T extends GenericItemType> = {
  items: T[];
  header: string;
  schema: Array<{ key: string, label: string }>
  addItemModalPayload: {
    header: string;
    renderContent: () => JSX.Element;
  }
  editItemModalPayload: {
    header: string;
    renderContent: (itemId: string, onClose: () => void) => JSX.Element;
  }
}

export function Table<T extends GenericItemType>({
  header,
  items,
  schema,
  addItemModalPayload,
  editItemModalPayload
}: TableComponentProps<T>)  {
  const [modalToShow, setModalToShow] = useState<'add' | 'edit' | null>()
  const [itemToEdit, setItemToEdit] = useState<string | null>(null)

  const renderAddItemForm = () => {
    return (
      <Modal header={addItemModalPayload.header} onClose={() => setModalToShow(null)}>
        {addItemModalPayload.renderContent()}
      </Modal>
    )
  }

  const renderEditItemForm = (itemToEdit: string | null) => {
    if (!itemToEdit) {
      return null;
    }

    return (
      <Modal header={editItemModalPayload.header} onClose={() => setModalToShow(null)}>
        {editItemModalPayload.renderContent(itemToEdit, () => setModalToShow(null))}
      </Modal>
    )
  }

  const renderModal = () => {
    switch (modalToShow) {
      case 'add':
        return renderAddItemForm()
      case 'edit':
        return renderEditItemForm(itemToEdit)
      default:
        return null
    }
  }

  const handleEditTransaction = (itemId: string) => {
    setItemToEdit(itemId)
    setModalToShow('edit')
  }

  const Headers = useMemo(() => {
    return schema.map((item) => {
      return (
        <th key={`${item.label}`} className={styles.tableHeader}>{item.label}</th>
      )
    })
  }, [schema])

  const Rows = useMemo(() => {
    const renderRows = (item: T) => {
      return schema.map((schemaItem) => {
        return (
          <td key={`${item.id}}-${schemaItem.key}`} className={styles.tableData}>{item[schemaItem.key].toString()}</td>
        )
      })
    }

    return items.map((item) => (
      <tr
        key={`${item.id}`}
        className={styles.tableDataRow}
        onClick={() => handleEditTransaction(item.id)}
      >
        {renderRows(item)}
      </tr>
    ))
  }, [schema, items])

  const headerColumnsCount = schema.length || 0;

  return (
    <div className={styles.tableWrapper}>
      {renderModal()}
      <div className={styles.tableInnerWrapper}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th colSpan={headerColumnsCount} className={styles.tableTitleRow}>
                <div className={styles.tableHeaderContent}>
                  <div>{header}</div>
                  <div onClick={() => setModalToShow('add')} className={styles.addButton}>
                    <FaRegPlusSquare />
                  </div>
                </div>
              </th>
            </tr>
            <tr className={styles.tableHeaderRow}>
             {Headers}
            </tr>
            {Rows}
          </tbody>
        </table>
      </div>
    </div>
  )
}
