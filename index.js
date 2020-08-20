import { useRef, useEffect } from 'react'


function useCombinedRefs(...refs) {
    const masterRef = useRef()

    useEffect(() => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(masterRef.current)
                return
            }

            if (ref !== undefined) {
                ref.current = masterRef.current
                return
            }
        })
    }, [refs])

    return masterRef
}

export default useCombinedRefs