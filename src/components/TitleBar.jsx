import React from 'react'

const TitleBar = () => {
    return (
        <section className="titlebar__container px-8 h-10 bg-teal-500">
            <div className="titlebar__action-items flex items-end h-full text-white">
                <div className="titlebar__action-items__item active text-teal-500 bg-gray-200 px-2">
                    Home
                </div>
                <div className="titlebar__action-items__item px-2">File</div>
                <div className="titlebar__action-items__item px-2">Insert</div>
                <div className="titlebar__action-items__item px-2">Layout</div>
                <div className="titlebar__action-items__item px-2">Help</div>
            </div>
        </section>
    )
}

export default TitleBar
