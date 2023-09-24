import React from 'react'
import '../assets/css/style.css'
import HeaderDressingRoom from './HeaderDressingRoom'
import NavDressingRoom from './NavDressingRoom'
import TryOnClothes from './TryOnClothes'


export default function DressingRoom() {
    return (
        <div className='container-fluid'>
            <HeaderDressingRoom />
            <div className='row'>
                <div className='col-8'>
                    <NavDressingRoom />
                </div>
                <div className='col-4'>
                    <TryOnClothes />
                </div>
            </div>
        </div>
    )
}
