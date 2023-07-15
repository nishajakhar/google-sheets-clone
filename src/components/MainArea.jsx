import React from 'react'
import '../styles/MainArea.scss'
const MainArea = () => {
    const rowNumbering = []
    const columnNumbering = []
    let cells = ''

    const getRowsNumbering = () => {
        for (let i = 0; i < 100; i++) {
            rowNumbering.push(
                <div
                    key={i}
                    className="w-7 border-gray-300  text-center border-solid h-6 border-b-2 border-r-2"
                >
                    {i + 1}
                </div>
            )
        }
        return rowNumbering
    }

    const getColumnNumbering = () => {
        for (let i = 0; i < 26; i++) {
            columnNumbering.push(
                <div
                    key={i}
                    className="w-20 border-gray-300 border-solid text-center h-7 border-b-2 border-r-2"
                >
                    {String.fromCharCode(i + 65)}
                </div>
            )
        }
        return columnNumbering
    }

    return (
        <section className="mainarea__container flex overflow-scroll relative">
            <div className=" sticky top-0 left-0">
                <div className="mainarea__dummy-cell w-7 h-7 bg-gray-300">
                    &nbsp;
                </div>
                <div className="mainarea__row-numbering ">
                    {getRowsNumbering()}
                </div>
            </div>
            <div className="mainarea__content relative">
                <div className="mainarea__content__heading flex sticky top-0 left-0">
                    {getColumnNumbering()}
                </div>
                <div className="mainarea__content__cells">
                    {rowNumbering.map((row, index) => {
                        return (
                            <div key={index} className="flex">
                                {columnNumbering.map((col, idx) => {
                                    return (
                                        <div
                                            key={index + idx}
                                            className="w-20 border-gray-200 h-6 border-solid border-b-2 border-r-2"
                                        >
                                            &nbsp;
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MainArea
