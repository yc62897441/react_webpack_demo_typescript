// 套件
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { dispatchLOADING } from '../actions'

function HomePage() {
    const isLoading = useSelector((state) => state.controlReducer.isLoading)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(dispatchLOADING(!isLoading))
    }

    return (
        <div>
            HomePage
            <div>
                測試：redux 【{isLoading.toString()}】<button onClick={handleClick}>改變 redux</button>
            </div>
        </div>
    )
}

export default HomePage
