import { AppContext } from 'apps/movies/src/store';
import React, { useContext, useEffect, useState } from 'react';

const Pagination = () => {
    const { state } = useContext(AppContext);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const { dispatch } = useContext(AppContext);
       
    useEffect(() => {
        setPage(state.page)
    }, [state.page]);

    useEffect(() => {
        setLastPage(Math.ceil(state.movies.length/5));
    }, [state.movies]);
    
    const handleFirst = () => {
        dispatch({
            type: 'set_page',
            payload: 1
        })
    }

    const handleLast = () => {
        dispatch({
            type: 'set_page',
            payload: lastPage
        })
    }

    const handlePrev = () => {
        if (page>1) {
            dispatch({
                type: 'set_page',
                payload: page-1
            })
        }
    }

    const handleNext = () => {
        if (page<lastPage) {
            dispatch({
                type: 'set_page',
                payload: page+1
            })
        }
    }

    return (
        <div className='flex flex-row justify-center gap-4'>
            <button
                onClick={handleFirst}
            >
                <img className='w-6 h-6' src="/assets/double-arrow-left.svg" />
            </button>
            <button
                onClick={handlePrev}
            >
                <img className='w-6 h-6' src="/assets/arrow-left.svg" />
            </button>
            <button
                onClick={handleNext}
            >
                <img className='w-6 h-6' src="/assets/arrow-right.svg" />
            </button>
            <button
                onClick={handleLast}
            >
                <img className='w-6 h-6' src="/assets/double-arrow-right.svg" />
            </button>
        </div>
    );
};

export default Pagination;
