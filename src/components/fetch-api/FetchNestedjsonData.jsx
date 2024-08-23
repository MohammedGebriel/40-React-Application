
import React from 'react'
import Data from './FetchNestedJsonData.json'

export default function FetchNestedjsonData() {
    return (
        <div>
            {
                Data.map((post) => (
                    <div className='p-[10px]'>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                        {
                            post.media && post.media.map((media) => (
                                <p>{media.name}</p>
                            ))
                        }
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}
