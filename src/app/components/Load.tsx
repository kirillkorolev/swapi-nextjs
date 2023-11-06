'use client'

import { Button, Modal } from "antd"
import { useState } from "react"

export const Load = () => {
    const [ open, setOpen ] = useState<boolean>(false)

    return (
        <div>
            <div>
                <Button  size='large' onClick={() => setOpen(true)}>Test button</Button>
                </div>
                <div>
                <Modal title="Basic Modal" open={open} > </Modal>
                </div>
        </div>
    )
}
