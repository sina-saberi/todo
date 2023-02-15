import React from 'react'
import { Icon } from '../../atoms/icon/Icon'



interface ISidebar {

}

export const Sidebar: React.FC<ISidebar> = ({ }) => {
    return (
        <div className={`border-r w-max`}>
            <div>
                Templates:
                <div>
                    <div>
                        <Icon name='eye' />
                        <span>workspace</span>
                    </div>
                </div>
            </div>
        </div>
    )
}