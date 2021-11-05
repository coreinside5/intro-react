import React from 'react'

export default function Textarea({ref,defText, areaID}) {
    return (
        <input ref = {ref} type="text" placeholder={defText} id = {areaID}/>
    )
}
