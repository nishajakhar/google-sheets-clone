import React from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'

const FormatBar = () => {
    return (
        <section className="formatbar__container px-8 h-8 bg-gray-200">
            <div className="formatbar__action-items flex h-full items-center gap-2 text-sm">
                <MaterialIcon icon="content_copy" size="tiny" />

                <MaterialIcon icon="content_cut" size="tiny" />

                <MaterialIcon icon="content_paste" size="tiny" />

                <select className="bg-white p-0.5 outline-none">
                    <option>Monospace</option>
                    <option>Monospace</option>
                    <option>Monospace</option>
                    <option>Monospace</option>
                    <option>Monospace</option>
                </select>

                <select className="bg-white p-0.5 outline-none">
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                </select>

                <MaterialIcon icon="format_bold" size="tiny" />

                <MaterialIcon icon="format_italic" size="tiny" />

                <MaterialIcon icon="format_underline" size="tiny" />

                <MaterialIcon icon="format_align_left" size="tiny" />

                <MaterialIcon icon="format_align_center" size="tiny" />

                <MaterialIcon icon="format_align_right" size="tiny" />

                <MaterialIcon icon="format_align_justify" size="tiny" />

                <MaterialIcon icon="format_color_text" size="tiny" />

                <MaterialIcon icon="format_color_fill" size="tiny" />

                <MaterialIcon icon="cloud_upload" size="tiny" />

                <MaterialIcon icon="cloud_download" size="tiny" />
            </div>
        </section>
    )
}

export default FormatBar
