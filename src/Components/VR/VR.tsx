import React,{useEffect} from 'react';

// import styles from './VR.module.scss';

export interface VRProps {
  prop?: string;
}

export function VR({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  
  useEffect(() => {
  setActiveSection("360° VR TOUR");
}, []);

  return <>
  <div>
    VR Page
  </div>
  </>;
}
