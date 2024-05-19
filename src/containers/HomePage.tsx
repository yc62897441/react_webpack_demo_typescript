// 套件
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { dispatchLOADING } from '../actions'

interface HomePageProps {
    testProp1: string
    testProp2: string | number
}

interface RootState {
    controlReducer: any
}

const HomePage: React.FC<HomePageProps> = ({ testProp1, testProp2 }) => {
    const isLoading = useSelector((state: RootState) => state.controlReducer.isLoading)
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(dispatchLOADING(!isLoading))
    }

    return (
        <div>
            HomePage
            <section>
                <div>
                    testProp1: {testProp1}, typeof: {typeof testProp1}
                </div>
                <div>
                    testProp2: {testProp2}, typeof: {typeof testProp2}
                </div>
            </section>
            <div>
                測試：redux 【{isLoading.toString()}】<button onClick={handleClick}>改變 redux</button>
            </div>
        </div>
    )
}

export default HomePage
