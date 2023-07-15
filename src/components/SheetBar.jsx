import React from 'react'
import MaterialIcon from 'material-icons-react'

const SheetBar = () => {
    return (
        <section className="sheetbar__container h-10 bg-gray-200">
            <div className="sheetbar__container__action-items  py-2 px-8 h-full  flex items-center gap-x-2">
                <div className="border-2 border-gray-100 rounded-full px-1 bg-white flex items-center py-1">
                    <MaterialIcon icon="add_circle_outline" className="" />
                </div>
                <div
                    className=" px-2 underline active bg-white py-1"
                    style={{ textDecorationThickness: '3px' }}
                >
                    Sheet 1
                </div>
                <div
                    className="px-2 underline text-gray-800 py-1"
                    style={{ textDecorationThickness: '3px' }}
                >
                    Sheet 2
                </div>
            </div>
        </section>
    )
}

export default SheetBar
