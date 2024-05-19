// 套件
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

interface Page2Prop {}

interface RootState {
    controlReducer: any
    a: any
}

const Page2: React.FC<Page2Prop> = ({}) => {
    const isLoading = useSelector((state: RootState) => state.controlReducer.isLoading)

    const [state1, setState1] = useState<string>('')

    function handleChange(value: string) {
        setState1(value)
    }

    return (
        <div>
            Page2
            <div>測試：redux 【{isLoading.toString()}】</div>
            <br />
            <div>測試 useState，state1: {state1} </div>
            <div>
                測試 setState1: <input type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    )
}
export default Page2
