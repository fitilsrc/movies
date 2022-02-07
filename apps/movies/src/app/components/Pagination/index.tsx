import { AppContext } from 'apps/movies/src/store';
import React, { useContext, useEffect, useState } from 'react';

import { IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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
            <IconButton
                colorScheme='teal'
                aria-label='First'
                size='md'
                onClick={handleFirst}
                icon={<ArrowLeftIcon />}
            />
            <IconButton
                colorScheme='teal'
                aria-label='Left'
                size='md'
                onClick={handlePrev}
                icon={<ChevronLeftIcon />}
            />
            <IconButton
                colorScheme='teal'
                aria-label='Right'
                size='md'
                onClick={handleNext}
                icon={<ChevronRightIcon />}
            />
            <IconButton
                colorScheme='teal'
                aria-label='Last'
                size='md'
                onClick={handleLast}
                icon={<ArrowRightIcon />}
            />
        </div>
    );
};

export default Pagination;
