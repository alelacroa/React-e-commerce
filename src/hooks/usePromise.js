import React, { useState, useEffect } from 'react';

export default (data, timeToResolve = 2000) => {
    const [res, setRes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setRes(data)
            setIsLoading(false)
        }, timeToResolve)
    }, [])

    return {
        res,
        isLoading
    }
}