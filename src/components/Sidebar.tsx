import { useEffect } from 'react';
import styles  from '../styles/components/SideBar.module.css'
import Switch from  'react-switch'

export function SideBar() {

  return(
    <div className={styles.sideBarConatainer}>
      <img src="/icons/logo.svg" alt="logo"/>
    </div>
  )
}