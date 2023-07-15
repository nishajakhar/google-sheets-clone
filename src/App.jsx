import './App.css'
import TitleBar from './components/TitleBar'
import FormatBar from './components/FormatBar'
import FormulaBar from './components/FormulaBar'
import SheetBar from './components/SheetBar'
import MainArea from './components/MainArea'

function App() {
    return (
        <>
            <TitleBar />
            <FormatBar />
            <FormulaBar />
            <MainArea />
            <SheetBar />
        </>
    )
}

export default App
