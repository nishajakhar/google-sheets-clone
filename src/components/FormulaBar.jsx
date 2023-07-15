import React from 'react'

const FormulaBar = () => {
    return (
        <section className="formulabar__container px-8 h-8 bg-gray-200">
            <div className="formulabar__action-items flex items-center h-full gap-x-2">
                <div className="formulabar__action-items__item ">
                    <input type="text" readOnly className="w-20" />
                </div>
                <div className="formulabar__action-items__item">
                    <img src="/fx.png" width="20" height="20" />
                </div>
                <div className="formulabar__action-items__item flex-1">
                    <input type="text" className="w-full" />
                </div>
            </div>
        </section>
    )
}

export default FormulaBar
