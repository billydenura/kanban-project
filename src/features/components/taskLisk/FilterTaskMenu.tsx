import type { CSSProperties } from '../../../types'
import type { Dispatch, SetStateAction } from 'react'

interface filterTaskMenuProps {
  setFilterType: Dispatch<SetStateAction<string>>
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
}

const FilterTaskMenu = ({ setFilterType, setIsFilterOpen }: filterTaskMenuProps) => {
  return (
    <div style={styles.menu}>
      <div
        style={styles.menuItem}
        onClick={() => {
          setFilterType('completed')
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">check</span>
        Completed Task
      </div>
      <div
        style={styles.menuItem}
        onClick={() => {
          setFilterType('uncompleted')
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">lists</span>Uncompleted Task
      </div>
      <div
        style={styles.menuItem}
        onClick={() => {
          setFilterType('all')
          setIsFilterOpen(false)
        }}
      >
        <span className="material-icons">clear_all</span>All Task
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '-10px',
    left: '23%',
    zIndex: 10,
  },
  menuItem: {
    display: 'flex',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    top: '0px',
    right: '2px',
    cursor: 'pointer',
  },
}

export default FilterTaskMenu
