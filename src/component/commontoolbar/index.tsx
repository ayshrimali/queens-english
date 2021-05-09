import * as React from 'react'
import color from '../../utils/color'
import QECol from '../column'
import QELabel from '../label'
import QERow from '../row'

export interface Props {
    title: string
}

const QECommonToolbar: React.FC<Props> = (props) => {
    return (
        <QECol>
            <QERow style={{ marginVertical: 20 }}>
                <QELabel style={{ flex: 1 }} title={props.title} header={true} />
            </QERow>
            <QERow style={{backgroundColor: color.dark, height: 1}} />
        </QECol>
    )
}

export default QECommonToolbar

