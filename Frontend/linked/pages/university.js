import React from 'react'
import universities from '../utils/universities'


const university = () => {
    return (
        <div>
            {
                universities.map((current, index) =>
                    <div>
                        {current}
                    </div>
                )
            }
        </div>
    )
}

export default university