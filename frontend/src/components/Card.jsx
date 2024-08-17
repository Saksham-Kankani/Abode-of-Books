import React, { useState } from 'react'

function Card(props) {
 

    return (
        <>
            <div className='hover:scale-105 duration-200'>
                <div className='mt-4 p-3'>
                    <div className="card   dark:bg-slate-900 dark:text-white dark:border bg-base-100 w-92 shadow-xl">
                        <figure>
                            <img
                                src={props.photo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {props.heading}
                                <div className="badge badge-secondary">{props.type}</div>
                            </h2>
                            <p>{props.desc}</p>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline ">{props.cost}</div>
                                <div className="badge badge-outline hover:bg-pink-400 hover:text-white">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card